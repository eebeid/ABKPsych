"use client";

import { useState, useEffect, useCallback } from "react";
import {
  LogOut,
  Save,
  CheckCircle2,
  AlertCircle,
  Lock,
  Eye,
  EyeOff,
  Loader2,
  Shield,
  Home,
  User,
  Users,
  HelpCircle,
  Mail,
  Settings,
  Plus,
  Trash2,
  ExternalLink,
  ChevronRight,
  Globe,
} from "lucide-react";
import type { EditableContent } from "@/lib/contentStore";

/* ─── Shared field components ────────────────────────── */
function Field({
  label,
  value,
  onChange,
  multiline = false,
  rows = 3,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  rows?: number;
  hint?: string;
}) {
  const cls =
    "w-full border border-[#D5DAD5] rounded-sm px-3 py-2.5 text-sm text-[#1C241E] focus:outline-none focus:ring-2 focus:ring-[#4F6752] focus:border-[#4F6752] bg-white transition-shadow placeholder:text-[#ADB8AE]";
  return (
    <div className="space-y-1.5">
      <label className="block text-[11px] font-bold uppercase tracking-widest text-[#4F6752]">
        {label}
      </label>
      {multiline ? (
        <textarea
          rows={rows}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cls}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cls}
        />
      )}
      {hint && <p className="text-[11px] text-[#8A9E8C] italic">{hint}</p>}
    </div>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 pt-2">
      <div className="h-px flex-1 bg-[#E2E6E2]" />
      <span className="text-[10px] uppercase tracking-widest font-bold text-[#9AA69C]">
        {label}
      </span>
      <div className="h-px flex-1 bg-[#E2E6E2]" />
    </div>
  );
}

/* ─── Login Screen ───────────────────────────────────── */
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
    if (res.ok) onLogin();
    else setError("Invalid username or password.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EFF3EF] via-[#F9F8F5] to-[#E8EDE8] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#4F6752] shadow-lg mb-5">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="font-serif text-2xl text-[#1C241E]">Admin Portal</h1>
          <p className="text-xs text-[#6B826E] mt-1.5 tracking-widest uppercase">
            ABK Psychological Services
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-[#E2E6E2] rounded-sm shadow-md p-8 space-y-5"
        >
          <div className="space-y-1.5">
            <label className="block text-[11px] font-bold uppercase tracking-widest text-[#4F6752]">
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

          <div className="space-y-1.5">
            <label className="block text-[11px] font-bold uppercase tracking-widest text-[#4F6752]">
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
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B826E] hover:text-[#4F6752] transition-colors"
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
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#4F6752] hover:bg-[#3E5341] text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-colors disabled:opacity-60 shadow-sm"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Lock className="w-4 h-4" />
            )}
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>
        <p className="text-center text-[11px] text-[#9AA69C] mt-5">
          This page is not publicly listed.
        </p>
      </div>
    </div>
  );
}

/* ─── Page definitions ───────────────────────────────── */
type PageId =
  | "home"
  | "about"
  | "who-i-work-with"
  | "faq"
  | "contact"
  | "settings"
  | "seo";

const NAV_ITEMS: {
  id: PageId;
  label: string;
  sublabel: string;
  icon: React.ElementType;
  href: string;
}[] = [
  {
    id: "home",
    label: "Home",
    sublabel: "Hero headline & intro text",
    icon: Home,
    href: "/",
  },
  {
    id: "about",
    label: "About",
    sublabel: "Biography & credentials",
    icon: User,
    href: "/about",
  },
  {
    id: "who-i-work-with",
    label: "Who I Work With",
    sublabel: "Audience cards & descriptions",
    icon: Users,
    href: "/who-i-work-with",
  },
  {
    id: "faq",
    label: "FAQ",
    sublabel: "Questions & answers",
    icon: HelpCircle,
    href: "/faq",
  },
  {
    id: "contact",
    label: "Contact",
    sublabel: "Email, phone & disclaimers",
    icon: Mail,
    href: "/contact",
  },
  {
    id: "settings",
    label: "Practice Settings",
    sublabel: "Name, fees & session details",
    icon: Settings,
    href: "#",
  },
  {
    id: "seo",
    label: "SEO & Meta",
    sublabel: "Page title & description",
    icon: Globe,
    href: "#",
  },
];

