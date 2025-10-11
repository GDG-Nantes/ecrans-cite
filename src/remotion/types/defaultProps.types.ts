export type Speaker = {
  picture: string;
  name: string;
};

export type DefaultProps = {
  title: string;
  speakers?: Speaker[];
  date?: string;
  time?: string;
  location?: string;
  titleFontSize?: number;
  image?: string;
};

export type ComponentDisplayMode = {
	isTotemDisplayMode?: boolean;
};
