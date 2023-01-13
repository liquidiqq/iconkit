<script context="module">
</script>

<script lang="ts">
	import './loading-circle.css';
	import { mainOutline, mainSolid, mainMini, loadingIcons, logosPack } from './icons';
	import {
		brandIcons,
		brandOutline,
		brandSolid,
		brandMini,
		extraIcons,
		extraOutline,
		extraSolid,
		extraMini,
		strokeWidth,
		loadingStrokeWidth,
		tailwindDefault,
		tailwindMini,
		tailwind
	} from './icons';
	import type { Icon, customIcon } from './icons';

	export let name: string;
	let iconName: string;
	let opacity: string = '0';
	let stroke: string | undefined = undefined;
	let fill: string | undefined = undefined;
	export let focusable: string | number | null | undefined = 'false';
	let setStrokeWidth: string | undefined = undefined;

	type Mode = 'outline' | 'solid' | 'mini' | undefined;

	export let mode: Mode = undefined;

	export let outline: boolean = false;
	export let solid: boolean = false;
	export let mini: boolean = false;

	let viewBox: string;

	let loading: boolean = false;

	$: {
		viewBox;
	}
	// brand icons from store
	let brandIconsSt = $brandIcons;
	let brandOutlineSt = $brandOutline;
	let brandSolidSt = $brandSolid;
	let brandMiniSt = $brandMini;
	// extra icons from store
	let extraIconsSt = $extraIcons;
	let extraOutlineSt = $extraOutline;
	let extraSolidSt = $extraSolid;
	let extraMiniSt = $extraMini;
	// main outline, solid and mini icons
	let isOutlineMain: boolean = mainOutline.hasOwnProperty(name);
	let isSolidMain: boolean = mainSolid.hasOwnProperty(name);
	let isMiniMain: boolean = mainMini.hasOwnProperty(name);
	// brand outline, solid and mini icons
	let isOutlineBrand: boolean = brandOutlineSt.hasOwnProperty(name);
	let isSolidBrand: boolean = brandSolidSt.hasOwnProperty(name);
	let isMiniBrand: boolean = brandMiniSt.hasOwnProperty(name);
	// extra outline, solid and mini icons
	let isOutlineExtra: boolean = extraOutlineSt.hasOwnProperty(name);
	let isSolidExtra: boolean = extraSolidSt.hasOwnProperty(name);
	let isMiniExtra: boolean = extraMiniSt.hasOwnProperty(name);

	// flattened icons
	let isBrandIcons: boolean = brandIconsSt.hasOwnProperty(name);
	// brand has viewBox
	let brandHasViewbox: boolean = isBrandIcons ?? brandIconsSt[name].hasOwnProperty('viewBox');

	let isExtraIcons: boolean = extraIconsSt.hasOwnProperty(name);
	let extraHasViewbox: boolean = isExtraIcons ?? extraIconsSt[name].hasOwnProperty('viewBox');

	let isCustomViewBox: boolean = brandHasViewbox || extraHasViewbox;

	let isLogosPack: boolean = logosPack.hasOwnProperty(name);
	// loading icons
	let isLoadingIcon: boolean = loadingIcons.hasOwnProperty(name);
	// prettier-ignore
	let isAllIcons: boolean = isOutlineMain || isSolidMain || isMiniMain || isOutlineBrand || isSolidBrand || isMiniBrand || isOutlineExtra || isSolidExtra || isMiniExtra;

	let isFlattenedIcons: boolean = isBrandIcons || isExtraIcons || isLogosPack;

	$: if (isFlattenedIcons) {
		mode = undefined;
		outline = false;
		solid = false;
		mini = false;
		if (logosPack.hasOwnProperty(name)) renderIcon(logosPack);
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
		iconName = loadingIcons[name];
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
	function outlineIcons() {
		if (isOutlineMain) renderIcon(mainOutline);
		if (isOutlineBrand) renderIcon(brandOutlineSt);
		if (isOutlineExtra) renderIcon(extraOutlineSt);
	}
	function solidIcons() {
		if (isSolidMain) renderIcon(mainSolid);
		if (isSolidBrand) renderIcon(brandSolidSt);
		if (isSolidExtra) renderIcon(extraSolidSt);
	}
	function miniIcons() {
		if (isMiniMain) renderIcon(mainMini);
		if (isMiniBrand) renderIcon(brandMiniSt);
		if (isMiniExtra) renderIcon(extraMiniSt);
	}

	function renderIconWithViewbox(iconObj: customIcon) {
		if (iconObj[name].hasOwnProperty('viewBox')) {
			viewBox = iconObj[name]['viewBox'];
			viewBox = viewBox;
			fill = 'none';
			fill = fill;
			iconName = iconObj[name]['path'];
			iconName = iconName;
		} else {
			viewBox = '0 0 24 24';
			viewBox = viewBox;

			iconName = iconObj[name]['path'];
			iconName = iconName;
		}
	}

	function renderIcon(iconObj: Icon) {
		if (iconObj.hasOwnProperty(name)) {
			viewBox = mini ? '0 0 20 20' : '0 0 24 24';
			viewBox = viewBox;

			iconName = iconObj[name];
			iconName = iconName;
		}
	}

	function runIconMode() {
		if (outline) {
			setStrokeWidth = $strokeWidth;
			stroke = 'currentColor';
			fill = 'none';
		}
		if (solid || mini) {
			setStrokeWidth = 'none';
			stroke = 'none';
			fill = 'currentColor';
		}
	}
	// classes
	let classesAssigned: any = `"${$$props.class}"`;
	let hasSize = classesAssigned.indexOf('h-') || classesAssigned.indexOf('w-');
	$: tailwindClasses = mini ? $tailwindMini : $tailwindDefault;
	$: isTailwind = $tailwind === true ? tailwindClasses : '';
	$: baseClasses = hasSize === -1 ? `${isTailwind} ${$$props.class}` : $$props.class;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	{fill}
	{viewBox}
	stroke-width={setStrokeWidth}
	{stroke}
	{focusable}
	preserveAspectRatio="xMidYMid meet"
	{...$$restProps}
	class={baseClasses}
>
	{@html iconName}
</svg>
