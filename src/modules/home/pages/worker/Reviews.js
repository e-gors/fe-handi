/** @format */

import React, { useEffect, useState } from "react";
import "./Reviews.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import LinearProgress, {
	linearProgressClasses,
} from "@mui/material/LinearProgress";
import Http from "../../../../utils/Http";
import noprofile from "../../../../assets/images/noprofile.jpg";

function Reviews({ worker }) {
	const [value, setValue] = React.useState(2);
	const [loading, setLoading] = useState(false);
	const url = window.location.href;
	const split = url.split("/");
	const userId = split[split.length - 1];
	const [comments, setComments] = useState([]);
	useEffect(() => {
		Http.get(`/reviews/${userId}`).then((res) => setComments(res.data));
	}, [loading, userId]);

	const [formData, setFormData] = React.useState({
		uuid: userId,
		comment: "",
		rating: "",
	});

	const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
		height: 10,
		borderRadius: 5,
		[`&.${linearProgressClasses.colorPrimary}`]: {
			backgroundColor:
				theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
		},
		[`& .${linearProgressClasses.bar}`]: {
			borderRadius: 5,
			backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
		},
	}));

	const onChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const submitReview = () => {
		if (formData.rating) {
			Http.post("/ratings", formData)
				.then((res) => {
					if (res.status === 200) {
						alert("saved");
						setLoading(!loading);
					}
				})
				.catch((err) => console.error(err));
		} else {
			alert("need to add ratings");
		}
	};

	return (
		<div className="container-fluid px-1 py-5 mx-auto">
			<div className="row justify-content-center">
				<div className="col-xl-7 col-lg-8 col-md-10 col-12 text-center mb-5">
					<div className="card">
						<div className="row-card">
							<div className="col-md-4 d-flex flex-column">
								<div className="rating-box">
									<h1 className="pt-4">4.0</h1>
								</div>
								<div>
									<Box
										sx={{
											"& > legend": { mt: 2 },
										}}>
										<Typography component="legend">Out of 5</Typography>
										<Rating
											name="simple-controlled"
											value={value}
											onChange={(event, newValue) => {
												setValue(newValue);
											}}
										/>
									</Box>
								</div>
							</div>

							<div className="col-md-8">
								<div className="rating-bar0 justify-content-center">
									<table className="text-left mx-auto">
										<tbody>
											<tr>
												<td className="rating-label">Excellent</td>
												<td className="rating-bar">
													<Box sx={{ flexGrow: 1 }}>
														<BorderLinearProgress
															variant="determinate"
															value={50}
														/>
													</Box>
												</td>
												<td className="text-right">123</td>
											</tr>
											<tr>
												<td className="rating-label">Good</td>
												<td className="rating-bar">
													<Box sx={{ flexGrow: 1 }}>
														<BorderLinearProgress
															variant="determinate"
															value={100}
														/>
													</Box>
												</td>
												<td className="text-right">23</td>
											</tr>
											<tr>
												<td className="rating-label">Average</td>
												<td className="rating-bar">
													<Box sx={{ flexGrow: 1 }}>
														<BorderLinearProgress
															variant="determinate"
															value={70}
														/>
													</Box>
												</td>
												<td className="text-right">10</td>
											</tr>
											<tr>
												<td className="rating-label">Poor</td>
												<td className="rating-bar">
													<Box sx={{ flexGrow: 1 }}>
														<BorderLinearProgress
															variant="determinate"
															value={60}
														/>
													</Box>
												</td>
												<td className="text-right">3</td>
											</tr>
											<tr>
												<td className="rating-label">Terrible</td>
												<td className="rating-bar">
													<Box sx={{ flexGrow: 1 }}>
														<BorderLinearProgress
															variant="determinate"
															value={20}
														/>
													</Box>
												</td>
												<td className="text-right">0</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					<div className="container">
						<div className="card">
							<div className="avatars">
								<div className="col-2">
									<img
										src="https://i.imgur.com/xELPaag.jpg"
										width="70"
										className="rounded-circle mt-2"
									/>
								</div>
								<div className="comment">
									<h1>Comments</h1>
								</div>
							</div>
							<div>
								<Box
									sx={{
										"& > legend": { mt: 2 },
									}}>
									<Typography component="legend">Out of 5</Typography>
									<Rating
										name="simple-controlled"
										value={value}
										onChange={(event, newValue) => {
											setValue(newValue);
											setFormData((prev) => ({
												...prev,
												rating: newValue,
											}));
										}}
									/>
								</Box>
							</div>
							<Box component="form" noValidate autoComplete="off">
								<FormControl sx={{ width: "40ch" }}>
									<OutlinedInput
										placeholder="Please enter your comment.."
										name="comment"
										onChange={onChange}
									/>
								</FormControl>
							</Box>
							<br />
							<Stack direction="row" spacing={2}>
								<Button
									variant="contained"
									color="success"
									onClick={submitReview}>
									Submit
								</Button>
							</Stack>
						</div>
					</div>
					{comments.map((comment, index) => {
						const dateObj = new Date(comment.created_at);
						const monthNames = [
							"January",
							"February",
							"March",
							"April",
							"May",
							"June",
							"July",
							"August",
							"September",
							"October",
							"November",
							"December",
						];

						const day = dateObj.getDate();
						const month = monthNames[dateObj.getMonth()];
						const year = dateObj.getFullYear();

						const formattedDate = `${day} ${month} ${year}`;
						return (
							<div className="card" key={index}>
								<div className="row d-flex">
									<div className>
										<img
											className="profile-pic"
											alt="profile_picture"
											src={
												comment.commentator_profile
													? comment.commentator_profile
													: noprofile
											}
										/>
									</div>
									<div className="d-flex flex-column">
										<h3 className="mt-2 mb-0">
											{comment.commentator_fullname}
										</h3>
										<div>
											<Box
												sx={{
													"& > legend": { mt: 2 },
												}}>
												<Typography component="legend">
													{comment.rating}
												</Typography>
												<Rating
													name="simple-controlled"
													value={comment.rating}
													onChange={(event, newValue) => {
														setValue(newValue);
													}}
												/>
											</Box>
										</div>
									</div>
									<div className="ml-auto">
										<p className="text-muted pt-5 pt-sm-3">{formattedDate}</p>
									</div>
								</div>
								<div className="row text-left">
									<p className="content">{comment.comment}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Reviews;
