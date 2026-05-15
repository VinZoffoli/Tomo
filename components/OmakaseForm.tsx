'use client';

import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import TomoBtnLink from '@/components/TomoBtnLink';

const SCHEDULE_TIMES = [
  '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30',
] as const;

const PEOPLE_OPTIONS = Array.from({ length: 20 }, (_, i) => i + 1);

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
    .refine((v) => Number(v) >= 1 && Number(v) <= 20, 'Please select between 1 and 20 people'),
  schedule: z
    .string()
    .min(1, 'Please select a time slot')
    .refine(
      (v) => (SCHEDULE_TIMES as readonly string[]).includes(v),
      'Please select a valid time slot',
    ),
  comments: z.string().max(500, 'Comments cannot exceed 500 characters').optional(),
  authorizationFiles: z
    .array(z.any())
    .min(1, 'Please upload at least one file')
    .max(2, 'You can upload up to 2 files')
    .refine(
      (files) => files.every((f) => f instanceof File && f.size <= 5 * 1024 * 1024),
      'Each file must be under 5 MB',
    )
    .refine(
      (files) =>
        files.every(
          (f) =>
            f instanceof File &&
            ['application/pdf', 'image/jpeg', 'image/png'].includes(f.type),
        ),
      'Only PDF, JPG, or PNG files are accepted',
    ),
});

type FormValues = z.infer<typeof schema>;

/* ─── Shared styles ─── */
const inputBase: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '8px',
  border: '1px solid rgba(255,255,255,0.15)',
  backgroundColor: 'rgba(255,255,255,0.06)',
  fontFamily: "'Zen Maru Gothic', sans-serif",
  fontSize: '14px',
  color: '#F8F7F8',
  outline: 'none',
};

const inputErr: React.CSSProperties = {
  ...inputBase,
  border: '1px solid #C30029',
};

const labelBase: React.CSSProperties = {
  fontFamily: "'Zen Maru Gothic', sans-serif",
  fontSize: '14px',
  fontWeight: 500,
  color: '#C69C6D',
  marginBottom: '6px',
  display: 'block',
  textAlign: 'left',
};

const errMsg: React.CSSProperties = {
  fontFamily: "'Zen Maru Gothic', sans-serif",
  fontSize: '12px',
  color: '#C30029',
  marginTop: '4px',
  display: 'block',
};

function SubmitBtn({ isSubmitting }: { isSubmitting: boolean }) {
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
        cursor: isSubmitting ? 'not-allowed' : 'pointer',
        whiteSpace: 'nowrap',
        border: '1.5px solid #C69C6D',
        backgroundColor: hovered && !isSubmitting ? 'transparent' : '#C69C6D',
        color: hovered && !isSubmitting ? '#C69C6D' : '#231F20',
        opacity: isSubmitting ? 0.7 : 1,
        transition: 'background-color 0.25s ease, color 0.25s ease',
      }}
    >
      {isSubmitting ? 'Sending…' : 'Submit'}
    </button>
  );
}

