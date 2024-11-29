export type Part = {
  star_index: number;
  get_star_ts: number;
};

export type Member = {
  id: number;
  name: string | null;
  stars: number;
  last_star_ts: number;
  local_score: number;
  global_score: number;
  completion_day_level: {
    [day: string]: {
      "1": Part;
      "2"?: Part;
    };
  };
};

export type Leaderboard = {
  members: Record<string, Member>;
  event: string;
  owner_id: number;
};

export type LeaderboardProps = {
  leaderboard: Leaderboard;
};

export type DateProps = {
  date: Date;
};

export type Props = LeaderboardProps & DateProps;
