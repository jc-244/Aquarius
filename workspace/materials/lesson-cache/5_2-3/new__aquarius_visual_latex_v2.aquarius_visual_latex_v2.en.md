%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6ImdlbmVyYXRlZF9pbWFnZSIsInJhdGlvbmFsZSI6IlRoaXMgc2VjdGlvbiBoYXMgbm8gdGV4dGJvb2sgZmlndXJlIGFuZCB0aGUga2V5IGlkZWEgaXMgYSBzeW1ib2xpYyBvcGVyYXRvciBtYXBwaW5nIHJhdGhlciB0aGFuIGEgc3RhbmRhcmQgcHVibGljIHJlZmVyZW5jZSBkaWFncmFtLiBBIGNvbXBhY3QgY3VzdG9tIG9wZXJhdG9yLWZsb3cgdmlzdWFsIGlzIHVzZWZ1bCBiZWNhdXNlIHN0dWRlbnRzIG9mdGVuIHJlbWVtYmVyICdkaWZmZXJlbnRpYXRlJyBidXQgZm9yZ2V0IHRoZSByZXF1aXJlZCBtdWx0aXBsaWVyIFxcKC16XFwpIGFuZCB0aGUgb3JkZXIgb2Ygb3BlcmF0aW9ucy4gTGFUZVggYmxvY2tzIHdpbGwgY2FycnkgdGhlIGV4YWN0IGZvcm11bGFzOyB0aGUgZ2VuZXJhdGVkIHZpc3VhbCB3aWxsIHNlcnZlIG9ubHkgYXMgYSB0cmFwLXByZXZlbnRpb24gb3BlcmF0b3IgbWFwLiIsImNyYW0iOiJVc2UgdGhlIHZpc3VhbCB0byBtZW1vcml6ZSB0aGUgZXhhbSB0cmlnZ2VyOiB0aW1lLWRvbWFpbiBtdWx0aXBsaWNhdGlvbiBieSBuIG1lYW5zIGFwcGx5IFxcKC16XFxmcmFje2R9e2R6fVxcKSB0byBcXChYW3pdXFwpLiIsInN0YW5kYXJkIjoiVXNlIHRoZSB2aXN1YWwgdG8gY29ubmVjdCB0aGUgdGltZS1zaWRlIG9wZXJhdGlvbiwgdGhlIHotc2lkZSBkaWZmZXJlbnRpYXRpb24sIGFuZCB0aGUgc2lnbi9mYWN0b3IgY29ycmVjdGlvbi4iLCJ0b3Bfc2NvcmUiOiJVc2UgdGhlIHZpc3VhbCB0byBjYXRjaCBzdWJ0bGUgZXJyb3JzOiBkaWZmZXJlbnRpYXRpbmcgd2l0aCByZXNwZWN0IHRvIG4sIG9taXR0aW5nIFxcKC16XFwpLCBvciBhcHBseWluZyB0aGUgcHJvcGVydHkgdG8gdGhlIHdyb25nIHRyYW5zZm9ybS4ifQ==" style="display:none;"></div>%%KC_END%%
# z-Domain Differentiation Property (Multiplication by n)

> **Section Objective:** Learn how multiplying a causal sequence by n changes its z-transform.

---

## Concepts In This Section

- z-domain differentiation property
- why differentiation creates the factor n
- using the property to derive transform pairs
- common sign and factor mistakes

## 1. The Exam Trigger: Multiplication by n

This property activates whenever a time-domain sequence contains an **extra factor n** multiplying a known causal sequence.

If you already know the transform pair for \(x[n]u[n]\), then the transform of \(nx[n]u[n]\) is found by a two-step z-domain operation: **differentiate \(X[z]\) with respect to z**, then **multiply the result by \(-z\)**.

### KEY POINT

The differentiation is with respect to **z**, not with respect to n. This distinction is the most common source of errors on exams.

#### Minimal Example

If the known pair is \(a^n u[n] \Longleftrightarrow X[z]\), then the property immediately gives the transform of \(n a^n u[n]\) — no infinite sum required.

## 2. Why the property works

This is the **starting transform pair**. Here \(x[n]\) is the discrete-time sequence of interest, \(u[n]\) is the unit step function that enforces causality (the signal is zero for \(n < 0\)), and \(X[z]\) is its z-transform. The z-domain differentiation property always begins from this known pair before the factor n is introduced.

