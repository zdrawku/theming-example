import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
    private static readonly STORAGE_KEY = 'gruvbox-theme';

    /** true = dark theme active */
    public isDark = signal(this.loadPreference());

    constructor() {
        this.applyTheme(this.isDark());
    }

    /** Toggle between light and dark themes */
    public toggle(): void {
        const next = !this.isDark();
        this.isDark.set(next);
        this.applyTheme(next);
        localStorage.setItem(ThemeService.STORAGE_KEY, next ? 'dark' : 'light');
    }

    private applyTheme(dark: boolean): void {
        if (dark) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }

    private loadPreference(): boolean {
        const stored = localStorage.getItem(ThemeService.STORAGE_KEY);
        if (stored) {
            return stored === 'dark';
        }
        // Default to dark (preserves the original experience)
        return true;
    }
}
