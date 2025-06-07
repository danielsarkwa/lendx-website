# Lendx landing page

This project is a landing page for a fictional fintech product as a tool to help customers easily learn more about the fintech product and quickly apply for loans.

![Mockup](https://res.cloudinary.com/dqmmpbow6/image/upload/v1749201481/danielsarkwa-com-v2/portfolio-assets/lendx-landing-page/lendx-1_rrkpak.png)

## Table of Contents

- [Lendx landing page](#lendx-landing-page)
  - [Table of Contents](#table-of-contents)
  - [IMPORTANT INFO](#important-info)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Running the Project Locally](#running-the-project-locally)
  - [Project Structure and Directory](#project-structure-and-directory)
  - [Deployment](#deployment)
  - [Design and Technical Decisions](#design-and-technical-decisions)
  - [Future Potential Improvements](#future-potential-improvements)
  - [Contributing](#contributing)

## IMPORTANT INFO

- View the live website at -- [lendx-website.vercel.app](https://lendx-website.vercel.app/)
- Quick 5 mins walkthrough video of my design process for this project can be [found on Loom](https://www.loom.com/share/3dce4a3ffeaa4d4a8aa45a27b77c786e?sid=2b6c0f38-1833-4636-a7e1-b06081ab43c5)

## Features

- **Header**: Includes a placeholder for the logo and a simple navigation menu with links to sections of the page.
- **Hero Section**:
  - Displays a compelling headline and supporting text to engage users.
  - Features a form for loan applications, collecting:
    - Requested loan amount (1,000 € to 20,000 € in 1,000 € intervals).
    - User name, email, and phone number.
    - Consent for terms and conditions.
    - Option to apply with a co-applicant.
  - Form validation using JavaScript to ensure all fields are correctly filled.
  - Calculates and displays the monthly payment based on a 12-month payback period with a 5% loan rate.
- **Main Content Area**: Includes 4 additional sections relevant to the goal of the website
  - Trusted partners section: Displays partner logos to build trust. This shows Lendx is backed by reputable organizations, encouraging user confidence.
  - How is works section to communicate: Outlines the loan application process to give more clarity and reduce user hesitation.
  - Testimonial section: Shares customer success stories, which provides social proof to boost trust and engagement.
  - FAQs section: Answers common questions about loans. This addresses concerns, making users feel informed and ready to apply.
- **Dynamic Countdown Element**: A visually appealing countdown timer targeting Midsummer Eve (June 20, 2025) by default, or New Year's Eve (December 31, 2025) if the URL includes `?counter=newyear`.
- **Footer**: Contains contact information, a footer menu, and social media icons.

## Tech Stack

| Technology       | Purpose                                              | Why I Used This                                                      |
|------------------|------------------------------------------------------|------------------------------------------------------------------------------|
| **React Js**      | JavaScript library for building modern and complex user interfaces | It helped me to break the UI elements into reusable components to make the project easily maintainable and collaborative. Using React also makes it easy to build dynamic UI elements the combines HTML/CSS/JAVASCRIPT. |
| **Next.js**      | React framework for server-side rendering and static site generation | Makes the website SEO-friendly as well as optimizing scripts, images, fonts and other graphic assets for improved user experience. Using Next.js also makes it easy to add even advanced features in the future like language support, customer portal, advanced data fetching, and backend interaction. Next.js works well with Vercel.com to provide web analytics about traffic and performance to help us optimize the website easily. |
| **JavaScript**   | Handles form validation and dynamic countdown functionality | Provides client-side interactivity for real-time form checks and countdown updates. |
| **Tailwind CSS** | Utility-first CSS framework for responsive and modern styling | Used this to speed up the development process with reusable css classes for consistent and responsive design. |
| **Shadcn**      | Component library for reusable, customizable UI elements | It gave me pre-built, accessible components for the form and other UI parts, saving time while keeping the design consistent and professional. |
| **Framer Motion** | Animation library for smooth and interactive transitions | Used to enhances user experience with engaging animations for the countdown and UI elements. |
| **Vercel**       | Deployment platform for hosting the Next.js application | Simplifies deployment with automatic scaling, domain management, and CI/CD. |

## Running the Project Locally

To run the project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/danielsarkwa/lendx-website.git
   cd lendx-website
   ```

2. **Install Dependencies**:
   Ensure you have [Node.js](https://nodejs.org/) and [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) installed, then run:
   ```bash
   yarn install
   ```

3. **Run the Development Server**:
   Start the Next.js development server:
   ```bash
   yarn run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

4. **Test the Countdown**:
   - Visit `http://localhost:3000` for the default Midsummer Eve countdown.
   - Visit `http://localhost:3000?counter=newyear` for the New Year's Eve countdown.


## Project Structure and Directory

```
src/
├── app/                  # Houses the core application files and global configurations
├── assets/               # Stores static assets used throughout the project
├── components/           # Contains reusable React components for modular development
├── sections/             # Holds section-specific components for different page sections
├── ui/                   # Manages user interface components for interactive elements
├── constants/            # Stores constant values and configurations in TypeScript files
├── lib/                  # Contains library files for shared utilities and logic
└── utils/                # Includes utility functions to support various project functionalities
```

## Deployment

The easiest way to deploy this website is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

To deploy this Next.js website to Vercel, follow these steps:

1. Fork this project to your GitHub account
2. Import the project into [Vercel using this link](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
   1. NOTE: You may need to create a new account on Vercel if you don't have have one and choose Github as the sign in option so you can easily import the project from Github
3. Import the forked GitHub repository
4. Configure and Deploy: Vercel will automatically configure everything needed, so you just need to click deploy to start the deployment process.
5. Once the deployment is complete, Vercel will show you a preview of the hosted website, click on the image or continue to the dashboard to view the link to where website is hosted.

## Design and Technical Decisions

1. **Next.js as the Framework**: I chose Next.js for its built-in optimizations, such as server-side rendering and static site generation, which enhance website performance and SEO. Its flexibility supports diverse resources, enabling scalable and efficient development.

2. **Tailwind CSS and shadcn/ui for Styling and Components**: I utilized Tailwind CSS for its utility-first approach, enabling rapid and responsive styling with minimal custom CSS. Combined with shadcn/ui, a component library built on Tailwind, I ensured a consistent, accessible, and customizable UI design, streamlining development while maintaining a modern, cohesive aesthetic.

3. **Helper Texts for Form Fields**: I incorporated helper texts in key form fields to guide users, reducing errors and aligning with Nielsen’s usability heuristics for *Error Prevention* and *Help and Documentation* ([Nielsen Norman Group](https://www.nngroup.com/articles/ten-usability-heuristics/)). This improves user experience by clarifying expectations.

4. **Prominent Loan Amount Input**: The loan amount input field is positioned at the top of the form with visually appealing styling to draw attention. This design leverages the **Hook Model** for customer engagement, encouraging users to take action and increasing form completion rates by fostering early investment in the process.

5. **Increment/Decrement Buttons**: I added "+" and "−" buttons next to the loan amount field to cater to experienced users familiar with similar UI patterns. This supports Nielsen’s *Flexibility and Efficiency of Use* heuristic while preventing errors by restricting inputs to increments of 1,000.

6. **Flexible Input with User Control**: While the buttons enforce structured input, I allowed users to manually type their desired loan amount, adhering to Nielsen’s *User Control and Freedom* heuristic. This balances flexibility with guided interaction.

7. **Simplified Error Recovery**: To streamline error correction, I implemented automatic rounding of non-1,000-interval inputs to the nearest 1,000. This reduces user effort in correcting values while maintaining system consistency.

8. **Clear Error Messaging**: The loan amount field includes concise, actionable error messages displayed upon invalid input, enabling users to quickly resolve issues and enhancing usability.

9. **Real-Time Field Validation**: Validation occurs individually for each field upon losing focus (onBlur event), providing timely feedback without overwhelming the user. This approach minimizes disruption and aligns with intuitive form interaction.

10.  **Countdown Banner for Urgency**: I designed a countdown banner with a clear title and description to create urgency, motivating users to act on loan applications. This leverages psychological triggers to boost engagement.

11. **Progressive Disclosure for Co-Applicant Form**: To avoid overwhelming users, the co-applicant form is revealed progressively during the application process. This keeps the initial interface clean and focused, improving user flow.

## Future Potential Improvements

1. **Customizable Countdown Banner**: Implement a dashboard for administrators to customize countdown banner messages, enabling dynamic promotion of multiple events or special offers tailored to business needs.

2. **Smart Countdown Triggers**: Enhance the countdown banner to automatically activate based on event proximity (e.g., 60 days before a New Year promotion). This ensures timely visibility for critical campaigns.

3. **User Portal for Application Tracking**: Develop a user portal where applicants can track their loan application status, submit additional documents, and receive updates, improving transparency and engagement.

4. **A/B Testing for Hero Section**: Introduce A/B testing for the hero section with variations in visuals, copy, or calls-to-action to optimize user acquisition and conversion rates based on data-driven insights.

## Contributing

Contributions are welcome! To contribute to this project:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them with descriptive messages:
   ```bash
   git commit -m "Add your descriptive message here"
   ```
4. Push your changes to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request on the original repository, describing your changes in detail.

Please ensure your code follows the project's coding standards and includes appropriate tests if applicable.