$$x[n]u[n]\Longleftrightarrow X[z]$$

## 3. Minimal worked example

This is the **central formula of the section** (Eq. 5.18). Read it as: multiplying the causal sequence by \(n\) in the time domain corresponds to applying the operator \(-z\frac{d}{dz}\) to \(X[z]\) in the z-domain.

**Symbol guide:**
- \(n\) — the time-domain index acting as a multiplier
- \(\frac{d}{dz}\) — differentiation with respect to \(z\), not \(n\)
- \(-z\) — a required prefactor; both the negative sign and the \(z\) are mandatory

**Exam trigger:** whenever you see \(n\) multiplying a known causal sequence, apply this property instead of recomputing the sum.

**Most common misuse:** writing only \(\frac{d}{dz}X[z]\) and forgetting the \(-z\) factor, or differentiating with respect to \(n\) instead of \(z\).

$$nx[n]u[n]\Longleftrightarrow -z\frac{d}{dz}X[z]\quad (5.18)$$

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="generate_image" data-teaching-role="trap_exposure" data-visual-use-b64="eyJjcmFtIjoiTWVtb3JpemUgdGhlIGZ1bGwgb3BlcmF0b3IgXFwoLXpcXGZyYWN7ZH17ZHp9XFwpLCBub3QganVzdCAnZGlmZmVyZW50aWF0ZScuIiwic3RhbmRhcmQiOiJGb2xsb3cgdGhlIHR3by1zdGVwIHotc2lkZSBwcm9jZXNzOiBkaWZmZXJlbnRpYXRlIFxcKFhbel1cXCksIHRoZW4gbXVsdGlwbHkgYnkgXFwoLXpcXCkuIiwidG9wX3Njb3JlIjoiVXNlIHRoZSB3YXJuaW5nIHN0cmlwIHRvIGNhdGNoIHdyb25nIHZhcmlhbnRzOiBtaXNzaW5nIFxcKC16XFwpLCB3cm9uZyBzaWduLCBvciBkaWZmZXJlbnRpYXRpbmcgd2l0aCByZXNwZWN0IHRvIG4uIn0=" style="display:none;"></div>%%KC_END%%
*🎨 Operator flow: time-domain multiplication by n maps to the z-domain operator \(-z\frac{d}{dz}\). The warning strip highlights the two most common exam errors.*
![Illustration](/generated/gptimage2-1781422991803-9371.png)

## 2. Why the Property Works

The mechanism is a single calculus step applied inside the z-transform sum.

When you differentiate \(z^{-n}\) with respect to \(z\), the power rule pulls down the exponent:

$$\frac{d}{dz}z^{-n} = -n\,z^{-n-1}$$

This introduces the factor \(n\) we want, but it also shifts the power by \(-1\) and introduces an unwanted negative sign. Multiplying by \(-z\) corrects both problems at once: the \(-1\) cancels the negative sign, and the extra \(z\) restores the power from \(z^{-n-1}\) back to \(z^{-n}\).

The result inside the sum becomes \(n\,z^{-n}\) — exactly the kernel needed for \(Z\{nx[n]u[n]\}\). The two math blocks below show this step-by-step.

$$X[z]=\sum_{n=0}^{\infty}x[n]z^{-n}$$
*This is the **unilateral z-transform** of the causal sequence \(x[n]u[n]\). The sum starts at \(n = 0\) because \(u[n] = 0\) for \(n < 0\), so all negative-index terms vanish. This is the expression we differentiate in the next step.*

$$-z\frac{d}{dz}X[z]=\sum_{n=0}^{\infty}nx[n]z^{-n}$$
*This line completes the proof. Differentiating each \(z^{-n}\) term inside the sum gives \(-n z^{-n-1}\). Multiplying through by \(-z\) then yields \(n z^{-n}\), restoring the original power and correcting the sign. The right-hand side is exactly \(\mathcal{Z}\{nx[n]u[n]\}\) by definition.

**Common trap:** stopping after differentiation leaves the power as \(z^{-n-1}\) and the sign as negative — both wrong. The \(-z\) multiplier is not optional; it is the step that makes the proof work.*

