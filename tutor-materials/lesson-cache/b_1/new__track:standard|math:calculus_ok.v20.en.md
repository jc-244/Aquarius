%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6ImJvdGgiLCJyYXRpb25hbGUiOiJBZ2VudCBBIEpTT04gZmFpbGVkLCBzbyBrZWVwIG9uZSB0ZXh0Ym9vayBmaWd1cmUgYXMgdGhlIGZhY3R1YWwgYW5jaG9yIGFuZCBhZGQgb25lIGdlbmVyYXRlZCBncHRpbWFnZTIgdGVhY2hpbmcgdmlzdWFsIHRvIHByZXNlcnZlIGNsYXJpdHkuIiwiY3JhbSI6IlVzZSB0aGUgdmlzdWFsIHRvIHJlY29nbml6ZSB0aGUgZXhhbSBwYXR0ZXJuIHF1aWNrbHkuIiwic3RhbmRhcmQiOiJVc2UgdGhlIHZpc3VhbCB0byBjbGFyaWZ5IHRoZSBjb3JlIGNvbmNlcHQgd2l0aCBhIHNpbmdsZSBjbGVhciBwYXRoLiIsInRvcF9zY29yZSI6IlVzZSB0aGUgdmlzdWFsIHRvIGhpZ2hsaWdodCBzdWJ0bGUgZGlzdGluY3Rpb25zLCB0cmFwcywgb3IgdmFyaWFudHMuIn0=" style="display:none;"></div>%%KC_END%%
## Overview

> **Objective:** Understand what complex numbers are, how to represent them in rectangular and polar form, and why they are indispensable in signals and systems.

