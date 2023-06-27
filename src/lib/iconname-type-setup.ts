import type { iconNames } from './icon-name-types';

const fallbackCustomIconTypeSafety = [] as const;

let customIconTypeSafety;

try {
	// @ts-nocheck
	const module = await import('@src/iconkit-icons');
	customIconTypeSafety = module.customIconTypeSafety;
} catch (error) {
	console.error('iconkit-icons.ts file not found. Custom icons will not be available.');
	customIconTypeSafety = fallbackCustomIconTypeSafety;
}

// prettier-ignore
export type IconName = typeof iconNames[number] | typeof customIconTypeSafety[number] & {};