## 3. Minimal Worked Example

**Known pair:**

$$a^n u[n]\Longleftrightarrow \frac{z}{z-a}$$

**Goal:** find the z-transform of \(n a^n u[n]\).

**Step 1 — Differentiate \(X[z] = \frac{z}{z-a}\) with respect to \(z\):**

$$\frac{d}{dz}\frac{z}{z-a} = \frac{(z-a)\cdot 1 - z\cdot 1}{(z-a)^2} = -\frac{a}{(z-a)^2}$$

**Step 2 — Multiply by \(-z\):**

$$-z\cdot\left(-\frac{a}{(z-a)^2}\right) = \frac{az}{(z-a)^2}$$

**Final transform pair:**

$$n a^n u[n]\Longleftrightarrow \frac{az}{(z-a)^2}$$

### EXAM TIP

If an extra \(n\) appears in the time-domain signal, **do not recompute the infinite sum**. Apply Eq. (5.18) directly to the known transform pair. This saves time and avoids convergence errors.

---
**📌 Key Takeaways**
- Starting pair: \(x[n]u[n]\Longleftrightarrow X[z]\); the z-transform is defined by \(X[z]=\sum_{n=0}^{\infty}x[n]z^{-n}\).
- Core property (5.18): \(nx[n]u[n]\Longleftrightarrow -z\frac{d}{dz}X[z]\); both the \(-z\) factor and the sign are mandatory.
- Proof insight: \(\frac{d}{dz}z^{-n}=-nz^{-n-1}\); multiplying by \(-z\) restores the power to \(z^{-n}\) and fixes the sign.
- Worked result: \(na^nu[n]\Longleftrightarrow\frac{az}{(z-a)^2}\); differentiate first, then multiply by \(-z\).
- Top exam trap: writing \(\frac{d}{dz}X[z]\) alone — always include the full operator \(-z\frac{d}{dz}\).

