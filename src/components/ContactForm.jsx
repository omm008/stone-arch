import { motion } from 'framer-motion';
import { useState } from 'react';

/*
  FORM DESIGN:
  - Inputs styled like drafting form fields
  - Labels act as annotations
  - Submit looks like a stamp, not a button
  
  COLOR ADDENDUM:
  - Receives section color from parent
  - Applied to framing lines
  - Applied to submit stamp element

  NOTE:
  - No backend logic included
  - Form submission is placeholder
*/

const ContactForm = ({ sectionColor }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Placeholder for form submission
    console.log('Form submitted:', formData);
    
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Form submitted successfully! (This is a placeholder)');
      setFormData({ name: '', email: '', projectType: '', message: '' });
    }, 1500);
  };

  return (
    <motion.div
      className="relative max-w-2xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Framing lines */}
      <div 
        className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2"
        style={{ borderColor: sectionColor.color }}
      ></div>
      <div 
        className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2"
        style={{ borderColor: sectionColor.color }}
      ></div>
      <div 
        className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2"
        style={{ borderColor: sectionColor.color }}
      ></div>
      <div 
        className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2"
        style={{ borderColor: sectionColor.color }}
      ></div>

      {/* Form title block */}
      <div className="mb-8 pb-6 border-b-2 arch-line">
        <div className="flex items-center gap-3 mb-2">
          <div className="measure-md"></div>
          <h2 className="font-mono text-2xl uppercase tracking-wider">
            Project Inquiry
          </h2>
        </div>
        <p className="scale-marker ml-20">
          Form.01 — Initial Contact
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name field */}
        <motion.div
          className="relative"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <label htmlFor="name" className="drawing-label block mb-2">
            01. Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="draft-input"
            placeholder="Enter full name"
          />
          <div className="absolute -left-3 top-9 anchor-dot"></div>
        </motion.div>

        {/* Email field */}
        <motion.div
          className="relative"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <label htmlFor="email" className="drawing-label block mb-2">
            02. Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="draft-input"
            placeholder="your@email.com"
          />
          <div className="absolute -left-3 top-9 anchor-dot"></div>
        </motion.div>

        {/* Project Type field */}
        <motion.div
          className="relative"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <label htmlFor="projectType" className="drawing-label block mb-2">
            03. Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            className="draft-input"
          >
            <option value="">Select project type</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="institutional">Institutional</option>
            <option value="urban">Urban Planning</option>
            <option value="interior">Interior Design</option>
            <option value="other">Other</option>
          </select>
          <div className="absolute -left-3 top-9 anchor-dot"></div>
        </motion.div>

        {/* Message field */}
        <motion.div
          className="relative"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <label htmlFor="message" className="drawing-label block mb-2">
            04. Project Description
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="draft-input resize-none"
            placeholder="Describe your project requirements..."
          ></textarea>
          <div className="absolute -left-3 top-9 anchor-dot"></div>
        </motion.div>

        {/* Submit button - stamp style */}
        <motion.div
          className="pt-6 flex items-center justify-between border-t-2 arch-line"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <div className="anchor-dot"></div>
            <span className="scale-marker text-[10px]">
              {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: '2-digit', 
                day: '2-digit' 
              })}
            </span>
          </div>

          <motion.button
            type="submit"
            className="stamp-button"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
