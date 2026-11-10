import { useState, type FormEvent, type ChangeEvent } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Mail, Send, AlertCircle, CheckCircle2, X } from 'lucide-react';
import { YoutubeIcon, InstagramIcon, GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

interface FormData {
  name: string;
  email: string;
  company: string;
  collaborationType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: portfolioData.personal.email,
    href: `mailto:${portfolioData.personal.email}`,
  },
  {
    icon: InstagramIcon,
    label: 'Instagram',
    value: '@nhidhi_61',
    href: portfolioData.personal.instagramUrl,
  },
  {
    icon: YoutubeIcon,
    label: 'YouTube',
    value: 'Crazy Vlzzz (@crazy.vlzz1)',
    href: portfolioData.personal.youtubeUrl,
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/Sonuk56',
    href: portfolioData.personal.githubUrl,
  },
];

const collaborationTypes = [
  'Product Review',
  'Sponsored Video',
  'Unboxing',
  'Gaming Content',
  'Livestream Promotion',
  'Brand Ambassadorship',
  'Hardware Testing & Feedback',
  'Other Inquiry',
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    collaborationType: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submissionStatus, setSubmissionStatus] = useState<
    'idle' | 'drafted'
  >('idle');

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a message or brief.';
    }

    return newErrors;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    // Construct mailto URI so inquiry is sent through the user's email client directly to the business email
    const subject = encodeURIComponent(
      `Collaboration Inquiry: ${formData.collaborationType || 'General'} from ${formData.name}${formData.company ? ` (${formData.company})` : ''}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany/Brand: ${formData.company || 'N/A'}\nCollaboration Type: ${formData.collaborationType || 'General'}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;
    setSubmissionStatus('drafted');
  };

  const inputClasses =
    'w-full bg-charcoal-light/50 border border-sand/15 rounded-xl px-4 py-3.5 text-sand placeholder:text-sand/30 focus:border-sand/40 focus:bg-charcoal-light/80 focus:outline-none transition duration-200 text-sm';

  const labelClasses = 'block text-sand/70 text-xs font-semibold uppercase tracking-wider mb-2';

  return (
    <section id="contact" className="relative py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-sand/30" />
            <span className="text-sand/50 text-xs font-semibold tracking-widest uppercase">
              Get In Touch
            </span>
            <span className="w-6 h-[1px] bg-sand/30" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-sand font-bold">
            Have A Project In Mind?
          </h2>
          <p className="mt-4 text-sand/60 text-base md:text-lg max-w-xl mx-auto">
            Reach out for product reviews, sponsorships, or brand collaborations.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14"
        >
          {/* Left Column — Contact Info (2 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="font-heading text-xl uppercase tracking-wide text-sand font-bold mb-3">
                Direct Channels
              </h3>
              <p className="text-sand/65 text-sm leading-relaxed mb-6">
                Whether you represent a gaming hardware manufacturer, keyboard maker, or digital brand, feel free to reach out via email or direct message.
              </p>
            </div>

            <div className="space-y-4">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="group flex items-center gap-4 rounded-2xl border border-sand/10 bg-charcoal-light/40 backdrop-blur-xl px-5 py-4 transition-all duration-300 hover:border-sand/30 hover:bg-charcoal-light/60"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sand/15 bg-charcoal/70 transition-colors duration-300 group-hover:border-sand/30">
                      <Icon className="h-5 w-5 text-sand/70 transition-colors duration-300 group-hover:text-sand" />
                    </div>
                    <div>
                      <span className="block text-sand/40 text-[10px] font-semibold uppercase tracking-widest mb-0.5">
                        {link.label}
                      </span>
                      <span className="text-sand text-sm font-medium transition-colors duration-300 group-hover:text-sand-light break-all">
                        {link.value}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Response Time Glass Note */}
            <div className="rounded-2xl border border-sand/10 bg-charcoal-light/20 backdrop-blur-md p-5 text-xs text-sand/50 space-y-2">
              <div className="flex items-center gap-2 text-sand/70 font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-sand/50" />
                <span>Response Time</span>
              </div>
              <p>Typically replies within 24 to 48 business hours for collaboration and business proposals.</p>
            </div>
          </motion.div>

          {/* Right Column — Contact Form (3 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <div className="rounded-2xl border border-sand/15 bg-charcoal-light/40 backdrop-blur-2xl p-6 md:p-8 shadow-2xl">
              {/* Submission Notification Banner */}
              {submissionStatus === 'drafted' && (
                <div className="mb-6 flex items-start gap-3 rounded-xl border border-sand/30 bg-charcoal-light/80 backdrop-blur-md px-5 py-4">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-sand mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sand font-medium text-sm">
                      Email draft opened in your default email application.
                    </p>
                    <p className="text-sand/60 text-xs mt-1">
                      If your mail app didn't launch automatically, you can send directly to{' '}
                      <a
                        href={`mailto:${portfolioData.personal.email}`}
                        className="text-sand underline underline-offset-2 hover:text-sand-light"
                      >
                        {portfolioData.personal.email}
                      </a>.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmissionStatus('idle')}
                    className="shrink-0 text-sand/40 hover:text-sand transition-colors p-1"
                    aria-label="Dismiss alert"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="name" className={labelClasses}>
                      Full Name <span className="text-sand/40">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`${inputClasses} ${errors.name ? 'border-red-400/50' : ''}`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="email" className={labelClasses}>
                      Email Address <span className="text-sand/40">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`${inputClasses} ${errors.email ? 'border-red-400/50' : ''}`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Company / Brand */}
                  <div>
                    <label htmlFor="company" className={labelClasses}>
                      Company / Brand
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Brand or agency name"
                      value={formData.company}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>

                  {/* Collaboration Type */}
                  <div>
                    <label htmlFor="collaborationType" className={labelClasses}>
                      Collaboration Type
                    </label>
                    <select
                      id="collaborationType"
                      name="collaborationType"
                      value={formData.collaborationType}
                      onChange={handleChange}
                      className={`${inputClasses} appearance-none cursor-pointer`}
                    >
                      <option value="" className="bg-charcoal text-sand/40">
                        Select a collaboration type
                      </option>
                      {collaborationTypes.map((type) => (
                        <option key={type} value={type} className="bg-charcoal text-sand">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className={labelClasses}>
                    Project Details / Message <span className="text-sand/40">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Provide details about products, campaign objectives, deliverables, or timeline..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClasses} resize-none ${errors.message ? 'border-red-400/50' : ''}`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-300 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button (STRICT: ELECTRIC BLUE ONLY FOR PRIMARY ACTION) */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#2E6BFF] hover:bg-[#4A7FFF] text-white px-8 py-4 rounded-full font-bold tracking-wider uppercase text-sm shadow-xl shadow-[#2E6BFF]/25 transition-all duration-300 cursor-pointer mt-2"
                >
                  <Send className="h-4 w-4" />
                  Send Inquiry
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
