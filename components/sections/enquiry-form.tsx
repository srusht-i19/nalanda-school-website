"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { school } from "@/content/school";

const base = z.object({
  parentName: z.string().trim().min(2, "Please enter your name"),
  childName: z.string().trim(),
  stage: z.string(),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address")
    .or(z.literal("")),
  message: z.string().trim().max(500, "Please keep it under 500 characters"),
  botcheck: z.boolean(),
});

type FormValues = z.infer<typeof base>;
type Status = "idle" | "sending" | "success" | "error";
type Variant = "admission" | "contact";

function makeSchema(variant: Variant) {
  return base.superRefine((v, ctx) => {
    if (variant === "admission") {
      if (v.childName.length < 2) {
        ctx.addIssue({
          code: "custom",
          path: ["childName"],
          message: "Please enter your child's name",
        });
      }
      if (!v.stage) {
        ctx.addIssue({
          code: "custom",
          path: ["stage"],
          message: "Please choose a stage",
        });
      }
    } else if (v.message.length < 5) {
      ctx.addIssue({
        code: "custom",
        path: ["message"],
        message: "Please write a short message",
      });
    }
  });
}

const inputClass =
  "min-h-11 w-full rounded-xl border border-line bg-surface-2 px-4 text-base text-ink placeholder:text-placeholder focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary aria-[invalid=true]:border-red-700";

function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-ink mb-1.5 block text-sm font-semibold"
      >
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export function EnquiryForm({
  source = "Admissions page",
  variant = "admission",
}: {
  source?: string;
  variant?: Variant;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const schema = useMemo(() => makeSchema(variant), [variant]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      parentName: "",
      childName: "",
      stage: "",
      phone: "",
      email: "",
      message: "",
      botcheck: false,
    },
  });

  const isAdmission = variant === "admission";

  async function onSubmit(values: FormValues) {
    const { botcheck, ...fields } = values;
    if (botcheck) {
      // Honeypot filled in: a bot. Pretend it worked and send nothing.
      setStatus("success");
      return;
    }
    const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!key) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: key,
          subject: `New ${isAdmission ? "admission enquiry" : "contact message"} from ${school.name} website (${source})`,
          from_name: school.name,
          source,
          ...fields,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-card bg-surface p-8">
        <h3>Thank you!</h3>
        <p className="text-muted-foreground mt-3 text-lg">
          {isAdmission
            ? "We have received your enquiry. Our admissions team will contact you soon."
            : "We have received your message. We will get back to you soon."}
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6 min-h-11"
          onClick={() => setStatus("idle")}
        >
          {isAdmission ? "Send another enquiry" : "Send another message"}
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-card bg-surface space-y-5 p-6 min-[900px]:p-8"
    >
      <div className="grid gap-5 min-[640px]:grid-cols-2">
        <Field
          id="parentName"
          label={isAdmission ? "Parent's name" : "Your name"}
          required
          error={errors.parentName?.message}
        >
          <input
            id="parentName"
            autoComplete="name"
            className={inputClass}
            aria-invalid={!!errors.parentName}
            aria-describedby={
              errors.parentName ? "parentName-error" : undefined
            }
            {...register("parentName")}
          />
        </Field>
        {isAdmission && (
          <Field
            id="childName"
            label="Child's name"
            required
            error={errors.childName?.message}
          >
            <input
              id="childName"
              className={inputClass}
              aria-invalid={!!errors.childName}
              aria-describedby={
                errors.childName ? "childName-error" : undefined
              }
              {...register("childName")}
            />
          </Field>
        )}
        <Field
          id="phone"
          label="Mobile number"
          required
          error={errors.phone?.message}
        >
          <input
            id="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            placeholder="10-digit number"
            className={inputClass}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
        </Field>
        <Field
          id="email"
          label="Email (optional)"
          error={errors.email?.message}
        >
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={inputClass}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
        </Field>
      </div>

      {isAdmission && (
        <Field
          id="stage"
          label="Stage applying for"
          required
          error={errors.stage?.message}
        >
          <select
            id="stage"
            className={inputClass}
            aria-invalid={!!errors.stage}
            aria-describedby={errors.stage ? "stage-error" : undefined}
            {...register("stage")}
          >
            <option value="">Choose a stage</option>
            <option value="Pre-primary">Pre-primary</option>
            <option value="Primary">Primary</option>
            <option value="Middle">Middle</option>
            <option value="Secondary">Secondary</option>
          </select>
        </Field>
      )}

      <Field
        id="message"
        label={isAdmission ? "Message (optional)" : "Message"}
        required={!isAdmission}
        error={errors.message?.message}
      >
        <textarea
          id="message"
          rows={4}
          className={`${inputClass} py-3`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
      </Field>

      {/* Honeypot: hidden from people, bots tend to tick it */}
      <input
        type="checkbox"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        {...register("botcheck")}
      />

      {status === "error" && (
        <p
          role="alert"
          className="rounded-xl bg-red-50 p-4 text-sm text-red-800"
        >
          Sorry, we could not send your message. Please try again, or call us on{" "}
          {school.phone}.
        </p>
      )}

      <Button
        type="submit"
        disabled={status === "sending"}
        className="bg-accent text-ink hover:bg-accent-hover min-h-11 rounded-full px-8 font-semibold"
      >
        {status === "sending"
          ? "Sending..."
          : isAdmission
            ? "Send enquiry"
            : "Send message"}
      </Button>
    </form>
  );
}
