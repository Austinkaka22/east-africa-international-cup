"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type AgeGroupOption = {
  label: string;
};

type RegisteredTeam = {
  name: string;
  country: string;
  ageGroup: string;
  status: string;
};

type Fixture = {
  id: string;
  date: string;
  time: string;
  ageGroup: string;
  pitch: string;
  home: string;
  away: string;
  status: string;
};

type Result = {
  match: string;
  ageGroup: string;
  score: string;
  status: string;
};

type Standing = {
  team: string;
  ageGroup: string;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  gd: number;
  points: number;
};

type RecordEntry = {
  edition: string;
  ageGroup: string;
  category: string;
  title: string;
  status: string;
};

function useAgeGroupFilter<T extends { ageGroup: string }>(items: T[]) {
  const [selected, setSelected] = useState("All age groups");
  const filtered = useMemo(
    () => (selected === "All age groups" ? items : items.filter((item) => item.ageGroup === selected)),
    [items, selected]
  );

  return { filtered, selected, setSelected };
}

function AgeGroupSelector({
  ageGroups,
  selected,
  onChange
}: {
  ageGroups: AgeGroupOption[];
  selected: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="filter-bar">
      <label htmlFor="ageGroupFilter">Age group</label>
      <select
        id="ageGroupFilter"
        value={selected}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="All age groups">All age groups</option>
        {ageGroups.map((ageGroup) => (
          <option key={ageGroup.label} value={ageGroup.label}>
            {ageGroup.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function EmptyRow({ colSpan }: { colSpan: number }) {
  return (
    <tr>
      <td colSpan={colSpan}>No records found for this age group yet.</td>
    </tr>
  );
}

export function RegisteredTeamsView({
  teams,
  ageGroups
}: {
  teams: RegisteredTeam[];
  ageGroups: AgeGroupOption[];
}) {
  const { filtered, selected, setSelected } = useAgeGroupFilter(teams);

  return (
    <>
      <AgeGroupSelector ageGroups={ageGroups} selected={selected} onChange={setSelected} />
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Academy</th>
              <th>Country</th>
              <th>Age group</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((team) => (
                <tr key={`${team.name}-${team.ageGroup}`}>
                  <td>{team.name}</td>
                  <td>{team.country}</td>
                  <td>{team.ageGroup}</td>
                  <td>{team.status}</td>
                </tr>
              ))
            ) : (
              <EmptyRow colSpan={4} />
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export function FixturesView({
  fixtures,
  ageGroups
}: {
  fixtures: Fixture[];
  ageGroups: AgeGroupOption[];
}) {
  const { filtered, selected, setSelected } = useAgeGroupFilter(fixtures);

  return (
    <>
      <AgeGroupSelector ageGroups={ageGroups} selected={selected} onChange={setSelected} />
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Age group</th>
              <th>Match</th>
              <th>Pitch</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((fixture) => (
                <tr key={fixture.id}>
                  <td>{fixture.date}</td>
                  <td>{fixture.time}</td>
                  <td>{fixture.ageGroup}</td>
                  <td>
                    <Link href={`/match-details?id=${fixture.id}`}>
                      {fixture.home} vs {fixture.away}
                    </Link>
                  </td>
                  <td>{fixture.pitch}</td>
                  <td>{fixture.status}</td>
                </tr>
              ))
            ) : (
              <EmptyRow colSpan={6} />
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export function ResultsView({
  results,
  ageGroups
}: {
  results: Result[];
  ageGroups: AgeGroupOption[];
}) {
  const { filtered, selected, setSelected } = useAgeGroupFilter(results);

  return (
    <>
      <AgeGroupSelector ageGroups={ageGroups} selected={selected} onChange={setSelected} />
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Match</th>
              <th>Age group</th>
              <th>Score</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((result) => (
                <tr key={`${result.match}-${result.ageGroup}`}>
                  <td>{result.match}</td>
                  <td>{result.ageGroup}</td>
                  <td>{result.score}</td>
                  <td>{result.status}</td>
                </tr>
              ))
            ) : (
              <EmptyRow colSpan={4} />
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export function TablesView({
  standings,
  ageGroups
}: {
  standings: Standing[];
  ageGroups: AgeGroupOption[];
}) {
  const { filtered, selected, setSelected } = useAgeGroupFilter(standings);

  return (
    <>
      <AgeGroupSelector ageGroups={ageGroups} selected={selected} onChange={setSelected} />
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>Age group</th>
              <th>P</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GD</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((row) => (
                <tr key={`${row.team}-${row.ageGroup}`}>
                  <td>{row.team}</td>
                  <td>{row.ageGroup}</td>
                  <td>{row.played}</td>
                  <td>{row.wins}</td>
                  <td>{row.draws}</td>
                  <td>{row.losses}</td>
                  <td>{row.gd}</td>
                  <td>{row.points}</td>
                </tr>
              ))
            ) : (
              <EmptyRow colSpan={8} />
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export function RecordsView({
  records,
  ageGroups
}: {
  records: RecordEntry[];
  ageGroups: AgeGroupOption[];
}) {
  const { filtered, selected, setSelected } = useAgeGroupFilter(records);

  return (
    <>
      <AgeGroupSelector ageGroups={ageGroups} selected={selected} onChange={setSelected} />
      {filtered.length > 0 ? (
        <div className="grid three" style={{ marginTop: 26 }}>
          {filtered.map((record) => (
            <div className="card pad" key={record.title}>
              <p className="eyebrow">{record.edition}</p>
              <h3>{record.category}</h3>
              <p>
                <strong>{record.ageGroup}</strong>
              </p>
              <p>{record.status}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="card pad empty-state">
          <p>No records found for this age group yet.</p>
        </div>
      )}
    </>
  );
}
