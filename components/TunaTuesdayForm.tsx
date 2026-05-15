'use client';

import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import TomoBtnLink from '@/components/TomoBtnLink';

/* ─── Schedule options ─── */
const VALID_TIMES = [
  '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  '17:00', '17:30', '18:00',
] as const;

/* ─── Zod schema ─── */
const schema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(50, 'First name must be 50 characters or fewer'),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(50, 'Last name must be 50 characters or fewer'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Enter a valid email address'),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^[\d\s\-().+]{7,20}$/, 'Enter a valid phone number (7–20 digits)'),
  numberOfPeople: z
    .string()
    .min(1, 'Please select the number of people')
    .refine(
      (v) => Number(v) >= 1 && Number(v) <= 20,
      'Please select between 1 and 20 people',
    ),
  schedule: z
    .string()
    .min(1, 'Please select a time slot')
    .refine(
      (v) => (VALID_TIMES as readonly string[]).includes(v),
      'Please select a valid time slot',
    ),
  comments: z
    .string()
    .max(500, 'Comments cannot exceed 500 characters')
    .optional(),
  authorizationForm: z
    .any()
    .refine((v) => v instanceof File, 'Please upload the signed authorization form')
    .refine((v) => !(v instanceof File) || v.size <= 5 * 1024 * 1024, 'File must be under 5 MB')
    .refine(
      (v) =>
        !(v instanceof File) ||
        ['application/pdf', 'image/jpeg', 'image/png'].includes(v.type),
      'Only PDF, JPG, or PNG files are accepted',
    ),
});

type FormValues = z.infer<typeof schema>;

/* ─── Shared styles ─── */
const inputBase: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '8px',
  border: '1px solid #D9D7D7',
  backgroundColor: '#FFFFFF',
  fontFamily: "'Zen Maru Gothic', sans-serif",
  fontSize: '14px',
  color: '#231F20',
  outline: 'none',
};

const inputError: React.CSSProperties = {
  ...inputBase,
  border: '1px solid #C30029',
};

const labelBase: React.CSSProperties = {
  fontFamily: "'Zen Maru Gothic', sans-serif",
  fontSize: '14px',
  fontWeight: 500,
  color: '#231F20',
  marginBottom: '6px',
  display: 'block',
  textAlign: 'left',
};

const errorMsg: React.CSSProperties = {
  fontFamily: "'Zen Maru Gothic', sans-serif",
  fontSize: '12px',
  color: '#C30029',
  marginTop: '4px',
  display: 'block',
};

const PEOPLE_OPTIONS = Array.from({ length: 20 }, (_, i) => i + 1);

function SubmitButton({ isSubmitting }: { isSubmitting: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        padding: '10px 64px',
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '20px',
        textDecoration: 'none',
        cursor: isSubmitting ? 'not-allowed' : 'pointer',
        whiteSpace: 'nowrap',
        border: '1.5px solid #8c6633',
        backgroundColor: hovered && !isSubmitting ? 'transparent' : '#8c6633',
        color: hovered && !isSubmitting ? '#8c6633' : '#FFFFFF',
        opacity: isSubmitting ? 0.7 : 1,
        transition: 'background-color 0.25s ease, color 0.25s ease',
      }}
    >
      {isSubmitting ? 'Sending…' : 'Submit'}
    </button>
  );
}

