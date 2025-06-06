# Lendx landing page

This project is a landing page for a fictional fintech product as a tool to help customers easily learn more about the fintech product and quickly apply for loans.

## IMPORTANT NOTES

- [View the live website](https://lendx-website.vercel.app/)
- [Design process documentation](https://danielsarkwa.com/projects/lendx-landing-page): Explore the detailed design process on my portfolio website. The portfolio outlines the UX/UI design journey, including wireframes and prototypes created in Figma as well as the decision making behind the page.

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
| **Next.js**      | React framework for server-side rendering and static site generation | Makes the website SEO-friendly as well as optimizing scripts, images, fonts and other graphic assets for improved user experience. Using Next.js also makes it easy to add even advanced features in the future like language support, customer portal, advanced data fetching, and backend interaction. |
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

## Deployment

The easiest way to deploy this website is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

To deploy this Next.js website to Vercel, follow these steps:

1. Fork this project to your GitHub account
2. Import the project into [Vercel using this link](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
   1. NOTE: You may need to create a new account on Vercel if you don't have have one and choose Github as the sign in option so you can easily import the project from Github
3. Import the forked GitHub repository
4. Configure and Deploy: Vercel will automatically configure everything needed, so you just need to click deploy to start the deployment process.
5. Once the deployment is complete, Vercel will show you a preview of the hosted website, click on the image or continue to the dashboard to view the link to where website is hosted.

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