*Next, you will use more z-transform properties to rewrite signals without recomputing sums from scratch.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InByb3BlcnR5X3RyaWdnZXIiLCJsYWJlbCI6IlJlY29nbml6aW5nIHdoZW4gdG8gdXNlIHotZG9tYWluIGRpZmZlcmVudGlhdGlvbiIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiWW91IGtub3cgXFwoeFtuXXVbbl1cXExvbmdsZWZ0cmlnaHRhcnJvdyBYW3pdXFwpLiBXaGljaCB0aW1lLWRvbWFpbiBwYXR0ZXJuIHNob3VsZCB0cmlnZ2VyIEVxLiAoNS4xOCk/Iiwib3B0aW9ucyI6WyJBLiBcXCh4W24tMV11W24tMV1cXCkiLCJCLiBcXChueFtuXXVbbl1cXCkiLCJDLiBcXCh4Wy1uXXVbLW5dXFwpIiwiRC4gXFwoeFtuXXVbbl0reVtuXXVbbl1cXCkiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJFcS4gKDUuMTgpIGlzIHNwZWNpZmljYWxseSB0aGUgbXVsdGlwbGljYXRpb24tYnktbiBwcm9wZXJ0eTogbXVsdGlwbHlpbmcgdGhlIGNhdXNhbCBzZXF1ZW5jZSBieSBcXChuXFwpIGNvcnJlc3BvbmRzIHRvIGFwcGx5aW5nIFxcKC16XFxmcmFje2R9e2R6fVxcKSB0byBcXChYW3pdXFwpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoaXMgaXMgYSB0aW1lLXNoaWZ0IHBhdHRlcm4sIG5vdCBtdWx0aXBsaWNhdGlvbiBieSBuLiIsIkMiOiJUaGlzIGlzIHJlbGF0ZWQgdG8gdGltZSByZXZlcnNhbCwgbm90IHotZG9tYWluIGRpZmZlcmVudGlhdGlvbi4iLCJEIjoiVGhpcyB1c2VzIGxpbmVhcml0eSwgbm90IHRoZSBtdWx0aXBsaWNhdGlvbi1ieS1uIHByb3BlcnR5LiJ9LCJoaW50IjoiTG9vayBmb3IgYW4gZXh0cmEgZmFjdG9yIFxcKG5cXCkgbXVsdGlwbHlpbmcgdGhlIG9yaWdpbmFsIHNlcXVlbmNlLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMV9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiQSB0cmFuc2Zvcm0gdGFibGUgZ2l2ZXMgXFwoYV5uIHVbbl1cXExvbmdsZWZ0cmlnaHRhcnJvdyBYW3pdXFwpLiBZb3UgbmVlZCB0aGUgdHJhbnNmb3JtIG9mIFxcKG4gYV5uIHVbbl1cXCkuIFdoYXQgaXMgdGhlIGZhc3Rlc3QgY29ycmVjdCBtZXRob2Q/Iiwib3B0aW9ucyI6WyJBLiBEaWZmZXJlbnRpYXRlIFxcKFhbel1cXCkgd2l0aCByZXNwZWN0IHRvIFxcKG5cXCkiLCJCLiBNdWx0aXBseSBcXChYW3pdXFwpIGJ5IFxcKG5cXCkiLCJDLiBDb21wdXRlIFxcKC16XFxmcmFje2R9e2R6fVhbel1cXCkiLCJELiBSZXBsYWNlIFxcKHpcXCkgYnkgXFwobnpcXCkgaW4gXFwoWFt6XVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkMiLCJleHBsYW5hdGlvbiI6IlRoZSBleHRyYSB0aW1lLWRvbWFpbiBmYWN0b3IgXFwoblxcKSBtYXBzIHRvIHRoZSB6LWRvbWFpbiBvcGVyYXRvciBcXCgtelxcZnJhY3tkfXtken1cXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhlIGRlcml2YXRpdmUgaXMgd2l0aCByZXNwZWN0IHRvIFxcKHpcXCksIG5vdCBcXChuXFwpLiIsIkIiOiJcXChuXFwpIGlzIGEgdGltZSBpbmRleCwgbm90IGEgei1kb21haW4gbXVsdGlwbGllciBvbiBcXChYW3pdXFwpLiIsIkQiOiJSZXBsYWNpbmcgXFwoelxcKSBieSBcXChuelxcKSBpcyBub3QgYSB2YWxpZCB6LXRyYW5zZm9ybSBwcm9wZXJ0eSBoZXJlLiJ9LCJoaW50IjoiVGhlIHotZG9tYWluIG9wZXJhdGlvbiBpcyBkaWZmZXJlbnRpYXRpb24gcGx1cyBhIHJlcXVpcmVkIFxcKC16XFwpIGZhY3Rvci4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6Im9wZXJhdG9yX2FjY3VyYWN5IiwibGFiZWwiOiJDb3JyZWN0IHotZG9tYWluIG9wZXJhdG9yIGFuZCBjb21tb24gbWlzdGFrZXMiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDJfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IklmIFxcKHhbbl11W25dXFxMb25nbGVmdHJpZ2h0YXJyb3cgWFt6XVxcKSwgd2hpY2ggZXhwcmVzc2lvbiBpcyB0aGUgY29ycmVjdCB6LXRyYW5zZm9ybSBvZiBcXChueFtuXXVbbl1cXCk/Iiwib3B0aW9ucyI6WyJBLiBcXChcXGZyYWN7ZH17ZHp9WFt6XVxcKSIsIkIuIFxcKC1cXGZyYWN7ZH17ZHp9WFt6XVxcKSIsIkMuIFxcKC16XFxmcmFje2R9e2R6fVhbel1cXCkiLCJELiBcXCh6XFxmcmFje2R9e2RufVhbel1cXCkiXSwiY29ycmVjdF9vcHRpb24iOiJDIiwiZXhwbGFuYXRpb24iOiJUaGUgZnVsbCBvcGVyYXRvciBpcyBcXCgtelxcZnJhY3tkfXtken1cXCkuIEJvdGggdGhlIG5lZ2F0aXZlIHNpZ24gYW5kIHRoZSBmYWN0b3IgXFwoelxcKSBhcmUgcmVxdWlyZWQuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhpcyBvbWl0cyBib3RoIHRoZSBuZWdhdGl2ZSBzaWduIGFuZCB0aGUgbXVsdGlwbHlpbmcgZmFjdG9yIFxcKHpcXCkuIiwiQiI6IlRoaXMgaW5jbHVkZXMgdGhlIG5lZ2F0aXZlIHNpZ24gYnV0IHN0aWxsIG9taXRzIHRoZSBmYWN0b3IgXFwoelxcKS4iLCJEIjoiVGhlIGRlcml2YXRpdmUgbXVzdCBiZSB3aXRoIHJlc3BlY3QgdG8gXFwoelxcKSwgbm90IFxcKG5cXCkuIn0sImhpbnQiOiJSZW1lbWJlciB0aGUgb3BlcmF0b3IgYXMgb25lIHVuaXQ6IFxcKC16XFxmcmFje2R9e2R6fVxcKS4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoiZ2VuZXJhdGVkX29wZXJhdG9yX2Zsb3dfdmlzdWFsIiwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AyX3EyIiwidHlwZSI6InNob3J0X2Fuc3dlciIsInN0ZW0iOiJBIGNsYXNzbWF0ZSB3cml0ZXMgXFwobnhbbl11W25dXFxMb25nbGVmdHJpZ2h0YXJyb3cgXFxmcmFje2R9e2R6fVhbel1cXCkuIEV4cGxhaW4gZXhhY3RseSB3aGF0IGlzIG1pc3Npbmcgb3Igd3JvbmcuIiwiaWRlYWxfYW5zd2VyIjoiVGhlIGNvcnJlY3Qgb3BlcmF0b3IgaXMgXFwoLXpcXGZyYWN7ZH17ZHp9WFt6XVxcKS4gVGhlIGNsYXNzbWF0ZSBmb3Jnb3QgdGhlIG5lZ2F0aXZlIHNpZ24gYW5kIHRoZSBmYWN0b3IgXFwoelxcKS4gRGlmZmVyZW50aWF0aW9uIGFsb25lIGdpdmVzIHRoZSB3cm9uZyBzaWduIGFuZCBsZWF2ZXMgdGhlIHBvd2VyIHNoaWZ0ZWQgYXMgXFwoel57LW4tMX1cXCkgaW4gdGhlIHByb29mOyBtdWx0aXBseWluZyBieSBcXCgtelxcKSBpcyB3aGF0IHJlc3RvcmVzIHRoZSBwb3dlciB0byBcXCh6Xnstbn1cXCkgYW5kIGNvcnJlY3RzIHRoZSBzaWduLiIsImdyYWRpbmdfcnVicmljIjpbIk11c3Qgc3RhdGUgdGhlIGNvcnJlY3Qgb3BlcmF0b3IgXFwoLXpcXGZyYWN7ZH17ZHp9WFt6XVxcKSIsIk11c3QgbWVudGlvbiB0aGUgbWlzc2luZyBuZWdhdGl2ZSBzaWduIiwiTXVzdCBtZW50aW9uIHRoZSBtaXNzaW5nIGZhY3RvciBcXCh6XFwpIiwiU3Ryb25nIGFuc3dlciBleHBsYWlucyB0aGF0IFxcKC16XFwpIGZpeGVzIHRoZSBzaWduIGFuZCBleHBvbmVudCBhZnRlciBkaWZmZXJlbnRpYXRpbmcgXFwoel57LW59XFwpIl0sImV4cGxhbmF0aW9uIjoiVGhpcyBjaGVja3Mgd2hldGhlciB0aGUgc3R1ZGVudCB1bmRlcnN0YW5kcyB0aGUgb3BlcmF0b3IsIG5vdCBqdXN0IHRoZSB3b3JkICdkaWZmZXJlbnRpYXRlJy4iLCJoaW50IjoiQXNrIHdoYXQgaGFwcGVucyB3aGVuIFxcKHpeey1ufVxcKSBpcyBkaWZmZXJlbnRpYXRlZCB3aXRoIHJlc3BlY3QgdG8gXFwoelxcKS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6InByb29mX21lY2hhbmlzbSIsImxhYmVsIjoiV2h5IGRpZmZlcmVudGlhdGluZyBjcmVhdGVzIG11bHRpcGxpY2F0aW9uIGJ5IG4iLCJpbXBvcnRhbmNlIjoibWVkaXVtIiwiZXhhbV93ZWlnaHQiOiJtZWRpdW0iLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AzX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGljaCBkZXJpdmF0aXZlIHN0ZXAgZXhwbGFpbnMgd2h5IHRoZSBmYWN0b3IgXFwoblxcKSBhcHBlYXJzPyIsIm9wdGlvbnMiOlsiQS4gXFwoXFxmcmFje2R9e2R6fXpeey1ufT0tbnpeey1uLTF9XFwpIiwiQi4gXFwoXFxmcmFje2R9e2R6fXpeey1ufT1uel57LW59XFwpIiwiQy4gXFwoXFxmcmFje2R9e2RufXpeey1ufT0tbnpeey1uLTF9XFwpIiwiRC4gXFwoXFxmcmFje2R9e2R6fXpeey1ufT16XnstbisxfVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IkRpZmZlcmVudGlhdGluZyBcXCh6Xnstbn1cXCkgd2l0aCByZXNwZWN0IHRvIFxcKHpcXCkgcHVsbHMgZG93biB0aGUgZXhwb25lbnQgXFwoLW5cXCksIGdpdmluZyBcXCgtbnpeey1uLTF9XFwpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IlRoaXMgaGFzIHRoZSB3cm9uZyBzaWduIGFuZCB3cm9uZyBleHBvbmVudCBhZnRlciBkaWZmZXJlbnRpYXRpb24uIiwiQyI6IlRoZSBwcm9wZXJ0eSBkaWZmZXJlbnRpYXRlcyB3aXRoIHJlc3BlY3QgdG8gXFwoelxcKSwgbm90IFxcKG5cXCkuIiwiRCI6IlRoaXMgZG9lcyBub3QgZm9sbG93IHRoZSBwb3dlciBydWxlLiJ9LCJoaW50IjoiVXNlIHRoZSBwb3dlciBydWxlOiBcXChcXGZyYWN7ZH17ZHp9el5rID0ga3pee2stMX1cXCkuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfSx7ImlkIjoid29ya2VkX2FwcGxpY2F0aW9uIiwibGFiZWwiOiJBcHBseWluZyB0aGUgcHJvcGVydHkgdG8gYSBrbm93biB0cmFuc2Zvcm0gcGFpciIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoxfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwNF9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiR2l2ZW4gXFwoYV5uIHVbbl1cXExvbmdsZWZ0cmlnaHRhcnJvdyBcXGZyYWN7en17ei1hfVxcKSwgd2hhdCBpcyB0aGUgei10cmFuc2Zvcm0gb2YgXFwobiBhXm4gdVtuXVxcKT8iLCJvcHRpb25zIjpbIkEuIFxcKFxcZnJhY3thfXsoei1hKV4yfVxcKSIsIkIuIFxcKFxcZnJhY3then17KHotYSleMn1cXCkiLCJDLiBcXCgtXFxmcmFje2F6fXsoei1hKV4yfVxcKSIsIkQuIFxcKFxcZnJhY3t6fXsoei1hKV4yfVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IkFwcGx5IFxcKC16XFxmcmFje2R9e2R6fVxcKSB0byBcXChcXGZyYWN7en17ei1hfVxcKS4gU2luY2UgXFwoXFxmcmFje2R9e2R6fVxcZnJhY3t6fXt6LWF9PS1cXGZyYWN7YX17KHotYSleMn1cXCksIG11bHRpcGx5aW5nIGJ5IFxcKC16XFwpIGdpdmVzIFxcKFxcZnJhY3then17KHotYSleMn1cXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhpcyBtaXNzZXMgdGhlIGZpbmFsIG11bHRpcGx5aW5nIGZhY3RvciBcXCh6XFwpLiIsIkMiOiJUaGlzIGtlZXBzIHRoZSB3cm9uZyBzaWduIGFmdGVyIG11bHRpcGx5aW5nIGJ5IFxcKC16XFwpLiIsIkQiOiJUaGlzIGxvc2VzIHRoZSBmYWN0b3IgXFwoYVxcKSBmcm9tIHRoZSBkZXJpdmF0aXZlLiJ9LCJoaW50IjoiRGlmZmVyZW50aWF0ZSBmaXJzdCwgdGhlbiBtdWx0aXBseSB0aGUgcmVzdWx0IGJ5IFxcKC16XFwpLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9XX1dfQ==" style="display:none;"></div>%%KC_END%%