/* ─── Page editors ───────────────────────────────────── */
function HomeEditor({
  content,
  set,
}: {
  content: EditableContent;
  set: (k: keyof EditableContent, v: unknown) => void;
}) {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Home Page"
        description="The hero section and introductory copy that visitors see first."
        href="/"
      />
      <div className="card-panel space-y-5">
        <SectionDivider label="Hero Section" />
        <Field
          label="Practice Badge Text"
          value={content.practiceName}
          onChange={(v) => set("practiceName", v)}
          hint="Shown in the small badge above the headline"
        />
        <Field
          label="Hero Headline"
          value={content.heroHeadline}
          onChange={(v) => set("heroHeadline", v)}
          multiline
          rows={3}
          hint="The large serif headline in the hero"
        />
        <Field
          label="Hero Tagline"
          value={content.heroTagline}
          onChange={(v) => set("heroTagline", v)}
          hint="Uppercase label under the headline (e.g. Collaborative. Reflective. Relational.)"
        />
        <Field
          label="Hero Intro Paragraph"
          value={content.heroIntro}
          onChange={(v) => set("heroIntro", v)}
          multiline
          rows={4}
          hint="The body paragraph beneath the tagline"
        />
      </div>
      <div className="card-panel space-y-5">
        <SectionDivider label="Clinical Distinction Section" />
        <Field
          label="Clinical Distinction Headline"
          value={content.clinicalDistinctionHeadline}
          onChange={(v) => set("clinicalDistinctionHeadline", v)}
          multiline
          rows={2}
        />
        <Field
          label="Clinical Distinction Para 1"
          value={content.clinicalDistinctionPara1}
          onChange={(v) => set("clinicalDistinctionPara1", v)}
          multiline
          rows={3}
        />
        <Field
          label="Clinical Distinction Para 2"
          value={content.clinicalDistinctionPara2}
          onChange={(v) => set("clinicalDistinctionPara2", v)}
          multiline
          rows={3}
        />
      </div>
      <div className="card-panel space-y-5">
        <SectionDivider label="CTA Section" />
        <Field
          label="CTA Headline"
          value={content.ctaHeadline}
          onChange={(v) => set("ctaHeadline", v)}
        />
        <Field
          label="CTA Body"
          value={content.ctaBody}
          onChange={(v) => set("ctaBody", v)}
          multiline
          rows={3}
        />
      </div>
    </div>
  );
}

function AboutEditor({
  content,
  set,
}: {
  content: EditableContent;
  set: (k: keyof EditableContent, v: unknown) => void;
}) {
  return (
    <div className="space-y-6">
      <PageHeader
        title="About Page"
        description="Dr. Krimitsos's biography and education details."
        href="/about"
      />
      <div className="card-panel space-y-5">
        <SectionDivider label="Biography" />
        <Field
          label="Opening Paragraph"
          value={content.aboutOpening}
          onChange={(v) => set("aboutOpening", v)}
          multiline
          rows={3}
        />
        <Field
          label="Body Paragraph 1"
          value={content.aboutPara1}
          onChange={(v) => set("aboutPara1", v)}
          multiline
          rows={4}
        />
        <Field
          label="Pull Quote"
          value={content.aboutQuote}
          onChange={(v) => set("aboutQuote", v)}
          hint="Displayed in large serif type as a pull-out quote"
        />
        <Field
          label="Body Paragraph 2"
          value={content.aboutPara2}
          onChange={(v) => set("aboutPara2", v)}
          multiline
          rows={4}
        />
        <Field
          label="Body Paragraph 3"
          value={content.aboutPara3}
          onChange={(v) => set("aboutPara3", v)}
          multiline
          rows={4}
        />
      </div>
      <div className="card-panel space-y-5">
        <SectionDivider label="Education & Credentials" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field
            label="Doctorate"
            value={content.degree}
            onChange={(v) => set("degree", v)}
          />
          <Field
            label="University"
            value={content.university}
            onChange={(v) => set("university", v)}
          />
          <Field
            label="Internship"
            value={content.internship}
            onChange={(v) => set("internship", v)}
          />
          <Field
            label="Bachelor's"
            value={content.bachelors}
            onChange={(v) => set("bachelors", v)}
          />
          <Field
            label="Licensure"
            value={content.licensure}
            onChange={(v) => set("licensure", v)}
          />
          <Field
            label="Years Licensed"
            value={content.yearsLicensed}
            onChange={(v) => set("yearsLicensed", v)}
          />
        </div>
      </div>
    </div>
  );
}

