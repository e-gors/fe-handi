import { Box, Typography } from "@mui/material";
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
  privacyPolicy: {
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
    fontSize: 18,
    m: 1,
  },
};

function PrivacyPolicy() {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.main}>
        <Typography sx={styles.privacyPolicy}>Privacy Policy</Typography>
        <Typography sx={styles.termsDescription}>
          This Privacy Policy (“Policy”) explains how we collect, use, and
          disclose personal information from Freelancers who use our platform.
        </Typography>

        <Typography sx={styles.header}>Information We Collect</Typography>
        <Typography sx={styles.description}>
          We collect personal information such as your name, email address,
          phone number, and billing information when you create an account and
          use our platform. We may also collect non-personal information such as
          your IP address and browser type for website analytics purposes.
        </Typography>

        <Typography sx={styles.header}>How We Use Your Information</Typography>
        <Typography sx={styles.description}>
          We use your personal information to provide you with our services,
          process payments, and communicate with you about your account and
          projects. We may also use your information to improve our website and
          services, and to comply with legal obligations.
        </Typography>

        <Typography sx={styles.header}>
          How We Share Your Information
        </Typography>
        <Typography sx={styles.description}>
          We do not sell or rent your personal information to third parties. We
          may share your personal information with our trusted partners who
          provide services on our behalf, such as payment processing and website
          hosting. We may also disclose your information if required by law or
          in response to a legal request.
        </Typography>

        <Typography sx={styles.header}>Data Retention</Typography>
        <Typography sx={styles.description}>
          We retain your personal information for as long as necessary to
          provide you with our services and as required by law. When you delete
          your account, we will delete your personal information within a
          reasonable time frame, unless we are required to retain it for legal
          or business purposes.
        </Typography>

        <Typography sx={styles.header}>Data Security</Typography>
        <Typography sx={styles.description}>
          We take reasonable measures to protect your personal information from
          unauthorized access, use, or disclosure. We use industry-standard
          security protocols to transmit and store your personal information.
        </Typography>

        <Typography sx={styles.header}>Your Rights</Typography>
        <Typography sx={styles.description}>
          You have the right to access, modify, or delete your personal
          information at any time. You may also unsubscribe from our marketing
          communications by following the instructions in the emails we send
          you.
        </Typography>

        <Typography sx={styles.header}>Changes to This Policy</Typography>
        <Typography sx={styles.description}>
          We reserve the right to update or change this Policy at any time. We
          will post any changes on our website and notify you by email if you
          have provided us with your email address.
        </Typography>

        <Typography sx={styles.header}>8. Governing Law</Typography>
        <Typography sx={styles.description}>
          This Agreement shall be governed by and construed in accordance with
          the laws of the state of Philippines without regard to its conflict of
          laws principles.
        </Typography>

        <Typography sx={styles.header}>Contact Us</Typography>
        <Typography sx={styles.description}>
          If you have any questions or concerns about this Policy, please
          contact us at handi@gmail.com.
        </Typography>
      </Box>
    </Box>
  );
}

export default PrivacyPolicy;