export default function TunaTuesdayForm() {
  const [dragOver, setDragOver] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      numberOfPeople: '',
      schedule: '',
      comments: '',
    },
  });

  const uploadedFile = watch('authorizationForm') as File | undefined;

  const handleFileDrop = (file: File) => {
    setValue('authorizationForm', file, { shouldValidate: true });
  };

  const onSubmit = async (_data: FormValues) => {
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    reset();
    setValue('authorizationForm', undefined as unknown as File);
  };

  if (submitted) {
    return (
      <div
        style={{
          padding: '60px 24px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: "'Prestigious', serif",
            fontSize: '48px',
            fontWeight: 400,
            color: '#231F20',
            textTransform: 'uppercase',
            lineHeight: '1',
            marginBottom: '16px',
          }}
        >
          Thank You!
        </p>
        <p
          style={{
            fontFamily: "'Zen Maru Gothic', sans-serif",
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px',
            color: '#231F20',
            marginBottom: '32px',
          }}
        >
          Your reservation request has been received. We&apos;ll be in touch shortly to confirm your Tuna Tuesday experience.
        </p>
        <TomoBtnLink href="#reserve-form" variant="outlined-tuna" onClick={() => setSubmitted(false)}>
          Submit another reservation
        </TomoBtnLink>
      </div>
    );
  }

  return (
    <form style={{ textAlign: 'left' }} onSubmit={handleSubmit(onSubmit)} noValidate>

      {/* First + Last Name */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
          marginBottom: '16px',
        }}
      >
        <div>
          <label style={labelBase}>First Name *</label>
          <input
            {...register('firstName')}
            type="text"
            placeholder="First Name"
            style={errors.firstName ? inputError : inputBase}
          />
          {errors.firstName && <span style={errorMsg}>{errors.firstName.message}</span>}
        </div>
        <div>
          <label style={labelBase}>Last Name *</label>
          <input
            {...register('lastName')}
            type="text"
            placeholder="Last Name"
            style={errors.lastName ? inputError : inputBase}
          />
          {errors.lastName && <span style={errorMsg}>{errors.lastName.message}</span>}
        </div>
      </div>

      {/* Email + Phone */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
          marginBottom: '16px',
        }}
      >
        <div>
          <label style={labelBase}>Email *</label>
          <input
            {...register('email')}
            type="email"
            placeholder="Email Address"
            style={errors.email ? inputError : inputBase}
          />
          {errors.email && <span style={errorMsg}>{errors.email.message}</span>}
        </div>
        <div>
          <label style={labelBase}>Phone *</label>
          <div
            style={{
              display: 'flex',
              borderRadius: '8px',
              border: `1px solid ${errors.phone ? '#C30029' : '#D9D7D7'}`,
              overflow: 'hidden',
              backgroundColor: '#FFFFFF',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0 12px',
                gap: '6px',
                borderRight: `1px solid ${errors.phone ? '#C30029' : '#D9D7D7'}`,
                fontSize: '14px',
                color: '#231F20',
                whiteSpace: 'nowrap',
                fontFamily: "'Zen Maru Gothic', sans-serif",
              }}
            >
              🇺🇸 +1
            </div>
            <input
              {...register('phone')}
              type="tel"
              placeholder="Phone Number"
              style={{
                flex: 1,
                padding: '12px',
                border: 'none',
                outline: 'none',
                fontFamily: "'Zen Maru Gothic', sans-serif",
                fontSize: '14px',
                color: '#231F20',
                backgroundColor: 'transparent',
              }}
            />
          </div>
          {errors.phone && <span style={errorMsg}>{errors.phone.message}</span>}
        </div>
      </div>

      {/* Number of People + Schedule */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
          marginBottom: '16px',
        }}
      >
        <div>
          <label style={labelBase}>Number Of People *</label>
          <select
            {...register('numberOfPeople')}
            style={errors.numberOfPeople ? { ...inputError, cursor: 'pointer' } : { ...inputBase, cursor: 'pointer' }}
          >
            <option value="">Select Number</option>
            {PEOPLE_OPTIONS.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
          {errors.numberOfPeople && (
            <span style={errorMsg}>{errors.numberOfPeople.message}</span>
          )}
        </div>
        <div>
          <label style={labelBase}>Schedule *</label>
          <select
            {...register('schedule')}
            style={errors.schedule ? { ...inputError, cursor: 'pointer' } : { ...inputBase, cursor: 'pointer' }}
          >
            <option value="">00:00</option>
            {VALID_TIMES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {errors.schedule && <span style={errorMsg}>{errors.schedule.message}</span>}
        </div>
      </div>

      {/* Additional Comments */}
      <div style={{ marginBottom: '24px' }}>
        <label style={labelBase}>Additional Comments</label>
        <textarea
          {...register('comments')}
          placeholder="Additional Comments"
          rows={4}
          style={{
            ...(errors.comments ? inputError : inputBase),
            resize: 'vertical',
            minHeight: '100px',
          }}
        />
        {errors.comments && <span style={errorMsg}>{errors.comments.message}</span>}
      </div>

      {/* Download authorization form */}
      <div style={{ marginBottom: '24px' }}>
        <TomoBtnLink
          href="/assets/Tuna_Authorization.pdf"
          variant="solid-bronze"
          download
        >
          Download the authorization form
        </TomoBtnLink>
      </div>

      {/* Upload */}
      <div style={{ marginBottom: '32px' }}>
        <label style={{ ...labelBase, marginBottom: '8px' }}>
          Upload here the signed authorization form (Required) *
        </label>
        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
            const file = e.dataTransfer.files?.[0];
            if (file) handleFileDrop(file);
          }}
          onClick={() => fileInputRef.current?.click()}
          style={{
            border: `1.5px dashed ${
              errors.authorizationForm ? '#C30029' : dragOver ? '#987636' : '#C8C6C6'
            }`,
            borderRadius: '8px',
            padding: '40px 24px',
            textAlign: 'center',
            cursor: 'pointer',
            backgroundColor: dragOver ? 'rgba(152,118,54,0.04)' : '#FAFAF9',
            transition: 'border-color 0.2s ease, background-color 0.2s ease',
          }}
        >
          {uploadedFile instanceof File ? (
            <p
              style={{
                fontFamily: "'Zen Maru Gothic', sans-serif",
                fontSize: '14px',
                color: '#231F20',
              }}
            >
              📎 {uploadedFile.name}
            </p>
          ) : (
            <>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ margin: '0 auto 10px', display: 'block' }}
              >
                <path
                  d="M16 22V6M16 6L10 12M16 6L22 12"
                  stroke="#A8A6A6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 27H26"
                  stroke="#A8A6A6"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <p
                style={{
                  fontFamily: "'Zen Maru Gothic', sans-serif",
                  fontSize: '13px',
                  color: '#A8A6A6',
                }}
              >
                Drag & Drop Files,{' '}
                <span style={{ color: '#987636', textDecoration: 'underline' }}>
                  Choose Files to Upload
                </span>
              </p>
            </>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          style={{ display: 'none' }}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFileDrop(file);
          }}
        />
        {errors.authorizationForm && (
          <span style={errorMsg}>
            {errors.authorizationForm.message as string}
          </span>
        )}
      </div>

      {/* Submit */}
      <div style={{ textAlign: 'center' }}>
        <SubmitButton isSubmitting={isSubmitting} />
      </div>

      {/* Note */}
      <p
        style={{
          fontFamily: "'Zen Maru Gothic', sans-serif",
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '19px',
          color: '#231F20',
          marginTop: '20px',
          textAlign: 'center',
        }}
      >
        * <strong>Limited availability</strong>
        <br />
        Reservations required.
      </p>
    </form>
  );
}
