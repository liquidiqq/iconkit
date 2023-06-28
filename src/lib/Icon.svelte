<script lang="ts">
	import './loading-circle.css';
	import { twMerge } from 'tailwind-merge';

	import {
		mainOutline,
		mainSolid,
		mainMini,
		loadingIcons,
		logosPack,
		brandIcons,
		brandOutline,
		brandSolid,
		brandMini,
		extraIcons,
		extraOutline,
		extraSolid,
		extraMini,
		defaultStrokeWidth,
		loadingStrokeWidth,
		regularSize,
		miniSize,
		defaultSizes
	} from './icons';

	import type { Icon } from './icons';

	import type { iconNames } from './icon-name-types';

	import type { customIconTypeSafety } from '../../../../src/iconkit-icons';

	// prettier-ignore
	type IconName = typeof iconNames[number] | typeof customIconTypeSafety[number] & {};
	export let name: IconName;

	let icon: string;
	let stroke: string | undefined = undefined;
	let fill: string | undefined = undefined;

	export let strokeWidth: string | undefined = undefined;
	let setStrokeWidth: string | undefined = undefined;

	export let noDefaultSize: boolean = false;

	type Mode = 'outline' | 'solid' | 'mini' | undefined;
	export let mode: Mode = undefined;

	export let outline: boolean = false;
	export let solid: boolean = false;
	export let mini: boolean = false;

	let viewBox: string;

	let loading: boolean = false;

	// Store icons
	let brandIconsSt = $brandIcons;
	let brandOutlineSt = $brandOutline;
	let brandSolidSt = $brandSolid;
	let brandMiniSt = $brandMini;

	let extraIconsSt = $extraIcons;
	let extraOutlineSt = $extraOutline;
	let extraSolidSt = $extraSolid;
	let extraMiniSt = $extraMini;

	// Check if the icon is main outline, solid or mini
	let isOutlineMain: boolean = mainOutline.hasOwnProperty(name);
	let isSolidMain: boolean = mainSolid.hasOwnProperty(name);
	let isMiniMain: boolean = mainMini.hasOwnProperty(name);

	// Check if the icon is brand outline, solid or mini
	let isOutlineBrand: boolean = brandOutlineSt.hasOwnProperty(name);
	let isSolidBrand: boolean = brandSolidSt.hasOwnProperty(name);
	let isMiniBrand: boolean = brandMiniSt.hasOwnProperty(name);

	// Check if the icon is extra outline, solid or mini
	let isOutlineExtra: boolean = extraOutlineSt.hasOwnProperty(name);
	let isSolidExtra: boolean = extraSolidSt.hasOwnProperty(name);
	let isMiniExtra: boolean = extraMiniSt.hasOwnProperty(name);

	// Check if the icon is a flattened icon
	let isBrandIcons: boolean = brandIconsSt.hasOwnProperty(name);

	let isExtraIcons: boolean = extraIconsSt.hasOwnProperty(name);

	let isLogosPack: boolean = logosPack.hasOwnProperty(name);

	// Check if the icon is a loading icon
	let isLoadingIcon: boolean = loadingIcons.hasOwnProperty(name);

	// Check if the icon is any of the above
	let isAllIcons: boolean =
		isOutlineMain ||
		isSolidMain ||
		isMiniMain ||
		isOutlineBrand ||
		isSolidBrand ||
		isMiniBrand ||
		isOutlineExtra ||
		isSolidExtra ||
		isMiniExtra;

	// Check if the icon is a flattened icon
	let isFlattenedIcons: boolean = isBrandIcons || isExtraIcons || isLogosPack;

	// Render the icon based on the above checks
	$: if (isFlattenedIcons) {
		mode = undefined;
		outline = false;
		solid = false;
		mini = false;
		if (logosPack.hasOwnProperty(name)) {
			solid = true;
			runIconMode();
			renderIcon(logosPack);
		}
		if (brandIconsSt.hasOwnProperty(name)) renderIconWithViewbox(brandIconsSt);
		if (extraIconsSt.hasOwnProperty(name)) renderIconWithViewbox(extraIconsSt);
	} else if (isLoadingIcon) {
		if (mode === 'mini') {
			loading = true;
			mini = true;
		}
		viewBox = '0 0 24 24';
		setStrokeWidth = $loadingStrokeWidth;
		stroke = 'currentColor';
		fill = 'none';
		icon = loadingIcons[name]['path'];
	} else if (isAllIcons) {
		switch (mode) {
			case 'outline':
				outline = true;
				runIconMode();
				outlineIcons();
				break;
			case 'solid':
				solid = true;
				runIconMode();
				solidIcons();
				break;
			case 'mini':
				mini = true;
				runIconMode();
				miniIcons();
				break;
			default:
				outline = true;
				runIconMode();
				outlineIcons();
				break;
		}
	}

	// Render the icon based on the mode
	function outlineIcons(): void {
		if (isOutlineMain) renderIcon(mainOutline);
		if (isOutlineBrand) renderIcon(brandOutlineSt);
		if (isOutlineExtra) renderIcon(extraOutlineSt);
	}
	function solidIcons(): void {
		if (isSolidMain) renderIcon(mainSolid);
		if (isSolidBrand) renderIcon(brandSolidSt);
		if (isSolidExtra) renderIcon(extraSolidSt);
	}
	function miniIcons(): void {
		if (isMiniMain) renderIcon(mainMini);
		if (isMiniBrand) renderIcon(brandMiniSt);
		if (isMiniExtra) renderIcon(extraMiniSt);
	}

	// Render the icon with a viewBox
	function renderIconWithViewbox(iconObj: Icon): void {
		if (iconObj[name].hasOwnProperty('viewBox')) {
			viewBox = iconObj[name]['viewBox'];
			viewBox = viewBox;
			fill = 'none';
			fill = fill;
			icon = iconObj[name]['path'].replace(/<svg.*?>/g, '').replace(/<\/svg>/g, '');
			icon = icon;
		} else {
			viewBox = '0 0 24 24';
			viewBox = viewBox;

			icon = iconObj[name]['path'].replace(/<svg.*?>/g, '').replace(/<\/svg>/g, '');
			icon = icon;
		}
	}

	// Render the icon
	function renderIcon(iconObj: Icon): void {
		if (iconObj.hasOwnProperty(name)) {
			viewBox = mini ? '0 0 20 20' : '0 0 24 24';
			viewBox = viewBox;

			// Remove fill, stroke-width, and stroke attributes
			icon = iconObj[name]['path']
				.replace(/<svg.*?>/g, '')
				.replace(/<\/svg>/g, '')
				.replace(/fill=".*?"/g, '')
				.replace(/stroke-width=".*?"/g, '')
				.replace(/stroke=".*?"/g, '');
			icon = icon;
		}
	}

	// Set the stroke and fill based on the mode
	function runIconMode(): void {
		if (outline) {
			setStrokeWidth = $defaultStrokeWidth;
			stroke = 'currentColor';
			fill = 'none';
		}
		if (solid || mini) {
			setStrokeWidth = 'none';
			stroke = 'none';
			fill = 'currentColor';
		}
	}

	// Convert the name to title case
	function titleCase(str: string) {
		return str
			.split('-')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	}

	// Set the default size classes
	$: defaultSizesClasses = !mini ? $regularSize : $miniSize;
	$: isdefaultSizes = $defaultSizes === true ? defaultSizesClasses : '';

	// Set the base classes
	$: baseClasses =
		noDefaultSize === true ? $$props.class ?? '' : `${isdefaultSizes} ${$$props.class ?? ''}`;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	{fill}
	{viewBox}
	{stroke}
	stroke-width={strokeWidth ? strokeWidth : setStrokeWidth}
	class={twMerge(baseClasses)}
	role="img"
	aria-label={titleCase(name)}
	aria-hidden="true"
	focusable="false"
	{...$$restProps}
>
	{@html icon}
</svg>