function WhoEditor({
  content,
  set,
}: {
  content: EditableContent;
  set: (k: keyof EditableContent, v: unknown) => void;
}) {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Who I Work With"
        description="Audience cards shown on the home page and the dedicated 'Who I Work With' page."
        href="/who-i-work-with"
      />
      {content.audiences.map((aud, ai) => (
        <div key={aud.id} className="card-panel space-y-5">
          <SectionDivider label={aud.title} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field
              label="Title"
              value={aud.title}
              onChange={(v) => {
                const u = [...content.audiences];
                u[ai] = { ...u[ai], title: v };
                set("audiences", u);
              }}
            />
            <Field
              label="Subtitle"
              value={aud.subtitle}
              onChange={(v) => {
                const u = [...content.audiences];
                u[ai] = { ...u[ai], subtitle: v };
                set("audiences", u);
              }}
            />
          </div>
          <Field
            label="Card Summary (short preview)"
            value={aud.summary}
            onChange={(v) => {
              const u = [...content.audiences];
              u[ai] = { ...u[ai], summary: v };
              set("audiences", u);
            }}
            multiline
            rows={2}
          />
          <Field
            label="Full Description"
            value={aud.description}
            onChange={(v) => {
              const u = [...content.audiences];
              u[ai] = { ...u[ai], description: v };
              set("audiences", u);
            }}
            multiline
            rows={5}
          />
          {aud.boundaryNote !== undefined && (
            <Field
              label="Boundary Note (optional)"
              value={aud.boundaryNote ?? ""}
              onChange={(v) => {
                const u = [...content.audiences];
                u[ai] = { ...u[ai], boundaryNote: v };
                set("audiences", u);
              }}
              multiline
              rows={2}
            />
          )}
          <div className="space-y-2">
            <label className="block text-[11px] font-bold uppercase tracking-widest text-[#4F6752]">
              Key Themes
            </label>
            {aud.keyThemes.map((theme, ti) => (
              <div key={ti} className="flex gap-2">
                <input
                  type="text"
                  value={theme}
                  onChange={(e) => {
                    const u = [...content.audiences];
                    const t = [...u[ai].keyThemes];
                    t[ti] = e.target.value;
                    u[ai] = { ...u[ai], keyThemes: t };
                    set("audiences", u);
                  }}
                  className="flex-1 border border-[#D5DAD5] rounded-sm px-3 py-2 text-sm text-[#1C241E] focus:outline-none focus:ring-2 focus:ring-[#4F6752] bg-white"
                />
                <button
                  type="button"
                  onClick={() => {
                    const u = [...content.audiences];
                    u[ai] = {
                      ...u[ai],
                      keyThemes: u[ai].keyThemes.filter((_, i) => i !== ti),
                    };
                    set("audiences", u);
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
                const u = [...content.audiences];
                u[ai] = { ...u[ai], keyThemes: [...u[ai].keyThemes, ""] };
                set("audiences", u);
              }}
              className="flex items-center gap-1.5 text-xs text-[#4F6752] hover:text-[#3E5341] font-semibold mt-1 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" /> Add Theme
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function FAQEditor({
  content,
  set,
}: {
  content: EditableContent;
  set: (k: keyof EditableContent, v: unknown) => void;
}) {
  return (
    <div className="space-y-6">
      <PageHeader
        title="FAQ Page"
        description="Frequently asked questions displayed on the FAQ page."
        href="/faq"
      />
      {content.faq.map((item, fi) => (
        <div key={item.id} className="card-panel space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-widest font-bold text-[#4F6752]">
              {item.category}
            </span>
            <button
              type="button"
              onClick={() => set("faq", content.faq.filter((_, i) => i !== fi))}
              className="flex items-center gap-1 text-[11px] text-red-400 hover:text-red-600 font-semibold transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" /> Remove
            </button>
          </div>
          <Field
            label="Question"
            value={item.question}
            onChange={(v) => {
              const u = [...content.faq];
              u[fi] = { ...u[fi], question: v };
              set("faq", u);
            }}
          />
          <Field
            label="Answer"
            value={item.answer}
            onChange={(v) => {
              const u = [...content.faq];
              u[fi] = { ...u[fi], answer: v };
              set("faq", u);
            }}
            multiline
            rows={4}
          />
          <div className="space-y-1.5">
            <label className="block text-[11px] font-bold uppercase tracking-widest text-[#4F6752]">
              Category
            </label>
            <select
              value={item.category}
              onChange={(e) => {
                const u = [...content.faq];
                u[fi] = { ...u[fi], category: e.target.value };
                set("faq", u);
              }}
              className="border border-[#D5DAD5] rounded-sm px-3 py-2.5 text-sm text-[#1C241E] focus:outline-none focus:ring-2 focus:ring-[#4F6752] bg-white"
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
            {
              id: `faq-${Date.now()}`,
              category: "General",
              question: "",
              answer: "",
            },
          ])
        }
        className="flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-dashed border-[#C8D4C9] text-[#4F6752] hover:border-[#4F6752] hover:bg-[#EFF3EF] text-xs font-bold uppercase tracking-widest rounded-sm transition-all"
      >
        <Plus className="w-4 h-4" /> Add FAQ Item
      </button>
    </div>
  );
}

function ContactEditor({
  content,
  set,
}: {
  content: EditableContent;
  set: (k: keyof EditableContent, v: unknown) => void;
}) {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Contact Page"
        description="Contact information and legal/clinical disclaimers."
        href="/contact"
      />
      <div className="card-panel space-y-5">
        <SectionDivider label="Contact Details" />
        <Field
          label="Email Address"
          value={content.email}
          onChange={(v) => set("email", v)}
        />
        <Field
          label="Phone Number"
          value={content.phone}
          onChange={(v) => set("phone", v)}
        />
        <Field
          label="Office / Location"
          value={content.officeAddress}
          onChange={(v) => set("officeAddress", v)}
          hint="e.g. Telehealth Psychotherapy Practice"
        />
      </div>
      <div className="card-panel space-y-5">
        <SectionDivider label="Disclaimers" />
        <Field
          label="Emergency Disclaimer"
          value={content.emergencyDisclaimer}
          onChange={(v) => set("emergencyDisclaimer", v)}
          multiline
          rows={3}
          hint="Shown in the red/warning banner"
        />
        <Field
          label="Professional Boundary Disclaimer"
          value={content.boundaryDisclaimer}
          onChange={(v) => set("boundaryDisclaimer", v)}
          multiline
          rows={3}
          hint="Shown in the info banner on the contact form"
        />
      </div>
    </div>
  );
}

function SettingsEditor({
  content,
  set,
}: {
  content: EditableContent;
  set: (k: keyof EditableContent, v: unknown) => void;
}) {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Practice Settings"
        description="Core practice details used throughout the entire site."
        href="#"
      />
      <div className="card-panel space-y-5">
        <SectionDivider label="Identity" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field
            label="Practice Name"
            value={content.practiceName}
            onChange={(v) => set("practiceName", v)}
          />
          <Field
            label="Psychologist Name"
            value={content.psychologistName}
            onChange={(v) => set("psychologistName", v)}
          />
          <Field
            label="Doctor Title (with credentials)"
            value={content.doctorTitle}
            onChange={(v) => set("doctorTitle", v)}
          />
          <Field
            label="Credential Label"
            value={content.credentials}
            onChange={(v) => set("credentials", v)}
          />
        </div>
      </div>
      <div className="card-panel space-y-5">
        <SectionDivider label="Services & Fees" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field
            label="Session Length"
            value={content.sessionLength}
            onChange={(v) => set("sessionLength", v)}
          />
          <Field
            label="Consultation Details"
            value={content.consultationDetails}
            onChange={(v) => set("consultationDetails", v)}
          />
        </div>
        <Field
          label="Fees"
          value={content.fees}
          onChange={(v) => set("fees", v)}
          multiline
          rows={2}
        />
        <Field
          label="Insurance Policy"
          value={content.insurancePolicy}
          onChange={(v) => set("insurancePolicy", v)}
          multiline
          rows={2}
        />
        <Field
          label="Superbill Policy"
          value={content.superbillPolicy}
          onChange={(v) => set("superbillPolicy", v)}
          multiline
          rows={2}
        />
      </div>
    </div>
  );
}

function SEOEditor({
  content,
  set,
}: {
  content: EditableContent;
  set: (k: keyof EditableContent, v: unknown) => void;
}) {
  return (
    <div className="space-y-6">
      <PageHeader
        title="SEO & Meta"
        description="Page title and meta description used in browser tabs and search results."
        href="#"
      />
      <div className="card-panel space-y-5">
        <SectionDivider label="Search Engine Optimization" />
        <Field
          label="Site Title"
          value={content.metaTitle}
          onChange={(v) => set("metaTitle", v)}
          hint="Shown in browser tab and Google search results"
        />
        <Field
          label="Meta Description"
          value={content.metaDescription}
          onChange={(v) => set("metaDescription", v)}
          multiline
          rows={4}
          hint="Recommended: 150–160 characters for best SEO"
        />
        <div className="p-3 bg-[#F9F8F5] border border-[#E2E6E2] rounded-sm">
          <p className="text-[11px] uppercase tracking-widest font-bold text-[#9AA69C] mb-2">
            Preview
          </p>
          <p className="text-[#1C241E] text-sm font-medium line-clamp-1">
            {content.metaTitle || "—"}
          </p>
          <p className="text-xs text-[#4A544C] mt-1 line-clamp-2">
            {content.metaDescription || "—"}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Page Header ────────────────────────────────────── */
function PageHeader({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h2 className="font-serif text-2xl text-[#1C241E]">{title}</h2>
        <p className="text-sm text-[#6B826E] mt-1">{description}</p>
      </div>
      {href !== "#" && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-[#4F6752] hover:text-[#3E5341] font-semibold shrink-0 mt-1 transition-colors"
        >
          View Live <ExternalLink className="w-3.5 h-3.5" />
        </a>
      )}
    </div>
  );
}

/* ─── Main Editor ────────────────────────────────────── */
function Editor({ onLogout }: { onLogout: () => void }) {
  const [content, setContent] = useState<EditableContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saved" | "error">("idle");
  const [activePage, setActivePage] = useState<PageId>("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const fetchContent = useCallback(async () => {
    setLoading(true);
    const res = await fetch("/api/admin/content");
    if (res.ok) setContent(await res.json());
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

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F0F2F0] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-7 h-7 animate-spin text-[#4F6752]" />
          <p className="text-sm text-[#6B826E]">Loading content…</p>
        </div>
      </div>
    );
  }

  if (!content) return null;

  const activeNav = NAV_ITEMS.find((n) => n.id === activePage)!;

  return (
    <div className="min-h-screen bg-[#F0F2F0] flex flex-col">
      {/* ── Top Bar ── */}
      <header className="sticky top-0 z-50 bg-[#1C241E] border-b border-[#2A342C]">
        <div className="h-14 px-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Mobile sidebar toggle */}
            <button
              onClick={() => setSidebarOpen((v) => !v)}
              className="lg:hidden p-2 text-[#98A89A] hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Shield className="w-5 h-5 text-[#A3B8A5]" />
            <span className="text-sm font-semibold text-white">ABK Admin</span>
            <span className="hidden sm:flex items-center gap-2 text-[#98A89A] text-[11px]">
              <ChevronRight className="w-3.5 h-3.5" />
              {activeNav.label}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {saveStatus === "saved" && (
              <span className="hidden sm:flex items-center gap-1.5 text-xs text-green-400">
                <CheckCircle2 className="w-4 h-4" /> Saved
              </span>
            )}
            {saveStatus === "error" && (
              <span className="hidden sm:flex items-center gap-1.5 text-xs text-red-400">
                <AlertCircle className="w-4 h-4" /> Save failed
              </span>
            )}
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 px-4 py-2 bg-[#4F6752] hover:bg-[#3E5341] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors disabled:opacity-60"
            >
              {saving ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Save className="w-3.5 h-3.5" />
              )}
              <span>{saving ? "Saving…" : "Save"}</span>
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

      <div className="flex flex-1 overflow-hidden">
        {/* ── Sidebar ── */}
        <aside
          className={`
            fixed lg:static inset-y-0 left-0 z-40 w-64 bg-[#1C241E] border-r border-[#2A342C]
            transform transition-transform duration-200 lg:translate-x-0
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            flex flex-col pt-14 lg:pt-0
          `}
        >
          {/* Sidebar Header */}
          <div className="px-4 py-5 border-b border-[#2A342C]">
            <p className="text-[10px] uppercase tracking-widest font-bold text-[#6B826E]">
              Pages
            </p>
          </div>

          <nav className="flex-1 overflow-y-auto py-2">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`
                    w-full text-left px-4 py-3.5 flex items-center gap-3 transition-all group
                    ${isActive
                      ? "bg-[#4F6752]/20 border-l-2 border-[#4F6752]"
                      : "border-l-2 border-transparent hover:bg-white/5"}
                  `}
                >
                  <Icon
                    className={`w-4 h-4 shrink-0 ${
                      isActive ? "text-[#A3B8A5]" : "text-[#6B826E] group-hover:text-[#98A89A]"
                    }`}
                  />
                  <div>
                    <div
                      className={`text-sm font-medium ${
                        isActive ? "text-white" : "text-[#CBD4CB] group-hover:text-white"
                      }`}
                    >
                      {item.label}
                    </div>
                    <div className="text-[10px] text-[#6B826E]">{item.sublabel}</div>
                  </div>
                  {isActive && (
                    <ChevronRight className="w-3.5 h-3.5 text-[#4F6752] ml-auto shrink-0" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Sidebar Footer */}
          <div className="px-4 py-4 border-t border-[#2A342C]">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-[#6B826E] hover:text-[#98A89A] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              View Live Site
            </a>
          </div>
        </aside>

        {/* Sidebar overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* ── Main Content ── */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 pb-24">
            {activePage === "home" && <HomeEditor content={content} set={set} />}
            {activePage === "about" && <AboutEditor content={content} set={set} />}
            {activePage === "who-i-work-with" && <WhoEditor content={content} set={set} />}
            {activePage === "faq" && <FAQEditor content={content} set={set} />}
            {activePage === "contact" && <ContactEditor content={content} set={set} />}
            {activePage === "settings" && <SettingsEditor content={content} set={set} />}
            {activePage === "seo" && <SEOEditor content={content} set={set} />}
          </div>
        </main>
      </div>
    </div>
  );
}

/* ─── Root ───────────────────────────────────────────── */
export default function AdminClient() {
  const [authed, setAuthed] = useState<boolean | null>(null);

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

  return authed ? (
    <Editor onLogout={() => setAuthed(false)} />
  ) : (
    <LoginScreen onLogin={() => setAuthed(true)} />
  );
}
