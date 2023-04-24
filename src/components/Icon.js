import React from "react";
import WorkIcon from "@mui/icons-material/Work";
import EngineeringIcon from "@mui/icons-material/Engineering";
import PeopleIcon from "@mui/icons-material/People";
import TaskIcon from "@mui/icons-material/Task";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import EmailIcon from "@mui/icons-material/Email";
import BusinessIcon from "@mui/icons-material/Business";
import CallIcon from "@mui/icons-material/Call";
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";
import PaymentsIcon from "@mui/icons-material/Payments";
import SmsIcon from "@mui/icons-material/Sms";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import HomeIcon from "@mui/icons-material/Home";
import TabIcon from "@mui/icons-material/Tab";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PaidIcon from "@mui/icons-material/Paid";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const styles = {
  footerIcons: {
    mr: 2,
    borderRadius: "50%",
    cursor: "pointer",
    "&:hover": { color: "blue" },
  },
  publicIcons: {
    color: "inherit",
    fontSize: { xs: 40, md: 50 },
    m: 1,
  },
  findPeopleIcons: {
    fontSize: 45,
  },
};

export const icons = {
  workIcon: <WorkIcon sx={styles.publicIcons} />,
  engineeringIcon: <EngineeringIcon sx={styles.publicIcons} />,
  peopleIcon: <PeopleIcon sx={styles.publicIcons} />,
  taskIcon: <TaskIcon sx={styles.publicIcons} />,
  moneyOffIcon: <MoneyOffIcon sx={styles.publicIcons} />,
  emailIcon: <EmailIcon sx={styles.publicIcons} />,
  businessIcon: <BusinessIcon sx={styles.publicIcons} />,
  callIcon: <CallIcon sx={styles.publicIcons} />,
  menuIcon: <MenuIcon />,
  mailIcon: <MailIcon />,
  notificationIcon: <NotificationsIcon />,
  arrowBackIcon: <ArrowBackIosIcon sx={{ color: "white" }} />,
  editIcon: <EditIcon />,
  deleteIcon: <DeleteIcon />,
  cancelIcon: <CancelIcon />,
  smsIcon: <SmsIcon />,
  paymentsIcon: <PaymentsIcon />,
  accountBoxIcon: <AccountBoxIcon />,
  dashboardIcon: <DashboardIcon />,
  calendarMonthIcon: <CalendarMonthIcon />,
  dynamicFeedIcon: <DynamicFeedIcon />,
  settingsApplicationsIcon: <SettingsApplicationsIcon />,
  logoutIcon: <LogoutIcon />,
  archiveIcon: <ArchiveIcon />,
  keyboardArrowDownIcon: <KeyboardArrowDownIcon />,
  fileCopyIcon: <FileCopyIcon />,
  moreHorizIcon: <MoreHorizIcon />,
  closeIcon: <CloseIcon />,
  accountCircle: <AccountCircle />,
  moreIcon: <MoreIcon />,
  tabIcon: <TabIcon />,
  homeIcon: <HomeIcon />,
  lockOpenIcon: <LockOpenIcon />,
  howToRegIcon: <HowToRegIcon />,
  personSearchIcon: <PersonSearchIcon />,
  facebookIcon: <FacebookIcon sx={styles.footerIcons} />,
  youtubeIcon: <YouTubeIcon sx={styles.footerIcons} />,
  twitterIcon: <TwitterIcon sx={styles.footerIcons} />,
  instagramIcon: <InstagramIcon sx={styles.footerIcons} />,
  expanMoreIcon: <ExpandMoreIcon />,
  receiptIcon: <ReceiptIcon />,
  paidIcon: <PaidIcon />,
  thumbUpOffAltIcon: <ThumbUpOffAltIcon />,
  MoreVertIcon: <MoreVertIcon />,
};
