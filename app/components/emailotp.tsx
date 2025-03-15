import React from 'react';
import { Body, Container, Head, Heading, Html, Img, Link, Preview, Section, Text } from '@react-email/components';

export interface OtpEmailTemplateProps {
  otp?: string;
  recipientName?: string;
  expiryMinutes?: number;
  companyName?: string;
  companyLogo?: string;
  contactEmail?: string;
}

const generateRandomOTP = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const OtpEmailTemplate: React.FC<OtpEmailTemplateProps> = ({
  otp,
  recipientName = 'User',
  expiryMinutes = 10,
  companyName = 'Your Company',
  companyLogo = '/public/Logo.svg',
  contactEmail = 'attendify.business@gmail.com'
}) => {

  const otpCode = otp || generateRandomOTP();

  const otpDigits = otpCode.split('').map((digit, index) => (
    <div key={index} style={otpDigitBox}>
      {digit}
    </div>
  ));

  return (
    <Html>
      <Head />
      <Preview>Your Verification Code for {companyName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={headerSection}>
            <Img
              src={companyLogo}
              alt={companyName}
              width="150"
              height="50"
              style={logo}
            />
          </Section>
          
          <Section style={contentSection}>
            <Heading style={heading}>Verify Your Email Company</Heading>
            
            <Text style={paragraph}>Hello {recipientName},</Text>
            
            <Text style={paragraph}>
              Thank you for using our service. Please use the verification code below to complete your authentication process:
            </Text>
            
            <Section style={otpContainer}>
              <div style={otpDigitContainer}>
                {otpDigits}
              </div>
            </Section>
            
            <Text style={paragraph}>
              This verification code will expire in <span style={highlightText}>{expiryMinutes} minutes</span>. For security reasons, please do not share this code with anyone, including those claiming to be {companyName} staff.
            </Text>
            
            <Text style={paragraph}>
              If you didn't request this verification code, please ignore this email or contact our support team.
            </Text>

            <Section style={actionContainer}>
              <Link href="#" style={actionButton}>Verify Email</Link>
            </Section>
          </Section>
          
          <Section style={footerSection}>
            <Text style={footerText}>
              © {new Date().getFullYear()} {companyName}. All rights reserved.
            </Text>
            <Text style={footerText}>
              If you have any questions, please contact <Link href={`mailto:${contactEmail}`} style={link}>{contactEmail}</Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: '#f4f7fa',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  padding: '20px 0'
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '30px',
  maxWidth: '600px',
  borderRadius: '12px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)'
};

const headerSection = {
  padding: '16px 0 24px',
  borderBottom: '1px solid #eaeef3',
  textAlign: 'center' as const
};

const logo = {
  margin: '0 auto'
};

const contentSection = {
  padding: '32px 0',
  textAlign: 'left' as const
};

const heading = {
  fontSize: '28px',
  fontWeight: 'bold',
  lineHeight: '1.3',
  margin: '16px 0',
  color: '#222',
  textAlign: 'center' as const
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.6',
  color: '#444',
  margin: '20px 0'
};

const otpContainer = {
  margin: '32px 0',
  padding: '12px',
  textAlign: 'center' as const
};

const otpDigitContainer = {
  display: 'flex',
  justifyContent: 'center',
  gap: '8px',
  margin: '0 auto'
};

const otpDigitBox = {
  display: 'inline-block',
  width: '52px',
  height: '60px',
  lineHeight: '60px',
  fontSize: '32px',
  fontWeight: 'bold',
  color: '#333',
  fontFamily: 'monospace',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  border: '1px solid #ddd',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.06)',
  margin: '0 2px'
};

const highlightText = {
  fontWeight: 'bold',
  color: '#2754C5'
};

const actionContainer = {
  textAlign: 'center' as const,
  margin: '32px 0'
};

const actionButton = {
  backgroundColor: '#2754C5',
  borderRadius: '6px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 30px'
};

const footerSection = {
  padding: '24px 0 0',
  borderTop: '1px solid #eaeef3'
};

const footerText = {
  fontSize: '14px',
  lineHeight: '1.5',
  color: '#8c8c8c',
  margin: '8px 0'
};

const link = {
  color: '#2754C5',
  textDecoration: 'underline'
};

export default OtpEmailTemplate;