Complex numbers extend the ordinary real number line into a two-dimensional plane. Far from being a purely abstract curiosity, they arise naturally whenever we solve equations like \(x^2 + 1 = 0\) — equations that have no solution among the reals. Section B.1 introduces the rectangular form \(z = a + jb\), the polar form \(z = re^{j\theta}\), and the geometric picture that connects them: the complex plane. After working through this section you will be able to convert between forms, locate a complex number on the plane, and recognize the traps that appear most often on exams.

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="book_image" data-teaching-role="concept_anchor" data-visual-use-b64="eyJjcmFtIjoiU2NhbiB0aGUgYXhlcywgdGhlIHBvaW50IFxcKChhLCBiKVxcKSwgdGhlIHJhZGl1cyBcXChyXFwpLCBhbmQgdGhlIGFuZ2xlIFxcKFxcdGhldGFcXCkg4oCUIHRoYXQgaXMgdGhlIGVudGlyZSByZWN0YW5ndWxhci10by1wb2xhciBjb252ZXJzaW9uIGluIG9uZSBwaWN0dXJlLiIsInN0YW5kYXJkIjoiVXNlIHRoaXMgZmlndXJlIHRvIGFuY2hvciB0aGUgaWRlYSB0aGF0IGV2ZXJ5IGNvbXBsZXggbnVtYmVyIGlzIGEgcG9pbnQgb24gYSAyLUQgcGxhbmUsIHdpdGggYSByZWFsIHBhcnQgYWxvbmcgdGhlIGhvcml6b250YWwgYXhpcyBhbmQgYW4gaW1hZ2luYXJ5IHBhcnQgYWxvbmcgdGhlIHZlcnRpY2FsIGF4aXMuIiwidG9wX3Njb3JlIjoiTm90aWNlIHRoZSBjb25qdWdhdGUgXFwoel4qID0gYSAtIGpiXFwpIHJlZmxlY3RlZCBiZWxvdyB0aGUgcmVhbCBheGlzIOKAlCBhIGRldGFpbCB0aGF0IGFwcGVhcnMgaW4gZXhhbSBxdWVzdGlvbnMgYWJvdXQgY29uanVnYXRlIHBhaXJzIGFuZCBtYWduaXR1ZGUgY2FsY3VsYXRpb25zLiJ9" style="display:none;"></div>%%KC_END%%
![Fig. B.2](/figures/page-005-fig__b_2-1.png)
*Fig. B.2 from the textbook: the complex plane showing \(z = a + jb\) as a point with magnitude \(r\) and angle \(\theta\), together with its conjugate \(z^* = a - jb\) — the single most important diagram for anchoring rectangular and polar form simultaneously.*

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="generate_image" data-teaching-role="comparison_anchor" data-visual-use-b64="eyJjcmFtIjoiUmVhZCB0aGUgdHdvIGJveGVzIGF0IHRoZSBib3R0b20g4oCUIHJlY3Rhbmd1bGFyIHZzLiBwb2xhciDigJQgYW5kIHRoZSByZWQgdHJhcCBub3RlIGFib3V0IHF1YWRyYW50LiBUaGF0IGlzIHRoZSBlbnRpcmUgY29udmVyc2lvbiBydWxlLiIsInN0YW5kYXJkIjoiRm9sbG93IHRoZSByZWFkaW5nIHBhdGg6IHBvaW50IG9uIHRoZSBwbGFuZSDihpIgZGFzaGVkIGxlZ3MgZ2l2ZSBcXChhXFwpIGFuZCBcXChiXFwpIOKGkiBhcnJvdyBnaXZlcyBcXChyXFwpIGFuZCBcXChcXHRoZXRhXFwpIOKGkiB0d28gZm9ybXMgYXJlIGp1c3QgdHdvIHdheXMgdG8gbmFtZSB0aGUgc2FtZSBwb2ludC4iLCJ0b3Bfc2NvcmUiOiJGb2N1cyBvbiB0aGUgcmVkIGNhbGxvdXQ6IFxcKFxcdGhldGEgPSBcXGFyY3RhbihiL2EpXFwpIGlzIG9ubHkgY29ycmVjdCBpbiB0aGUgZmlyc3QgcXVhZHJhbnQuIEZvciBvdGhlciBxdWFkcmFudHMgeW91IG11c3QgYWRkIG9yIHN1YnRyYWN0IFxcKFxccGlcXCkg4oCUIGEgY2xhc3NpYyBzb3VyY2Ugb2Ygc2lnbiBlcnJvcnMgb24gZXhhbXMuIn0=" style="display:none;"></div>%%KC_END%%
*🎨 A single complex number shown as a point on the plane, with its rectangular components \(a\) and \(b\) and its polar components \(r\) and \(\theta\) labeled. The two standard forms are displayed side by side, and the quadrant trap is flagged in red.*
![Illustration](/generated/gptimage2-1777215499187-6609.png)

## Core Idea

Every complex number is simply **a point on a two-dimensional plane**. The horizontal axis carries the real part \(a\) and the vertical axis carries the imaginary part \(b\), giving the **rectangular form**:

$$
z = a + jb
$$

The same point can be described by its distance from the origin \(r\) and the angle \(\theta\) it makes with the positive real axis, giving the **polar (exponential) form**:

$$
z = re^{j\theta}, \quad r = \sqrt{a^2 + b^2}, \quad \theta = \arctan\!\left(\frac{b}{a}\right)
$$

### KEY INSIGHT

Rectangular and polar form are **two names for the same point** — switching between them is the single most-tested skill in this section.

### COMMON EXAM TRAP

The formula \(\theta = \arctan(b/a)\) gives the correct angle **only in the first quadrant**. When \(a < 0\), you must add \(\pi\) (or \(180^\circ\)) to land in the correct quadrant. For example, \(z = -2 + j1\) has \(\theta = \arctan(-1/2) + \pi \approx 153.4^\circ\), not \(-26.6^\circ\).

> **Quick check:** Always verify the quadrant by inspecting the signs of \(a\) and \(b\) before writing down \(\theta\).

