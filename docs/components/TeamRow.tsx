import React from "react";

interface ProfileProps {
	className?: string;
	userTag: string;
	userId: string;
	avatarHash: string;
	githubName?: string;
	twitterName?: string;
}

let userData;

async function main() {
	const url = "https://api.github.com/gists/2f20a6cb87c6bd4d83f3ae093bfde3a1";
	const data = await (await fetch(url)).json();
	const { content }: any = Object.values(data.files)[0];

	userData = JSON.parse(content);
}
main();

function getAvatarUrl(userId: string, hash: string) {
	return `https://cdn.discordapp.com/avatars/${userId}/${hash}.${hash.startsWith("a_") ? "gif" : "png"}?size=4096`;
}
function getGithubUrl(name: string) {
	return `https://github.com/${name}`;
}

function getTwitterUrl(name: string) {
	return `https://twitter.com/${name}`;
}
function getDiscordProfileUrl(userId: string) {
	return `https://discord.com/users/${userId}`;
}

function TeamProfileCard({ className, userTag, userId, avatarHash, githubName, twitterName }: ProfileProps) {
	const githubUrl = getGithubUrl(githubName);
	const twitterUrl = getTwitterUrl(twitterName);
	const discordprofileUrl = getDiscordProfileUrl(userId);

	return (
		<div className={className}>
			<div className="card card--full-height">
				<div className="card__header">
					<div className="avatar avatar--vertical">
						<img className="avatar__photo avatar__photo--xl" src={getAvatarUrl(userId, avatarHash)} alt={`${userTag}'s avatar`} />
						<div className="avatar__intro">
							<h3 className="avatar__name">{userTag}</h3>
						</div>
					</div>
				</div>
				<div className="card__footer">
					<div className="button-group button-group--block">
						{githubName && (
							<a className="button button--secondary" href={githubUrl} target="_blank" rel="noopener noreferrer">
								GitHub
							</a>
						)}
						{twitterName && (
							<a className="button button--secondary" href={twitterUrl} target="_blank" rel="noopener noreferrer">
								Twitter
							</a>
						)}

						<a className="button button--secondary" href={discordprofileUrl} target="_blank" rel="noopener noreferrer">
							Profile
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

function TeamProfileCardCol(props: ProfileProps) {
	return <TeamProfileCard {...props} className={"col col--6 margin-bottom--lg"} />;
}

export function CoreTeamRow() {
	if (userData === undefined) return <>Loading</>;
	return (
		<div className="row">
			{userData.map((user: { team: string; username: any; discriminator: any; id: string; avatar: string; twitter: string; github: string }) => {
				if (user.team !== "core") return;
				return (
					<TeamProfileCardCol
						userTag={`${user.username}#${user.discriminator}`}
						userId={user.id}
						avatarHash={user.avatar}
						twitterName={user.twitter}
						githubName={user.github}
					/>
				);
			})}
		</div>
	);
}

export function ContributorsRow() {
	if (userData === undefined) return <>Loading</>;
	return (
		<div className="row">
			{userData.map((user: { team: string; username: any; discriminator: any; id: string; avatar: string; twitter: string; github: string }) => {
				if (user.team !== "contributor") return;
				return (
					<TeamProfileCardCol
						userTag={`${user.username}#${user.discriminator}`}
						userId={user.id}
						avatarHash={user.avatar}
						twitterName={user.twitter}
						githubName={user.github}
					/>
				);
			})}
		</div>
	);
}

export function BugHuntersRow() {
	if (userData === undefined) return <>Loading</>;
	return (
		<div className="row">
			{userData.map((user: { team: string; username: any; discriminator: any; id: string; avatar: string; twitter: string; github: string }) => {
				if (user.team !== "bughunter") return;
				return (
					<TeamProfileCardCol
						userTag={`${user.username}#${user.discriminator}`}
						userId={user.id}
						avatarHash={user.avatar}
						twitterName={user.twitter}
						githubName={user.github}
					/>
				);
			})}
		</div>
	);
}

export function TranslatorsRow() {
	if (userData === undefined) return <>Loading</>;
	return (
		<div className="row">
			{userData.map((user: { team: string; username: any; discriminator: any; id: string; avatar: string; twitter: string; github: string }) => {
				if (user.team !== "translator") return;
				return (
					<TeamProfileCardCol
						userTag={`${user.username}#${user.discriminator}`}
						userId={user.id}
						avatarHash={user.avatar}
						twitterName={user.twitter}
						githubName={user.github}
					/>
				);
			})}
		</div>
	);
}