export default function OmakaseForm() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
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
      authorizationFiles: [],
    },
  });

  useEffect(() => {
    setValue('authorizationFiles', uploadedFiles);
  }, [uploadedFiles, setValue]);

  const addFile = (file: File) => {
    setUploadedFiles((prev) => {
      if (prev.length >= 2) return prev;
      if (prev.some((f) => f.name === file.name && f.size === file.size)) return prev;
      return [...prev, file];
    });
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    Array.from(e.dataTransfer.files).forEach(addFile);
  };

  const onSubmit = async (_data: FormValues) => {
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    reset();
    setUploadedFiles([]);
  };

  if (submitted) {
    return (
      <div style={{ padding: '60px 24px', textAlign: 'center' }}>
        <p
          style={{
            fontFamily: "'Prestigious', serif",
            fontSize: '48px',
            fontWeight: 400,
            color: '#F8F7F8',
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
            color: '#F0EEEE',
            marginBottom: '32px',
          }}
        >
          Your reservation request has been received. We&apos;ll be in touch shortly to confirm your Omakase experience.
        </p>
        <TomoBtnLink href="#reserve-form" variant="outlined-tuna" onClick={() => setSubmitted(false)}>
          Submit another reservation
        </TomoBtnLink>
      </div>
    );
  }

  return (
    <form className="form-dark" style={{ textAlign: 'left' }} onSubmit={handleSubmit(onSubmit)} noValidate>

      {/* Download buttons */}
      <div
        style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '40px',
        }}
      >
        <TomoBtnLink href="/assets/omokase_form.pdf" variant="outlined-tuna" download>
          Download Authorization
        </TomoBtnLink>
        <TomoBtnLink href="/assets/omokase_questionnaire.pdf" variant="outlined-tuna" download>
          Download Questionnaire
        </TomoBtnLink>
      </div>

      {/* First + Last Name */}
      <div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '16px' }}
      >
        <div>
          <label style={labelBase}>First Name *</label>
          <input
            {...register('firstName')}
            type="text"
            placeholder="First Name"
            style={errors.firstName ? inputErr : inputBase}
          />
          {errors.firstName && <span style={errMsg}>{errors.firstName.message}</span>}
        </div>
        <div>
          <label style={labelBase}>Last Name *</label>
          <input
            {...register('lastName')}
            type="text"
            placeholder="Last Name"
            style={errors.lastName ? inputErr : inputBase}
          />
          {errors.lastName && <span style={errMsg}>{errors.lastName.message}</span>}
        </div>
      </div>

      {/* Email + Phone */}
      <div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '16px' }}
      >
        <div>
          <label style={labelBase}>Email *</label>
          <input
            {...register('email')}
            type="email"
            placeholder="Email Address"
            style={errors.email ? inputErr : inputBase}
          />
          {errors.email && <span style={errMsg}>{errors.email.message}</span>}
        </div>
        <div>
          <label style={labelBase}>Phone *</label>
          <div
            style={{
              display: 'flex',
              borderRadius: '8px',
              border: `1px solid ${errors.phone ? '#C30029' : 'rgba(255,255,255,0.15)'}`,
              overflow: 'hidden',
              backgroundColor: 'rgba(255,255,255,0.06)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0 12px',
                gap: '6px',
                borderRight: `1px solid ${errors.phone ? '#C30029' : 'rgba(255,255,255,0.15)'}`,
                fontSize: '14px',
                color: '#F8F7F8',
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
                color: '#F8F7F8',
                backgroundColor: 'transparent',
              }}
            />
          </div>
          {errors.phone && <span style={errMsg}>{errors.phone.message}</span>}
        </div>
      </div>

      {/* Number of People + Schedule */}
      <div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '16px' }}
      >
        <div>
          <label style={labelBase}>Number Of People *</label>
          <select
            {...register('numberOfPeople')}
            style={errors.numberOfPeople ? { ...inputErr, cursor: 'pointer' } : { ...inputBase, cursor: 'pointer' }}
          >
            <option value="">Select Number</option>
            {PEOPLE_OPTIONS.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
          {errors.numberOfPeople && <span style={errMsg}>{errors.numberOfPeople.message}</span>}
        </div>
        <div>
          <label style={labelBase}>Schedule *</label>
          <select
            {...register('schedule')}
            style={errors.schedule ? { ...inputErr, cursor: 'pointer' } : { ...inputBase, cursor: 'pointer' }}
          >
            <option value="">00:00</option>
            {SCHEDULE_TIMES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {errors.schedule && <span style={errMsg}>{errors.schedule.message}</span>}
        </div>
      </div>

      {/* Additional Comments */}
      <div style={{ marginBottom: '32px' }}>
        <label style={labelBase}>Additional Comments</label>
        <textarea
          {...register('comments')}
          placeholder="Additional Comments"
          rows={4}
          style={{
            ...(errors.comments ? inputErr : inputBase),
            resize: 'vertical',
            minHeight: '100px',
          }}
        />
        {errors.comments && <span style={errMsg}>{errors.comments.message}</span>}
      </div>

      {/* Upload — max 2 files */}
      <div style={{ marginBottom: '32px' }}>
        <label style={{ ...labelBase, marginBottom: '8px' }}>
          Upload here the signed authorization form (Required) *
        </label>
        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => uploadedFiles.length < 2 && fileInputRef.current?.click()}
          style={{
            border: `1.5px dashed ${errors.authorizationFiles ? '#C30029' : dragOver ? '#C69C6D' : 'rgba(255,255,255,0.25)'}`,
            borderRadius: '8px',
            padding: '32px 24px',
            textAlign: 'center',
            cursor: uploadedFiles.length >= 2 ? 'default' : 'pointer',
            backgroundColor: dragOver ? 'rgba(198,156,109,0.06)' : 'rgba(255,255,255,0.03)',
            transition: 'border-color 0.2s ease, background-color 0.2s ease',
          }}
        >
          {uploadedFiles.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
              {uploadedFiles.map((f, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    borderRadius: '6px',
                    padding: '6px 12px',
                  }}
                >
                  <span style={{ fontFamily: "'Zen Maru Gothic', sans-serif", fontSize: '13px', color: '#F8F7F8' }}>
                    📎 {f.name}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); removeFile(i); }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#C69C6D',
                      cursor: 'pointer',
                      fontSize: '16px',
                      lineHeight: 1,
                      padding: 0,
                    }}
                  >
                    ×
                  </button>
                </div>
              ))}
              {uploadedFiles.length < 2 && (
                <p style={{ fontFamily: "'Zen Maru Gothic', sans-serif", fontSize: '12px', color: 'rgba(248,247,248,0.5)', marginTop: '4px' }}>
                  Click or drop to add one more file
                </p>
              )}
            </div>
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
                <path d="M16 22V6M16 6L10 12M16 6L22 12" stroke="rgba(248,247,248,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 27H26" stroke="rgba(248,247,248,0.4)" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <p style={{ fontFamily: "'Zen Maru Gothic', sans-serif", fontSize: '13px', color: 'rgba(248,247,248,0.5)' }}>
                Drag & Drop Files,{' '}
                <span style={{ color: '#C69C6D', textDecoration: 'underline' }}>Choose Files to Upload</span>
              </p>
              <p style={{ fontFamily: "'Zen Maru Gothic', sans-serif", fontSize: '12px', color: 'rgba(248,247,248,0.35)', marginTop: '4px' }}>
                You can upload up to 2 files.
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
            Array.from(e.target.files ?? []).forEach(addFile);
            e.target.value = '';
          }}
        />
        {errors.authorizationFiles && (
          <span style={errMsg}>{errors.authorizationFiles.message as string}</span>
        )}
      </div>

      {/* Submit */}
      <div style={{ textAlign: 'center' }}>
        <SubmitBtn isSubmitting={isSubmitting} />
      </div>

      {/* Note */}
      <p
        style={{
          fontFamily: "'Zen Maru Gothic', sans-serif",
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '19px',
          color: '#F0EEEE',
          marginTop: '20px',
          textAlign: 'center',
        }}
      >
        *<strong>Limited availability</strong> — Reservations required.
      </p>
    </form>
  );
}
