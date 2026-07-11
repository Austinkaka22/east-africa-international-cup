"use client";

import { useState } from "react";
import type { ageGroups } from "@/data/tournament";

type AgeGroup = (typeof ageGroups)[number];

type TeamRegistrationFormProps = {
  countries: string[];
  ageGroups: AgeGroup[];
  teamCountOptions: string[];
  registrationFee: string;
  registrationDeadline: string;
};

type Status = {
  type: "success" | "error";
  message: string;
};

const teamFieldNames: Record<string, string> = {
  U7: "u7Teams",
  U9: "u9Teams",
  U11: "u11Teams",
  U13: "u13Teams",
  U15: "u15Teams",
  U17: "u17Teams",
  GIRLS_U13: "girlsU13Teams",
  GIRLS_U15: "girlsU15Teams",
  GIRLS_U17: "girlsU17Teams",
  SENIORS: "seniorsTeams"
};

export function TeamRegistrationForm({
  countries,
  ageGroups,
  teamCountOptions,
  registrationFee,
  registrationDeadline
}: TeamRegistrationFormProps) {
  const [status, setStatus] = useState<Status | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setStatus(null);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/team-registration", {
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
      <h2>Academy registration form</h2>
      <p>
        Register once for your academy or club, then select how many teams you want to
        enter in each age group.
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="honeypot" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="form-grid">
          <div className="field">
            <label htmlFor="academyName">Academy or club name</label>
            <input id="academyName" name="academyName" required />
          </div>
          <div className="field">
            <label htmlFor="country">Country</label>
            <select id="country" name="country" required>
              <option value="">Select an option</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="contactName">Contact person</label>
            <input id="contactName" name="contactName" required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" required />
          </div>
        </div>

        <div className="form-section">
          <h3>Teams by age group</h3>
          <p>Select None for any category you are not entering.</p>
          <div className="form-grid">
            {ageGroups.map((ageGroup) => (
              <div className="field" key={ageGroup.key}>
                <label htmlFor={teamFieldNames[ageGroup.key]}>{ageGroup.label} Category</label>
                <select
                  id={teamFieldNames[ageGroup.key]}
                  name={teamFieldNames[ageGroup.key]}
                  defaultValue="None"
                  required
                >
                  {teamCountOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>

        <div className="form-section">
          <h3>Commitment</h3>
          <div className="commitment-copy">
            <p>
              We commit to participating in the East Africa International Cup 2027 and agree
              to abide by all tournament Rules & Regulations and Guidelines.
            </p>
            <p>
              We understand that participation requires payment of {registrationFee} per
              individual team per category as the registration fee.
            </p>
            <p>Registration closes on {registrationDeadline}.</p>
          </div>
          <div className="field">
            <label htmlFor="commitment">Response</label>
            <select id="commitment" name="commitment" required>
              <option value="">Select an option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="field">
          <label htmlFor="notes">Notes</label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            placeholder="Tell us anything the registration team should know."
          />
        </div>

        {status ? <div className={`status ${status.type}`}>{status.message}</div> : null}
        <button className="button gold" type="submit" disabled={pending}>
          {pending ? "Submitting..." : "Submit Registration"}
        </button>
      </form>
    </div>
  );
}
