import { browser } from '$app/environment';
import { linkBridge } from '@webview-bridge/web';
import { readable } from 'svelte/store';
import type { AppBridge } from '../types/bridge_types';

export const readableBridgeLink = readable(
	browser && linkBridge<AppBridge>({ throwOnError: true })
);
