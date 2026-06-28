# ☁️ AWS Cloud Practitioner Quiz App

An interactive quiz app with **718 practice questions** for the AWS Certified Cloud Practitioner (CLF-C02) exam. Built with React + Vite.

---

## 🔗 Live Demo

 **[https://PraveenReddy-06.github.io/Projects/](https://PraveenReddy-06.github.io/Projects/)**

---

##  Features

-  **718 MCQs** covering all AWS CCP exam domains
-  **Answers hidden by default** — pick your answer first, then reveal
- **Instant feedback** — correct answers turn green, wrong turn red
- **Search** questions by keyword or question number
-  **Filter** by All / Correct / Wrong to focus your revision
-  **Jump to any question** directly by number
-  **Progress tracker** — see how many you've answered and got right
-  **Responsive** — works on desktop and mobile

---

##  Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)

### Installation

```bash
# Clone the repository
git clone https://github.com/PraveenReddy-06/Projects.git
cd Projects/aws-quiz

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛠️ Built With

| Tool | Purpose |
|------|---------|
| [React](https://react.dev/) | UI framework |
| [Vite](https://vitejs.dev/) | Build tool |
| [gh-pages](https://www.npmjs.com/package/gh-pages) | GitHub Pages deployment |

---

##  Deployment

To deploy updates to GitHub Pages:

```bash
npm run deploy
```

This runs `vite build` and pushes the `dist/` folder to the `gh-pages` branch automatically.

---

##  Project Structure

```
aws-quiz/
├── public/
├── src/
│   ├── App.jsx       # Main quiz component (all 718 questions embedded)
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

##  How to Use

1. Read the question carefully
2. Click the option you think is correct
3. Hit **Check Answer** to see if you're right
4. Or click **Reveal Answer** to skip straight to the answer
5. Use **Next →** to move to the next question
6. Use the **search bar** to find questions by topic
7. Use the **filter dropdown** to review only Wrong answers

---

##  Exam Domains Covered

- Cloud Concepts
- Security & Compliance
- Cloud Technology & Services
- Billing, Pricing & Support

---

##  About the Exam

The **AWS Certified Cloud Practitioner (CLF-C02)** is a foundational certification for anyone new to AWS. It validates understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.

- **Format:** 65 questions, 90 minutes
- **Passing score:** 700 / 1000
- **More info:** [aws.amazon.com/certification](https://aws.amazon.com/certification/certified-cloud-practitioner/)

---

##  Acknowledgements

Questions sourced from AWS CCP practice exam dumps for study purposes only.

---

*Good luck with your AWS certification! ☁️*
