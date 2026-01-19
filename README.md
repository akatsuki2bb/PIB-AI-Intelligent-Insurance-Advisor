# PIB-AI-Intelligent-Insurance-Advisor
AI-powered insurance advisory side project
# PIB AI – Intelligent Insurance Advisor

PIB AI is a **custom-built intelligent insurance advisory application** designed to simulate how modern InsurTech platforms assist users in selecting insurance products based on structured inputs and contextual understanding.

This project was **designed and implemented manually** as a side project to demonstrate applied knowledge of:
- Insurance workflows
- API-driven AI systems
- Frontend–backend separation
- Real-world InsurTech use cases

AI services are used as **decision engines**, not as app generators.

---

## What This Project Does

PIB AI acts as an **AI-powered insurance advisor** that:
- Collects structured user inputs related to insurance needs
- Interprets intent and context using an LLM (Gemini)
- Returns human-readable guidance and recommendations
- Mimics the behavior of an early-stage digital insurance broker or advisory tool

This mirrors how many B2C InsurTech platforms guide users **before policy issuance**.

---

## Key Features

- Intelligent insurance guidance using AI
- Structured form-based user input
- Modular service layer for AI interaction
- Clean React component architecture
- Configurable API layer
- Ready for extension into premium calculation, proposal generation, or CRM integration

---

## Tech Stack

- **Frontend:** React + TypeScript
- **Backend Logic:** Node.js
- **AI Integration:** Gemini API (manually wired)
- **Architecture:** Component-based UI + service abstraction
- **Configuration:** Environment variables

---

## Project Structure

```text
├── components/
│   ├── Navbar.tsx
│   └── InsuranceForm.tsx
│
├── services/
│   └── geminiService.ts
│
├── types.ts
├── metadata.json
└── README.md
