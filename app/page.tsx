import Image from "next/image";
import { Press_Start_2P } from "next/font/google";
import "nes.css/css/nes.min.css";

const pressStart2P = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export default function Home() {
	// today's date
	const today = new Date();
	// first day of the year
	const firstDay = new Date(today.getFullYear(), 0, 1);
	// milliseconds in a year
	const msInYear = 1000 * 60 * 60 * 24 * 365;

	// time since first day of the year
	const timeSince = today.getTime() - firstDay.getTime();

	const percent = (timeSince / msInYear).toLocaleString(undefined, {
		style: "percent",
		minimumFractionDigits: 1,
	});

	const percentNumber = (timeSince / msInYear) * 100;

	return (
		<div className={pressStart2P.className}>
			<div
				className="is-dark nes-container"
				style={{
					height: "100vh",
					width: "100vw",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<main
					style={{
						width: "90%",
						margin: "0 auto",
						maxWidth: "70ch",
						textAlign: "center",
					}}
				>
					<section className="nes-container with-title is-centered is-dark">
						<h1 className="nes-text title">
							Today is{" "}
							{today.toLocaleDateString(undefined, {
								weekday: "long",
								year: "numeric",
								month: "long",
								day: "numeric",
							})}
							.
						</h1>
						<h1>
							<span className="nes-text">
								The year {new Date().getFullYear()} is{" "}
								<span className="nes-text is-success">{percent}</span> complete.
							</span>
						</h1>
						<br />
						<progress
							className="nes-progress is-pattern"
							value={percentNumber}
							max={100}
						/>
						<br />
						<p
							style={{ marginTop: "1em", fontSize: "1.2em" }}
							className="nes-text"
						>
							{percent}
						</p>
					</section>
				</main>
				<footer style={{ marginTop: "2em" }}>
					<p className="nes-text">
						Made with <i className="nes-icon heart is-small" /> by Ben Robertson
					</p>
				</footer>
			</div>
		</div>
	);
}
