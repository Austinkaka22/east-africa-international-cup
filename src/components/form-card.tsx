"use client";

import { useState } from "react";

export type Field =
  | {
      name: string;
      label: string;
      type?: "text" | "email" | "tel" | "number";
      placeholder?: string;
      required?: boolean;
      options?: never;
      rows?: never;
    }
  | {
      name: string;
      label: string;
      type: "select";
      required?: boolean;
      options: string[];
      placeholder?: string;
      rows?: never;
    }
  | {
      name: string;
      label: string;
      type: "textarea";
      placeholder?: string;
      required?: boolean;
      rows?: number;
      options?: never;
    };

type FormCardProps = {
  title: string;
  intro: string;
  endpoint: string;
  fields: Field[];
  submitLabel?: string;
};

type Status = {
  type: "success" | "error";
  message: string;
};

export function FormCard({
  title,
  intro,
  endpoint,
  fields,
  submitLabel = "Submit"
}: FormCardProps) {
  const [status, setStatus] = useState<Status | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setStatus(null);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = (await response.json()) as { message?: string };
      setStatus({
        type: response.ok ? "success" : "error",
        message: result.message ?? (response.ok ? "Submitted." : "Submission failed.")
      });
      if (response.ok) {
        event.currentTarget.reset();
      }
    } catch {
      setStatus({
        type: "error",
        message: "Could not submit right now. Please try again."
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="card pad">
      <h2>{title}</h2>
      <p>{intro}</p>
      <form className="form" onSubmit={onSubmit}>
        <div className="honeypot" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <div className="form-grid">
          {fields.map((field) => (
            <div
              className="field"
              key={field.name}
              style={field.type === "textarea" ? { gridColumn: "1 / -1" } : undefined}
            >
              <label htmlFor={field.name}>{field.label}</label>
              {field.type === "select" ? (
                <select id={field.name} name={field.name} required={field.required}>
                  <option value="">{field.placeholder ?? "Select an option"}</option>
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : field.type === "textarea" ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                  rows={field.rows ?? 5}
                />
              ) : (
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type ?? "text"}
                  placeholder={field.placeholder}
                  required={field.required}
                />
              )}
            </div>
          ))}
        </div>
        {status ? <div className={`status ${status.type}`}>{status.message}</div> : null}
        <button className="button gold" type="submit" disabled={pending}>
          {pending ? "Submitting..." : submitLabel}
        </button>
      </form>
    </div>
  );
}
