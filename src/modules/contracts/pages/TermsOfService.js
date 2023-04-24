import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const styles = {
  wrapper: {
    mt: 10,
    p: 2,
  },
  main: {
    maxWidth: 800,
    margin: "0 auto",
  },
  termsOfService: {
    fontSize: { xs: 24, md: 28 },
    fontWeight: "bold",
    background: `linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%)`,
    p: 1,
    mb: 1,
    color: "white",
  },
  termsDescription: {
    fontSize: 18,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    m: 2,
  },
  description: {
    fontSize: 16,
    m: 1,
  },
};

function TermsOfService() {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.main}>
        <Typography sx={styles.termsOfService}>Terms of Services</Typography>
        <Typography sx={styles.termsDescription}>
          These Terms of Service (“Agreement”) are a legal contract between you
          (“Freelancer”) and our website (Handi) governing your use of our
          platform for freelancers. By accessing or using our Website, you agree
          to be bound by these terms.
        </Typography>

        <Typography sx={styles.header}>1. Description of Services</Typography>
        <Typography sx={styles.description}>
          Our Website provides a platform that connects Freelancers with
          potential clients who are seeking to hire freelancers for various
          types of projects. Freelancers can create a profile, bid/apply on
          projects, and communicate with clients through the platform.
        </Typography>

        <Typography sx={styles.header}>2. Eligibility</Typography>
        <Typography sx={styles.description}>
          To use our platform as a Freelancer, you must be at least 18 years old
          and have the legal capacity to enter into a contract. You must also
          provide accurate and complete information when creating your profile.
        </Typography>

        <Typography sx={styles.header}>3. Payment Terms</Typography>
        <Typography sx={styles.description}>
          Freelancers are paid for their services by clients who hire them
          through our platform. We collect payments from clients and facilitate
          payments to Freelancers, deducting a service fee for the use of our
          platform. Freelancers are responsible for paying any taxes or fees
          applicable to their earnings.
        </Typography>

        <Typography sx={styles.header}>4. User Conduct</Typography>
        <Typography sx={styles.description}>
          Freelancers must conduct themselves professionally and abide by all
          applicable laws and regulations when using our platform. Freelancers
          may not engage in any behavior that is fraudulent, misleading, or
          harmful to our Website or other users. We reserve the right to suspend
          or terminate the account of any Freelancer who violates these terms.
        </Typography>

        <Typography sx={styles.header}>5. Intellectual Property</Typography>
        <Typography sx={styles.description}>
          Freelancers retain ownership of their intellectual property, such as
          copyrights or trademarks, for work they create through our platform.
          However, by using our platform, Freelancers grant us a non-exclusive,
          worldwide, royalty-free license to use, copy, modify, and display
          their work for the purpose of promoting our Website and services.
        </Typography>

        <Typography sx={styles.header}>6. Limitation of Liability</Typography>
        <Typography sx={styles.description}>
          Our Website is not responsible for the quality, accuracy, or legality
          of the work performed by Freelancers or the conduct of clients who
          hire them. Freelancers are solely responsible for the work they
          perform and the services they provide. Our Website is not liable for
          any damages or losses resulting from your use of our platform or any
          actions taken by other users.
        </Typography>

        <Typography sx={styles.header}>7. Termination</Typography>
        <Typography sx={styles.description}>
          Either party may terminate this Agreement at any time for any reason
          by providing written notice. Upon termination, Freelancers must
          immediately stop using our platform and delete any content or
          information obtained through our platform.
        </Typography>

        <Typography sx={styles.header}>8. Governing Law</Typography>
        <Typography sx={styles.description}>
          This Agreement shall be governed by and construed in accordance with
          the laws of the state of Philippines without regard to its conflict of
          laws principles.
        </Typography>

        <Typography sx={styles.header}>9. Changes to These Terms</Typography>
        <Typography sx={styles.description}>
          We reserve the right to modify or update these terms at any time. We
          will post any changes on our Website and notify Freelancers by email
          if we have their email address on file. Continued use of our platform
          after any changes to these terms constitutes acceptance of the new
          terms.
        </Typography>

        <Typography sx={styles.header}>10. Contact Us</Typography>
        <Typography sx={styles.description}>
          If you have any questions or concerns about these terms, please
          contact us at handi@gmail.com.
        </Typography>
      </Box>
    </Box>
  );
}

export default TermsOfService;
