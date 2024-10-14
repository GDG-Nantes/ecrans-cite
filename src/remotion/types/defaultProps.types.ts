export type Speaker = {
  picture: string;
  name: string;
};

export type DefaultProps = {
  title: string;
  speakers: Speaker[];
  date?: string;
  time?: string;
  location?: string;
};

export type ComponentDisplayMode = {
	isTotemDisplayMode?: boolean;
};

export const ShowcaseDevfestNantes2024Schema = DefaultProps.extend({
	titleFontSize: z.number().optional(),
});