---
**📌 Key Takeaways**
- A complex number \(z = a + jb\) is a point on the 2-D complex plane with real part \(a\) and imaginary part \(b\).
- Polar form \(z = re^{j\theta}\) describes the same point using magnitude \(r\) and angle \(\theta\).
- Converting between forms requires a quadrant check — \(\arctan(b/a)\) alone is not always correct.

*With the complex plane established, the next section builds on it to introduce sinusoidal signals and show how their amplitude, frequency, and phase map directly onto complex exponentials.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NCwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo0LCJtYXgiOjV9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6ImJfMV9jb3JlIiwibGFiZWwiOiJDb21wbGV4IE51bWJlcnMg4oCUIFJlY3Rhbmd1bGFyIGFuZCBQb2xhciBGb3JtIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoiY29yZV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2hpY2ggc3RhdGVtZW50IGJlc3QgY2FwdHVyZXMgdGhlIG1haW4gbGVhcm5pbmcgZ29hbCBvZiBTZWN0aW9uIEIuMT8iLCJvcHRpb25zIjpbIkEuIE1lbW9yaXplIHRoZSBmaW5hbCByZXN1bHQgd2l0aG91dCBjb25uZWN0aW5nIGl0IHRvIHRoZSB2aXN1YWwgb3Igc3RydWN0dXJhbCBtZWFuaW5nIiwiQi4gVW5kZXJzdGFuZCB0aGUgY29yZSBkZWZpbml0aW9uLCB0aGUgdmlzdWFsL3N0cnVjdHVyYWwgbWVhbmluZywgYW5kIGhvdyB0aGUgaWRlYSBhcHBlYXJzIGluIGV4YW0gcXVlc3Rpb25zIiwiQy4gVHJlYXQgdGhlIHRvcGljIGFzIHB1cmUgc3ltYm9sIG1hbmlwdWxhdGlvbiB3aXRoIG5vIGNvbmNlcHR1YWwgc3RydWN0dXJlIiwiRC4gRm9jdXMgb25seSBvbiB0ZXJtaW5vbG9neSBiZWNhdXNlIHRoZSBleGFtIG5ldmVyIHRlc3RzIGludGVycHJldGF0aW9uIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiU3Ryb25nIHVuZGVyc3RhbmRpbmcgaW4gdGhpcyBzZWN0aW9uIG1lYW5zIGNvbm5lY3RpbmcgdGhlIGRlZmluaXRpb24gb2YgYSBjb21wbGV4IG51bWJlciwgaXRzIGdlb21ldHJpYyBtZWFuaW5nIG9uIHRoZSBjb21wbGV4IHBsYW5lLCBhbmQgdGhlIGV4YW0tZmFjaW5nIGNvbnZlcnNpb24gYmV0d2VlbiByZWN0YW5ndWxhciBhbmQgcG9sYXIgZm9ybS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJNZW1vcml6YXRpb24gYWxvbmUgYnJlYWtzIGRvd24gb24gdmFyaWFudCBxdWVzdGlvbnMgdGhhdCBjaGFuZ2UgdGhlIHF1YWRyYW50IG9yIHRoZSBzaWduIG9mIGEgY29tcG9uZW50LiIsIkMiOiJUaGUgc2VjdGlvbiBpcyBidWlsdCBhcm91bmQgYSBnZW9tZXRyaWMgcGljdHVyZSDigJQgdGhlIGNvbXBsZXggcGxhbmUg4oCUIG5vdCBlbXB0eSBzeW1ib2wgbWFuaXB1bGF0aW9uLiIsIkQiOiJJbnRlcnByZXRhdGlvbiBvZiBmb3JtLCBxdWFkcmFudCwgYW5kIGFuZ2xlIGlzIGV4YWN0bHkgd2hhdCBleGFtIHF1ZXN0aW9ucyBwcm9iZSBtb3N0IGhlYXZpbHkuIn0sImhpbnQiOiJQaWNrIHRoZSBvcHRpb24gdGhhdCBjb21iaW5lcyBkZWZpbml0aW9uLCBnZW9tZXRyaWMgbWVhbmluZywgYW5kIGV4YW0tcmVsZXZhbnQgdXNlLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9LHsiaWQiOiJjb3JlX3EyIiwidHlwZSI6InNob3J0X2Fuc3dlciIsInN0ZW0iOiJJbiAx4oCTMiBzZW50ZW5jZXMsIGV4cGxhaW4gdGhlIGNvcmUgcmVsYXRpb25zaGlwIGEgc3R1ZGVudCBzaG91bGQgbm90aWNlIGZpcnN0IHdoZW4gbGVhcm5pbmcgU2VjdGlvbiBCLjEuIiwiaWRlYWxfYW5zd2VyIjoiVGhlIGNlbnRyYWwgcmVsYXRpb25zaGlwIGlzIHRoYXQgZXZlcnkgY29tcGxleCBudW1iZXIgXFwoeiA9IGEgKyBqYlxcKSBpcyBhIHBvaW50IG9uIHRoZSBjb21wbGV4IHBsYW5lLCBhbmQgdGhlIHNhbWUgcG9pbnQgY2FuIGJlIGRlc2NyaWJlZCBpbiBwb2xhciBmb3JtIGFzIFxcKHogPSByZV57alxcdGhldGF9XFwpIHdoZXJlIFxcKHIgPSBcXHNxcnR7YV4yICsgYl4yfVxcKSBhbmQgXFwoXFx0aGV0YVxcKSBpcyB0aGUgYW5nbGUgbWVhc3VyZWQgZnJvbSB0aGUgcG9zaXRpdmUgcmVhbCBheGlzLiBDb252ZXJ0aW5nIGZsdWVudGx5IGJldHdlZW4gdGhlc2UgdHdvIGZvcm1zIOKAlCB3aGlsZSBjaGVja2luZyB0aGUgcXVhZHJhbnQg4oCUIGlzIHRoZSBwcmltYXJ5IGV4YW0gc2tpbGwuIiwiZ3JhZGluZ19ydWJyaWMiOlsiTXVzdCBpZGVudGlmeSB0aGF0IGEgY29tcGxleCBudW1iZXIgaXMgYSBwb2ludCBvbiBhIDItRCBwbGFuZSIsIk11c3QgbWVudGlvbiBib3RoIHJlY3Rhbmd1bGFyIGZvcm0gXFwoYSArIGpiXFwpIGFuZCBwb2xhciBmb3JtIFxcKHJlXntqXFx0aGV0YX1cXCkiLCJNdXN0IHJlZmVyZW5jZSBjb252ZXJzaW9uIGJldHdlZW4gZm9ybXMgb3IgdGhlIHF1YWRyYW50IGNoZWNrIGFzIHRoZSBleGFtLXJlbGV2YW50IHNraWxsIl0sImV4cGxhbmF0aW9uIjoiVGhpcyBxdWVzdGlvbiBjaGVja3Mgd2hldGhlciB0aGUgc3R1ZGVudCBzZWVzIHRoZSBtYWluIHRocmVhZCDigJQgdHdvIGVxdWl2YWxlbnQgcmVwcmVzZW50YXRpb25zIG9mIG9uZSBnZW9tZXRyaWMgb2JqZWN0IOKAlCByYXRoZXIgdGhhbiBpc29sYXRlZCBmb3JtdWxhcy4iLCJoaW50IjoiU3RhcnQgd2l0aCAndGhlIG1haW4gcmVsYXRpb25zaGlwIGlzLi4uJyBhbmQgY29ubmVjdCB0aGUgcGxhbmUgcGljdHVyZSB0byB0aGUgdHdvIGFsZ2VicmFpYyBmb3Jtcy4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19XX0=" style="display:none;"></div>%%KC_END%%
