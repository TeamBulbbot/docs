import React from "react";

interface ProfileProps {
  className?: string;
  userTag: string;
  userId: string;
  avatarHash: string;
  githubName?: string;
  twitterName?: string;
  DiscordprofileName?: string;
}


function getAvatarUrl(userId: string, hash: string) {
  return `https://cdn.discordapp.com/avatars/${userId}/${hash}.${
    hash.startsWith("a_") ? "gif" : "png"
  }?size=4096`;
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



function TeamProfileCard({
  className,
  userTag,
  userId,
  avatarHash,
  githubName,
  twitterName,
 DiscordprofileName,
}: ProfileProps) {
  const githubUrl = getGithubUrl(githubName);
  const twitterUrl = getTwitterUrl(twitterName);
  const discordprofileUrl = getDiscordprofileUrl(userId);

  return (
    <div className={className}>
      <div className="card card--full-height">
        <div className="card__header">
          <div className="avatar avatar--vertical">
            <img
              className="avatar__photo avatar__photo--xl"
              src={getAvatarUrl(userId, avatarHash)}
              alt={`${userTag}'s avatar`}
            />
            <div className="avatar__intro">
              <h3 className="avatar__name">{userTag}</h3>
            </div>
          </div>
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            {githubName && (
              <a
                className="button button--secondary"
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
            {twitterName && (
              <a
                className="button button--secondary"
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            )}
            {userId && (
              <a
                className="button button--secondary"
                href={discordprofileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Profile
              </a>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamProfileCardCol(props: ProfileProps) {
  return (
    <TeamProfileCard {...props} className={"col col--6 margin-bottom--lg"} />
  );
}

export function CoreTeamRow() {
  return (
    <div className="row">
      <TeamProfileCardCol
        userTag="mrphilip#4463"
        userId="190160914765316096"
        avatarHash="3cfd8ef7ed7b82a32b1ee863363661d3"
        twitterName="y3ll0wLife"
        githubName="y3ll0wlife"
      />
      <TeamProfileCardCol
        userTag="KlukCZ#6589"
        userId="439396770695479297"
        avatarHash="f4209b4a8693da76f995667bc7591a77"
        twitterName="KlukCZ"
        githubName="KlukCZ"
      />
      <TeamProfileCardCol
        userTag="wakfi#6999"
        userId="193160566334947340"
        avatarHash="f6fc1aece55d43fd429e5d9d3991bafe"
        githubName="wakfi"
      />
    </div>
  );
}

export function ContributorsRow() {
  return (
    <div className="row">
      <TeamProfileCardCol
        userTag="54D#1357"
        userId="360809274894712833"
        avatarHash="a_ef6d92196f1d2e71383f6e2bac208c2d"
      />
      <TeamProfileCardCol
        userTag="Miky88#3229"
        userId="311929179186790400"
        avatarHash="69d2c1ec14bfad618fca01a18f39b8e3"
        twitterName="MikyOttantotto"
        githubName="Miky88"
      />
    </div>
  );
}

export function BugHuntersRow() {
  return (
    <div className="row">
      <TeamProfileCardCol
        userTag="Purple#0064"
        userId="559071881932570644"
        avatarHash="fa2b431d9a2f2ee7f45c734f01ea6dd0"
      />
      <TeamProfileCardCol
        userTag="Bryth#1086"
        userId="231714802261557249"
        avatarHash="d6e157b42bb5e0211e94639a7b3c5d10"
        twitterName="Brythzz"
      />
    </div>
  );
}

export function TranslatorsRow() {
  return (
    <div className="row">
      <TeamProfileCardCol
        userTag="Just a Regular Talking Box#8289"
        userId="565143645167288340"
        avatarHash="7476e5cf164650b22b2f9dc9ac45a266"
      />
      <TeamProfileCardCol
        userTag="KingOfThunder#8291"
        userId="850003505778393128"
        avatarHash="b990c01d505e3f4d8653e579a2df128c"
        githubName="KingOfThunder15"
        
      />
      <TeamProfileCardCol
        userTag="Kiyoko#0001"
        userId="256422547556401152"
        avatarHash="a_911b16cba9cb8a849c900baa4f75e762"
        githubName="Shironep"
      />
      <TeamProfileCardCol
        userTag="sim#3745"
        userId="425339165278863380"
        avatarHash="42d628f7fe6e7a0741db6f3b0b2e7c0b"
        githubName="simonfsvk"
        twitterName="yeaimsimon"
      />
      <TeamProfileCardCol
        userTag="Snowdreas_#0048"
        userId="511158329477693449"
        avatarHash="b6d7b77d8c74312ae6f899bdc577fe31"
      />
      <TeamProfileCardCol
        userTag="vito7#7786"
        userId="742369927985365042"
        avatarHash="72688e08443d2c8717e9ebdcea75724d"
        githubName="vitorlops"
      />
    </div>
  );
}
