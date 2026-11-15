import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, Calendar, Clock, MessageSquare, Send } from "lucide-react"
import type { AssessmentAnswer } from "./types"
import {
  pathwayOptions,
  destinationOptions,
  europeCountryOptions,
  adaptiveProfileQuestions,
  timelineOptions,
} from "./assessmentData"
import { AssessmentProgress } from "./AssessmentProgress"
import { JourneySnapshot } from "./JourneySnapshot"
import { PathwayResult } from "./PathwayResult"
import logoImg from "@/assets/Logo.png"

export const PreQualification: React.FC = () => {
  const [step, setStep] = useState<number>(1)
  const [answers, setAnswers] = useState<AssessmentAnswer>({
    pathway: "",
    destination: "",
    europeCountry: "",
    profile: "",
    timeline: "",
    name: "",
    email: "",
    phone: "",
    consultationDate: "",
    consultationTime: "",
    message: "",
  })

  const [formError, setFormError] = useState<string>("")

  // Handle select inputs
  const handleSelectPathway = (id: string) => {
    setAnswers(prev => ({
      ...prev,
      pathway: id,
      profile: "", // Reset downstream answers on pathway change
    }))
  }

  const handleSelectDestination = (id: string) => {
    setAnswers(prev => ({
      ...prev,
      destination: id,
      europeCountry: id === "EU" ? prev.europeCountry : "", // Keep or reset EU country
    }))
  }

  const handleSelectEuropeCountry = (id: string) => {
    setAnswers(prev => ({
      ...prev,
      europeCountry: id,
    }))
  }

  const handleSelectProfile = (id: string) => {
    const questionData = adaptiveProfileQuestions[answers.pathway]
    const selectedOpt = questionData?.options.find(o => o.id === id)
    setAnswers(prev => ({
      ...prev,
      profile: selectedOpt ? selectedOpt.title : id,
    }))
  }

  const handleSelectTimeline = (id: string) => {
    setAnswers(prev => ({
      ...prev,
      timeline: id,
    }))
  }

  // Navigation handlers
  const handleNext = () => {
    if (step === 1 && answers.pathway) {
      setStep(2)
    } else if (step === 2 && answers.destination) {
      if (answers.destination === "EU") {
        setStep(2.5) // Go to Europe country selection
      } else {
        setStep(3)
      }
    } else if (step === 2.5 && answers.europeCountry) {
      setStep(3)
    } else if (step === 3 && answers.profile) {
      setStep(4)
    } else if (step === 4 && answers.timeline) {
      setStep(5) // Dynamic Journey Snapshot
    }
  }

  const handleBack = () => {
    if (step === 2) {
      setStep(1)
    } else if (step === 2.5) {
      setStep(2)
    } else if (step === 3) {
      if (answers.destination === "EU") {
        setStep(2.5)
      } else {
        setStep(2)
      }
    } else if (step === 4) {
      setStep(3)
    } else if (step === 5) {
      setStep(4)
    } else if (step === 6) {
      setStep(5)
    }
  }

  const handleConfirmSnapshot = () => {
    setStep(6) // Go to Contact / Booking form
  }

  const handleReset = () => {
    setAnswers({
      pathway: "",
      destination: "",
      europeCountry: "",
      profile: "",
      timeline: "",
      name: "",
      email: "",
      phone: "",
      consultationDate: "",
      consultationTime: "",
      message: "",
    })
    setStep(1)
    setFormError("")
  }

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault()
    if (!answers.name || !answers.email || !answers.phone) {
      setFormError("Name, Email, and Phone number are required.")
      return
    }
    // Perform final success step transition
    setStep(7)
  }

  // Determine current progression state for progress bar
  const getProgressStep = () => {
    if (step === 1) return 1
    if (step === 2 || step === 2.5) return 2
    if (step === 3) return 3
    if (step === 4) return 4
    if (step === 5) return 4 // Snapshot review is still part of assessment progress
    if (step === 6) return 5
    return 5
  }

  // Is Continue disabled?
  const isContinueDisabled = () => {
    if (step === 1) return !answers.pathway
    if (step === 2) return !answers.destination
    if (step === 2.5) return !answers.europeCountry
    if (step === 3) return !answers.profile
    if (step === 4) return !answers.timeline
    return false
  }

  // Resolve Lucide icons for pathway cards
  const getPathwayIcon = (iconName: string) => {
    // Return standard representation or SVG
    if (iconName === "FileCheck") {
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
    if (iconName === "Users") {
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
    if (iconName === "Compass") {
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      )
    }
    if (iconName === "Gem") {
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
    return (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }

  const getProfileQuestionData = () => {
    return adaptiveProfileQuestions[answers.pathway] || adaptiveProfileQuestions["not_sure"]
  }

  const currentProfileData = getProfileQuestionData()

  return (
    <div className="w-full max-w-2xl mx-auto bg-white border border-[#e5e5e5] rounded-[40px] p-8 lg:p-12 shadow-sm font-figtree select-none">
      {/* Brand logo in wizard header */}
      <div className="flex justify-center mb-8">
        <img
          src={logoImg}
          alt="JR International"
          className="h-8 w-auto object-contain"
        />
      </div>

      {/* Progress Bar (not displayed on final results screen) */}
      {step <= 6 && <AssessmentProgress currentStep={getProgressStep()} />}

      <AnimatePresence mode="wait">
        {/* Step 1: Pathway */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-[#202020] mb-2">What are you planning to do abroad?</h3>
              <p className="text-sm text-gray-500">Choose the option that best describes your current goal.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pathwayOptions.map(opt => {
                const isSelected = answers.pathway === opt.id
                return (
                  <button
                    type="button"
                    key={opt.id}
                    onClick={() => handleSelectPathway(opt.id)}
                    className={`p-6 rounded-[24px] border text-left flex flex-col justify-between h-40 transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#156d95] ${
                      isSelected
                        ? "border-[#156d95] bg-[#156d95]/5 shadow-sm"
                        : "border-gray-200 hover:border-[#156d95]/50 bg-white"
                    }`}
                  >
                    <div className={isSelected ? "text-[#156d95]" : "text-gray-400"}>
                      {getPathwayIcon(opt.iconName || "")}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-base">{opt.title}</h4>
                      <p className="text-xs text-gray-400 mt-1 leading-relaxed">{opt.desc}</p>
                    </div>
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}

        {/* Step 2: Destination */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-[#202020] mb-2">Where are you planning to go?</h3>
              <p className="text-sm text-gray-500">Select your preferred destination. You can change this later.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {destinationOptions.map(opt => {
                const isSelected = answers.destination === opt.id
                return (
                  <button
                    type="button"
                    key={opt.id}
                    onClick={() => handleSelectDestination(opt.id)}
                    className={`p-5 rounded-2xl border text-left flex flex-col justify-center gap-1 min-h-[90px] transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#156d95] ${
                      isSelected
                        ? "border-[#156d95] bg-[#156d95]/5 shadow-sm"
                        : "border-gray-200 hover:border-[#156d95]/50 bg-white"
                    }`}
                  >
                    <div className="flex justify-between items-center w-full">
                      <span className="font-bold text-gray-800 text-sm">{opt.title}</span>
                      {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#156d95]" />}
                    </div>
                    <p className="text-xs text-gray-400 leading-normal">{opt.desc}</p>
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}

        {/* Step 2.5: Europe Country selection */}
        {step === 2.5 && (
          <motion.div
            key="step2.5"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-[#202020] mb-2">Which European country interests you?</h3>
              <p className="text-sm text-gray-500">Select from our verified Schengen pathway countries.</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {europeCountryOptions.map(opt => {
                const isSelected = answers.europeCountry === opt.id
                return (
                  <button
                    type="button"
                    key={opt.id}
                    onClick={() => handleSelectEuropeCountry(opt.id)}
                    className={`p-4 rounded-xl border text-center font-bold text-sm transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#156d95] ${
                      isSelected
                        ? "border-[#156d95] bg-[#156d95]/5 text-[#156d95] shadow-sm"
                        : "border-gray-200 hover:border-[#156d95]/50 bg-white text-gray-700"
                    }`}
                  >
                    {opt.title}
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}

        {/* Step 3: Adaptive Profile */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-[#202020] mb-2">{currentProfileData.question}</h3>
              <p className="text-sm text-gray-500">{currentProfileData.text}</p>
            </div>

            <div className="flex flex-col gap-3">
              {currentProfileData.options.map(opt => {
                const isSelected = answers.profile === opt.title
                return (
                  <button
                    type="button"
                    key={opt.id}
                    onClick={() => handleSelectProfile(opt.id)}
                    className={`p-4 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#156d95] ${
                      isSelected
                        ? "border-[#156d95] bg-[#156d95]/5 text-[#156d95]"
                        : "border-gray-200 hover:border-[#156d95]/50 bg-white text-gray-700"
                    }`}
                  >
                    <span className="font-semibold text-sm">{opt.title}</span>
                    {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#156d95]" />}
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}

        {/* Step 4: Timeline */}
        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-[#202020] mb-2">When are you planning to begin your pathway?</h3>
              <p className="text-sm text-gray-500">Select your preferred travel or program start window.</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {timelineOptions.map(opt => {
                const isSelected = answers.timeline === opt.id
                return (
                  <button
                    type="button"
                    key={opt.id}
                    onClick={() => handleSelectTimeline(opt.id)}
                    className={`p-4 rounded-xl border text-center font-bold text-sm transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#156d95] ${
                      isSelected
                        ? "border-[#156d95] bg-[#156d95]/5 text-[#156d95] shadow-sm"
                        : "border-gray-200 hover:border-[#156d95]/50 bg-white text-gray-700"
                    }`}
                  >
                    {opt.title}
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}

        {/* Step 5: Journey Snapshot review */}
        {step === 5 && (
          <motion.div
            key="step5"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <JourneySnapshot
              answers={answers}
              onConfirm={handleConfirmSnapshot}
              onBack={handleBack}
            />
          </motion.div>
        )}

        {/* Step 6: Consultation Booking Form */}
        {step === 6 && (
          <motion.div
            key="step6"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.2 }}
            className="space-y-6 text-left"
          >
            <div>
              <h3 className="text-2xl font-semibold text-[#202020] mb-2">Enter your contact details</h3>
              <p className="text-sm text-gray-500">Provide details for your initial profile files review.</p>
            </div>

            <form onSubmit={handleSubmitBooking} className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={answers.name}
                  onChange={e => setAnswers(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#156d95] text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={answers.email}
                    onChange={e => setAnswers(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#156d95] text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 88661 04107"
                    value={answers.phone}
                    onChange={e => setAnswers(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#156d95] text-sm"
                  />
                </div>
              </div>

              {/* Consultation date/time booking */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" /> Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={answers.consultationDate}
                    onChange={e => setAnswers(prev => ({ ...prev, consultationDate: e.target.value }))}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#156d95] text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gray-400" /> Preferred Time Slot
                  </label>
                  <select
                    required
                    value={answers.consultationTime}
                    onChange={e => setAnswers(prev => ({ ...prev, consultationTime: e.target.value }))}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#156d95] text-sm"
                  >
                    <option value="">Select a time slot</option>
                    <option value="morning">Morning (09:00 - 12:00)</option>
                    <option value="afternoon">Afternoon (12:00 - 15:00)</option>
                    <option value="evening">Evening (15:00 - 18:00)</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 pt-2">
                <label className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider inline-flex items-center gap-1">
                  <MessageSquare className="w-3.5 h-3.5 text-gray-400" /> Message / Questions (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us details about your background, qualifications, or specific inquiries..."
                  value={answers.message}
                  onChange={e => setAnswers(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#156d95] text-sm resize-none"
                />
              </div>

              {formError && (
                <div className="p-3 bg-red-50 border border-red-100 text-red-600 rounded-xl text-xs font-semibold">
                  {formError}
                </div>
              )}

              {/* Controls */}
              <div className="flex justify-between items-center pt-6 border-t border-gray-100 mt-8">
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-gray-200 text-xs font-bold text-gray-600 hover:bg-gray-50 transition-all duration-200 cursor-pointer"
                >
                  Back
                </button>

                <button
                  type="submit"
                  className="flex items-center gap-1.5 bg-[#156d95] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:rounded-2xl transition-all duration-200 cursor-pointer shadow-sm"
                >
                  Submit & Book <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Step 7: Pathway Result screen */}
        {step === 7 && (
          <motion.div
            key="step7"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <PathwayResult answers={answers} onReset={handleReset} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back / Continue row for early steps (1-4) */}
      {step <= 4 && (
        <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-100">
          <button
            type="button"
            onClick={handleBack}
            disabled={step === 1}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-gray-200 text-xs font-bold text-gray-600 hover:bg-gray-50 disabled:opacity-40 transition-all duration-200 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" /> Back
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={isContinueDisabled()}
            className="flex items-center gap-1.5 bg-[#156d95] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider disabled:opacity-40 hover:rounded-2xl transition-all duration-200 cursor-pointer shadow-sm"
          >
            Continue <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  )
}
