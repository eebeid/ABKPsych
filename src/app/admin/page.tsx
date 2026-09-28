"use client";

export const dynamic = "force-dynamic";

import { useState, useEffect, useCallback } from "react";
import {
  LogOut,
  Save,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Lock,
  Eye,
  EyeOff,
  Loader2,
  Shield,
  Edit3,
  FileText,
  Users,
  HelpCircle,
  Settings,
  Plus,
  Trash2,
} from "lucide-react";
import type { EditableContent } from "@/lib/contentStore";

/* ─── Types ─────────────────────────────────────────── */
type Section =
  | "practice"
  | "contact"
  | "disclaimers"
  | "audiences"
  | "faq"
  | "meta";

/* ─── Login Screen ──────────────────────────────────── */
function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    setLoading(false);
    if (res.ok) {
      onLogin();
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F5] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo area */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#4F6752] mb-4">
            <Shield className="w-7 h-7 text-white" />
          </div>
          <h1 className="font-serif text-2xl text-[#1C241E]">Admin Portal</h1>
          <p className="text-xs text-[#6B826E] mt-1 tracking-wide uppercase">
            ABK Psychological Services
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-[#E2E6E2] rounded-sm shadow-sm p-8 space-y-5"
        >
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C241E] mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
              className="w-full border border-[#D5DAD5] rounded-sm px-3 py-2.5 text-sm text-[#1C241E] focus:outline-none focus:ring-2 focus:ring-[#4F6752] bg-[#F9F8F5]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C241E] mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPw ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="w-full border border-[#D5DAD5] rounded-sm px-3 py-2.5 text-sm text-[#1C241E] pr-10 focus:outline-none focus:ring-2 focus:ring-[#4F6752] bg-[#F9F8F5]"
              />
              <button
                type="button"
                onClick={() => setShowPw((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B826E] hover:text-[#4F6752]"
              >
                {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-600 text-xs bg-red-50 border border-red-200 rounded-sm p-3">
              <AlertCircle className="w-4 h-4 shrink-0" />
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#4F6752] hover:bg-[#3E5341] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors disabled:opacity-60"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Lock className="w-4 h-4" />
            )}
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>

        <p className="text-center text-[11px] text-[#9AA69C] mt-6">
          This page is not publicly listed.
        </p>
      </div>
    </div>
  );
}

/* ─── Section Header ────────────────────────────────── */
function SectionHeader({
  icon: Icon,
  title,
  subtitle,
  open,
  onToggle,
}: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="w-full flex items-center justify-between p-5 text-left group"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-sm bg-[#EFF3EF] flex items-center justify-center group-hover:bg-[#4F6752] transition-colors">
          <Icon className="w-4 h-4 text-[#4F6752] group-hover:text-white transition-colors" />
        </div>
        <div>
          <div className="text-sm font-semibold text-[#1C241E]">{title}</div>
          <div className="text-[11px] text-[#6B826E]">{subtitle}</div>
        </div>
      </div>
      {open ? (
        <ChevronUp className="w-4 h-4 text-[#6B826E]" />
      ) : (
        <ChevronDown className="w-4 h-4 text-[#6B826E]" />
      )}
    </button>
  );
}

/* ─── Field Components ──────────────────────────────── */
function Field({
  label,
  value,
  onChange,
  multiline = false,
  rows = 3,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  rows?: number;
}) {
  const cls =
    "w-full border border-[#D5DAD5] rounded-sm px-3 py-2 text-sm text-[#1C241E] focus:outline-none focus:ring-2 focus:ring-[#4F6752] bg-[#F9F8F5] transition-shadow";
  return (
    <div>
      <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#4F6752] mb-1.5">
        {label}
      </label>
      {multiline ? (
        <textarea rows={rows} value={value} onChange={(e) => onChange(e.target.value)} className={cls} />
      ) : (
        <input type="text" value={value} onChange={(e) => onChange(e.target.value)} className={cls} />
      )}
    </div>
  );
}

/* ─── Main Editor ───────────────────────────────────── */
function Editor({ onLogout }: { onLogout: () => void }) {
  const [content, setContent] = useState<EditableContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saved" | "error">("idle");
  const [openSection, setOpenSection] = useState<Section>("practice");

  const fetchContent = useCallback(async () => {
    setLoading(true);
    const res = await fetch("/api/admin/content");
    if (res.ok) {
      setContent(await res.json());
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  const handleSave = async () => {
    if (!content) return;
    setSaving(true);
    setSaveStatus("idle");
    const res = await fetch("/api/admin/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
    });
    setSaving(false);
    setSaveStatus(res.ok ? "saved" : "error");
    if (res.ok) setTimeout(() => setSaveStatus("idle"), 3000);
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    onLogout();
  };

  const set = (key: keyof EditableContent, value: unknown) =>
    setContent((prev) => (prev ? { ...prev, [key]: value } : prev));

  const toggle = (s: Section) =>
    setOpenSection((cur) => (cur === s ? ("" as Section) : s));

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F9F8F5] flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-[#4F6752]" />
      </div>
    );
  }

  if (!content) return null;

  return (
    <div className="min-h-screen bg-[#F0F2F0]">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 bg-[#1C241E] border-b border-[#343E36]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-[#A3B8A5]" />
            <span className="text-sm font-semibold text-white tracking-wide">
              ABK Admin
            </span>
            <span className="hidden sm:inline text-[11px] text-[#98A89A] uppercase tracking-wider border-l border-[#343E36] pl-3">
              Content Editor
            </span>
          </div>
          <div className="flex items-center gap-3">
            {saveStatus === "saved" && (
              <span className="flex items-center gap-1.5 text-xs text-[#A3B8A5]">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Saved
              </span>
            )}
            {saveStatus === "error" && (
              <span className="flex items-center gap-1.5 text-xs text-red-400">
                <AlertCircle className="w-4 h-4" />
                Save failed
              </span>
            )}
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 px-4 py-2 bg-[#4F6752] hover:bg-[#3E5341] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors disabled:opacity-60"
            >
              {saving ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Save className="w-3.5 h-3.5" />
              )}
              {saving ? "Saving…" : "Save Changes"}
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-2 text-[#98A89A] hover:text-white text-xs transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-4">
        <div className="mb-6">
          <h1 className="font-serif text-2xl text-[#1C241E]">Website Content</h1>
          <p className="text-sm text-[#6B826E] mt-1">
            Changes saved here are reflected on the live website. Click{" "}
            <strong>Save Changes</strong> after editing.
          </p>
        </div>

        {/* ── Practice Info ── */}
        <div className="bg-white border border-[#E2E6E2] rounded-sm shadow-xs overflow-hidden">
          <SectionHeader
            icon={Settings}
            title="Practice Information"
            subtitle="Name, credentials, session details"
            open={openSection === "practice"}
            onToggle={() => toggle("practice")}
          />
          {openSection === "practice" && (
            <div className="p-5 pt-0 border-t border-[#E2E6E2] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Practice Name" value={content.practiceName} onChange={(v) => set("practiceName", v)} />
              <Field label="Psychologist Name" value={content.psychologistName} onChange={(v) => set("psychologistName", v)} />
              <Field label="Doctor Title (with credentials)" value={content.doctorTitle} onChange={(v) => set("doctorTitle", v)} />
              <Field label="Credential Label" value={content.credentials} onChange={(v) => set("credentials", v)} />
              <Field label="Session Length" value={content.sessionLength} onChange={(v) => set("sessionLength", v)} />
              <Field label="Consultation Details" value={content.consultationDetails} onChange={(v) => set("consultationDetails", v)} />
              <div className="sm:col-span-2">
                <Field label="Fees" value={content.fees} onChange={(v) => set("fees", v)} multiline rows={2} />
              </div>
              <div className="sm:col-span-2">
                <Field label="Insurance Policy" value={content.insurancePolicy} onChange={(v) => set("insurancePolicy", v)} multiline rows={2} />
              </div>
              <div className="sm:col-span-2">
                <Field label="Superbill Policy" value={content.superbillPolicy} onChange={(v) => set("superbillPolicy", v)} multiline rows={2} />
              </div>
            </div>
          )}
        </div>

        {/* ── Contact Info ── */}
        <div className="bg-white border border-[#E2E6E2] rounded-sm shadow-xs overflow-hidden">
          <SectionHeader
            icon={Edit3}
            title="Contact Information"
            subtitle="Email, phone, office address"
            open={openSection === "contact"}
            onToggle={() => toggle("contact")}
          />
          {openSection === "contact" && (
            <div className="p-5 pt-0 border-t border-[#E2E6E2] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Email Address" value={content.email} onChange={(v) => set("email", v)} />
              <Field label="Phone Number" value={content.phone} onChange={(v) => set("phone", v)} />
              <div className="sm:col-span-2">
                <Field label="Office / Location" value={content.officeAddress} onChange={(v) => set("officeAddress", v)} />
              </div>
            </div>
          )}
        </div>

        {/* ── Disclaimers ── */}
        <div className="bg-white border border-[#E2E6E2] rounded-sm shadow-xs overflow-hidden">
          <SectionHeader
            icon={FileText}
            title="Disclaimers"
            subtitle="Emergency and professional boundary notices"
            open={openSection === "disclaimers"}
            onToggle={() => toggle("disclaimers")}
          />
          {openSection === "disclaimers" && (
            <div className="p-5 pt-0 border-t border-[#E2E6E2] space-y-4">
              <Field label="Emergency Disclaimer" value={content.emergencyDisclaimer} onChange={(v) => set("emergencyDisclaimer", v)} multiline rows={3} />
              <Field label="Professional Boundary Disclaimer" value={content.boundaryDisclaimer} onChange={(v) => set("boundaryDisclaimer", v)} multiline rows={3} />
            </div>
          )}
        </div>

        {/* ── Audience Descriptions ── */}
        <div className="bg-white border border-[#E2E6E2] rounded-sm shadow-xs overflow-hidden">
          <SectionHeader
            icon={Users}
            title="Who I Work With"
            subtitle="Audience card titles, summaries, and descriptions"
            open={openSection === "audiences"}
            onToggle={() => toggle("audiences")}
          />
          {openSection === "audiences" && (
            <div className="p-5 pt-0 border-t border-[#E2E6E2] space-y-8">
              {content.audiences.map((aud, ai) => (
                <div key={aud.id} className="border border-[#E2E6E2] rounded-sm p-4 space-y-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#4F6752]">
                      {aud.title}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Field
                      label="Title"
                      value={aud.title}
                      onChange={(v) => {
                        const updated = [...content.audiences];
                        updated[ai] = { ...updated[ai], title: v };
                        set("audiences", updated);
                      }}
                    />
                    <Field
                      label="Subtitle"
                      value={aud.subtitle}
                      onChange={(v) => {
                        const updated = [...content.audiences];
                        updated[ai] = { ...updated[ai], subtitle: v };
                        set("audiences", updated);
                      }}
                    />
                  </div>
                  <Field
                    label="Summary (card preview)"
                    value={aud.summary}
                    onChange={(v) => {
                      const updated = [...content.audiences];
                      updated[ai] = { ...updated[ai], summary: v };
                      set("audiences", updated);
                    }}
                    multiline
                    rows={2}
                  />
                  <Field
                    label="Full Description"
                    value={aud.description}
                    onChange={(v) => {
                      const updated = [...content.audiences];
                      updated[ai] = { ...updated[ai], description: v };
                      set("audiences", updated);
                    }}
                    multiline
                    rows={4}
                  />
                  {aud.boundaryNote !== undefined && (
                    <Field
                      label="Boundary Note (optional)"
                      value={aud.boundaryNote ?? ""}
                      onChange={(v) => {
                        const updated = [...content.audiences];
                        updated[ai] = { ...updated[ai], boundaryNote: v };
                        set("audiences", updated);
                      }}
                      multiline
                      rows={2}
                    />
                  )}
                  {/* Key Themes */}
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#4F6752] mb-2">
                      Key Themes
                    </label>
                    <div className="space-y-2">
                      {aud.keyThemes.map((theme, ti) => (
                        <div key={ti} className="flex gap-2">
                          <input
                            type="text"
                            value={theme}
                            onChange={(e) => {
                              const updated = [...content.audiences];
                              const themes = [...updated[ai].keyThemes];
                              themes[ti] = e.target.value;
                              updated[ai] = { ...updated[ai], keyThemes: themes };
                              set("audiences", updated);
                            }}
                            className="flex-1 border border-[#D5DAD5] rounded-sm px-3 py-2 text-sm text-[#1C241E] focus:outline-none focus:ring-2 focus:ring-[#4F6752] bg-[#F9F8F5]"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const updated = [...content.audiences];
                              const themes = updated[ai].keyThemes.filter((_, i) => i !== ti);
                              updated[ai] = { ...updated[ai], keyThemes: themes };
                              set("audiences", updated);
                            }}
                            className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-sm transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => {
                          const updated = [...content.audiences];
                          updated[ai] = { ...updated[ai], keyThemes: [...updated[ai].keyThemes, ""] };
                          set("audiences", updated);
                        }}
                        className="flex items-center gap-1.5 text-xs text-[#4F6752] hover:text-[#3E5341] font-semibold mt-1"
                      >
                        <Plus className="w-3.5 h-3.5" /> Add Theme
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── FAQ ── */}
        <div className="bg-white border border-[#E2E6E2] rounded-sm shadow-xs overflow-hidden">
          <SectionHeader
            icon={HelpCircle}
            title="FAQ"
            subtitle="Frequently asked questions and answers"
            open={openSection === "faq"}
            onToggle={() => toggle("faq")}
          />
          {openSection === "faq" && (
            <div className="p-5 pt-0 border-t border-[#E2E6E2] space-y-6">
              {content.faq.map((item, fi) => (
                <div key={item.id} className="border border-[#E2E6E2] rounded-sm p-4 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#6B826E]">
                      {item.category}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        const updated = content.faq.filter((_, i) => i !== fi);
                        set("faq", updated);
                      }}
                      className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-sm transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <Field
                    label="Question"
                    value={item.question}
                    onChange={(v) => {
                      const updated = [...content.faq];
                      updated[fi] = { ...updated[fi], question: v };
                      set("faq", updated);
                    }}
                  />
                  <Field
                    label="Answer"
                    value={item.answer}
                    onChange={(v) => {
                      const updated = [...content.faq];
                      updated[fi] = { ...updated[fi], answer: v };
                      set("faq", updated);
                    }}
                    multiline
                    rows={3}
                  />
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#4F6752] mb-1.5">
                      Category
                    </label>
                    <select
                      value={item.category}
                      onChange={(e) => {
                        const updated = [...content.faq];
                        updated[fi] = { ...updated[fi], category: e.target.value };
                        set("faq", updated);
                      }}
                      className="border border-[#D5DAD5] rounded-sm px-3 py-2 text-sm text-[#1C241E] focus:outline-none focus:ring-2 focus:ring-[#4F6752] bg-[#F9F8F5]"
                    >
                      <option>General</option>
                      <option>Services &amp; Fit</option>
                      <option>Fees &amp; Practice</option>
                    </select>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  set("faq", [
                    ...content.faq,
                    { id: `faq-${Date.now()}`, category: "General", question: "", answer: "" },
                  ])
                }
                className="flex items-center gap-2 px-4 py-2.5 border border-dashed border-[#4F6752] text-[#4F6752] hover:bg-[#EFF3EF] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors w-full justify-center"
              >
                <Plus className="w-4 h-4" /> Add FAQ Item
              </button>
            </div>
          )}
        </div>

        {/* ── SEO / Meta ── */}
        <div className="bg-white border border-[#E2E6E2] rounded-sm shadow-xs overflow-hidden">
          <SectionHeader
            icon={FileText}
            title="SEO &amp; Meta"
            subtitle="Page title and meta description"
            open={openSection === "meta"}
            onToggle={() => toggle("meta")}
          />
          {openSection === "meta" && (
            <div className="p-5 pt-0 border-t border-[#E2E6E2] space-y-4">
              <Field label="Site Title" value={content.metaTitle} onChange={(v) => set("metaTitle", v)} />
              <Field label="Meta Description" value={content.metaDescription} onChange={(v) => set("metaDescription", v)} multiline rows={3} />
            </div>
          )}
        </div>

        {/* Floating save bar */}
        <div className="flex justify-end pt-2 pb-10">
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-8 py-3 bg-[#4F6752] hover:bg-[#3E5341] text-white text-sm font-semibold uppercase tracking-wider rounded-sm transition-colors shadow-sm disabled:opacity-60"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {saving ? "Saving…" : "Save All Changes"}
          </button>
        </div>
      </main>
    </div>
  );
}

/* ─── Root Page ─────────────────────────────────────── */
export default function AdminPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);

  // Check session on mount
  useEffect(() => {
    fetch("/api/admin/content")
      .then((r) => setAuthed(r.ok))
      .catch(() => setAuthed(false));
  }, []);

  if (authed === null) {
    return (
      <div className="min-h-screen bg-[#F9F8F5] flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-[#4F6752]" />
      </div>
    );
  }

  if (!authed) {
    return <LoginScreen onLogin={() => setAuthed(true)} />;
  }

  return <Editor onLogout={() => setAuthed(false)} />;
}
