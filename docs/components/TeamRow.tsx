import React, { useState, useEffect } from "react";

interface ProfileProps {
	className?: string;
	userTag: string;
	userId: string;
	avatarHash: string;
	githubName?: string;
	twitterName?: string;
}

interface UserAPI {
	id: string;
	username: string;
	discriminator: string;
	avatar: string;
	flags: number;
	twitter?: string;
	github?: string;
	team: string;
}

function getAvatarUrl(userId: string, hash: string) {
	return `https://cdn.discordapp.com/avatars/${userId}/${hash}.${hash.startsWith("a_") ? "gif" : "png"}?size=4096`;
}
function getGithubUrl(name: string) {
	return `https://github.com/${name}`;
}

function getTwitterUrl(name: string) {
	return `https://twitter.com/${name}`;
}
function getDiscordprofileUrl(userId: string) {
	return `https://discord.com/users/${userId}`;
}

function TeamProfileCard({ className, userTag, userId, avatarHash, githubName, twitterName }: ProfileProps) {
	const githubUrl = getGithubUrl(githubName);
	const twitterUrl = getTwitterUrl(twitterName);
	const discordprofileUrl = getDiscordprofileUrl(userId);

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
						{userId && (
							<a className="button button--secondary" href={discordprofileUrl} target="_blank" rel="noopener noreferrer">
								Discord
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

function TeamProfileCardCol(props: ProfileProps) {
	return <TeamProfileCard {...props} className={"col col--6 margin-bottom--lg"} />;
}

export function TeamRow() {
	let [team, setTeam] = useState<UserAPI>(null);

	useEffect(() => {
		fetch("https://api.github.com/gists/2f20a6cb87c6bd4d83f3ae093bfde3a1")
			.then(response => response.json())
			.then(data => setTeam(JSON.parse(data.files["team.json"].content)));
	}, []);

	if (team === null) return <h1>Loading...</h1>;

	const core: any[] = [];
	const contributors: any = [];
	const bugHunters: any[] = [];
	const translators: any[] = [];

	for (const [_, user] of Object.entries<UserAPI>(team)) {
		if (user.team === "core") core.push(user);
		else if (user.team === "contributor") contributors.push(user);
		else if (user.team === "bughunter") bugHunters.push(user);
		else if (user.team === "translator") translators.push(user);
	}

	return (
		<>
			<h1>Core Development Team</h1>
			<p>We are the core team, responsible for most of the code and community management.</p>
			<div className="row">
				{core.map((user: UserAPI) => (
					<TeamProfileCardCol
						userTag={`${user.username}#${user.discriminator}`}
						userId={user.id}
						avatarHash={user.avatar}
						twitterName={user.twitter}
						githubName={user.github}
					/>
				))}
			</div>
			<h1>Contributors</h1>
			<p>Users who have contributed to making Bulbbot better.</p>
			<div className="row">
				{contributors.map((user: UserAPI) => (
					<TeamProfileCardCol
						userTag={`${user.username}#${user.discriminator}`}
						userId={user.id}
						avatarHash={user.avatar}
						twitterName={user.twitter}
						githubName={user.github}
					/>
				))}
			</div>
			<h1>Bug Hunters</h1>
			<p>Users that have found bugs on Bulbbot and reported them to us.</p>
			<div className="row">
				{bugHunters.map((user: UserAPI) => (
					<TeamProfileCardCol
						userTag={`${user.username}#${user.discriminator}`}
						userId={user.id}
						avatarHash={user.avatar}
						twitterName={user.twitter}
						githubName={user.github}
					/>
				))}
			</div>
			<h1>Translators</h1>
			<p>Translators that have helped us to translate the bot to other languages.</p>
			<div className="row">
				{translators.map((user: UserAPI) => (
					<TeamProfileCardCol
						userTag={`${user.username}#${user.discriminator}`}
						userId={user.id}
						avatarHash={user.avatar}
						twitterName={user.twitter}
						githubName={user.github}
					/>
				))}
			</div>
		</>
	);
}
