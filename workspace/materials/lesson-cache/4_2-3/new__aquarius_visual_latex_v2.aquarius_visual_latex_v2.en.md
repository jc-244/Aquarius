%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6InJlYWN0X2RlbW8iLCJyYXRpb25hbGUiOiJUaGlzIHNlY3Rpb24gaXMgbm90IGp1c3Qgc3ltYm9saWM6IHN0dWRlbnRzIG11c3QgY29ubmVjdCBkaWZmZXJlbnRpYXRpbmcgYSB0aW1lIHNpZ25hbCB0byBtdWx0aXBseWluZyBieSBzIGluIHRoZSBMYXBsYWNlIGRvbWFpbiBhbmQgc3VidHJhY3RpbmcgaW5pdGlhbC1jb25kaXRpb24gdGVybXMuIFRoZSBzdHJvbmdlc3QgdmlzdWFsIGFuY2hvciBpcyBhbiBpbnRlcmFjdGl2ZSBkZXJpdmF0aXZlIGxhZGRlciBzaG93aW5nIHgodCksIGR4L2R0LCBhbmQgZMKyeC9kdMKyLCBlc3BlY2lhbGx5IGJlY2F1c2UgRXhhbXBsZSA0LjkgdHVybnMgY29ybmVycyBhbmQganVtcHMgaW50byBpbXB1bHNlcy4gVGhlIHRleHRib29rIEZpZ3VyZSA0LjYgc2hvdWxkIGJlIHVzZWQgYXMgdGhlIGNhbm9uaWNhbCBleGFtLWZhY2luZyByZWZlcmVuY2Ugb24gdGhlIHdvcmtlZCBleGFtcGxlIHBhZ2UuIiwiY3JhbSI6IlVzZSB0aGUgdmlzdWFscyB0byByZWNvZ25pemUgdGhlIHRyaWdnZXI6IGRlcml2YXRpdmVzIGluIHRpbWUgYmVjb21lIHBvd2VycyBvZiBzIHBsdXMgMF4tIGNvcnJlY3Rpb24gdGVybXMuIiwic3RhbmRhcmQiOiJVc2UgdGhlIGRlbW8gdG8gY29ubmVjdCBzaWduYWwgc2hhcGUsIHNsb3BlIGNoYW5nZXMsIGltcHVsc2VzLCBhbmQgdGhlIExhcGxhY2UtZG9tYWluIGZvcm11bGEuIiwidG9wX3Njb3JlIjoiVXNlIHRoZSB2aXN1YWxzIHRvIGNhdGNoIHRyYXBzOiBmb3JnZXR0aW5nIGluaXRpYWwgdmFsdWVzLCB1c2luZyAwXisgaW5zdGVhZCBvZiAwXi0sIGFuZCBtaXNzaW5nIGltcHVsc2VzIGF0IGp1bXBzLiJ9" style="display:none;"></div>%%KC_END%%
# The Time-Differentiation Property

> **Section Objective:** Learn how differentiating a time signal changes its Laplace transform, including the required initial-condition terms.

---

## Concepts In This Section

- First-derivative property
- nth-derivative property
- Initial values at \(0^-\)
- Impulse derivatives in piecewise-linear signals
- Example 4.9 strategy

## 1. First derivative: multiply by s, then correct the start value

If \(x(t)\) is a time-domain signal with Laplace transform \(X(s)\), then differentiating \(x(t)\) in time is **mostly** equivalent to multiplying \(X(s)\) by \(s\) in the s-domain — but not exactly.

The value of \(x(t)\) just before the origin, written \(x(0^-)\), must be **subtracted** as a correction term.

**Symbol guide:**
- \(x(t)\): the original time-domain signal
- \(X(s)\): its Laplace transform
- \(s\): the complex frequency variable
- \(dx(t)/dt\): the time derivative of \(x(t)\)
- \(x(0^-)\): the signal value just before \(t = 0\)

**When to use it:** Any time you see \(\mathcal{L}\{dx/dt\}\), a differential equation, or a slope-based signal problem.

#### Exam Trigger
Expressions such as \(\mathcal{L}\{dx/dt\}\), differential equations, or slope-based signal problems.

#### Common Misuse
Writing only \(sX(s)\) and forgetting the initial value term. If \(x(0^-) = 0\), the formula reduces to \(sX(s)\) — but this simplification must be verified, not assumed.

$$\frac{dx(t)}{dt}\Longleftrightarrow sX(s)-x(0^-)$$

## 2. nth derivative: every derivative adds one initial-condition term

Eq. (4.15) is the repeated version of the first-derivative property. For an \(n\)th-order derivative, the Laplace transform begins with \(s^n X(s)\) and then subtracts \(n\) correction terms.

**Symbol guide:**
- \(n\): the order of the derivative
- \(k\): the summation index, running from 1 to \(n\)
- \(x^{(k-1)}(0^-)\): the \((k-1)\)th derivative of \(x(t)\) evaluated just before \(t=0\)
- \(s^{n-k}\): the power of \(s\) multiplying each initial-condition term

**Reading pattern:** Start with \(s^n X(s)\), then subtract terms involving \(x(0^-)\), \(x'(0^-)\), \(\ldots\), \(x^{(n-1)}(0^-)\), each multiplied by a descending power of \(s\).

**Short \(n=2\) example:** The second derivative gives

$$s^2 X(s) - s\,x(0^-) - x'(0^-)$$

**When to use it:** Transforming higher-order differential equations or repeatedly differentiated signals.

#### Exam Trigger
\(d^2x/dt^2\), \(d^3x/dt^3\), or any \(n\)th derivative in a transform problem.

#### Most Common Misuse
Using values at \(0^+\) instead of \(0^-\). Always use \(0^-\) unless the problem explicitly reformulates the signal.

$$\frac{d^n x(t)}{dt^n}\Longleftrightarrow s^nX(s)-\sum_{k=1}^{n}s^{n-k}x^{(k-1)}(0^-)$$

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="interactive_demo" data-teaching-role="concept_anchor" data-visual-use-b64="eyJjcmFtIjoiTGV0IHN0dWRlbnRzIHNlZSB0aGF0IGVhY2ggdGltZSBkZXJpdmF0aXZlIHNpbXBsaWZpZXMgcGllY2V3aXNlLWxpbmVhciBzaGFwZXMgaW50byBzbG9wZXMgYW5kIGltcHVsc2VzLiIsInN0YW5kYXJkIjoiQ29ubmVjdCB0aGUgdG9wIHNpZ25hbCB4KHQpIHRvIGl0cyBmaXJzdCBhbmQgc2Vjb25kIGRlcml2YXRpdmVzIGJlZm9yZSBhcHBseWluZyB0aGUgZm9ybXVsYS4iLCJ0b3Bfc2NvcmUiOiJIaWdobGlnaHQgZXhhY3RseSB3aGVyZSBpbXB1bHNlcyBhcHBlYXIgYW5kIHdoeSB0aGVpciBzdHJlbmd0aHMgZXF1YWwganVtcCBzaXplcy4ifQ==" style="display:none;"></div><div class="kc-interactive-demo" data-demo-b64="eyJ0eXBlIjoiaW50ZXJhY3RpdmVfZGVtbyIsInRvb2wiOiJyZWFjdF9jYW52YXMiLCJ0ZWFjaGluZ19yb2xlIjoiY29uY2VwdF9hbmNob3IiLCJtb2RlX3NwZWNpZmljX3Zpc3VhbF91c2UiOnsiY3JhbSI6IkxldCBzdHVkZW50cyBzZWUgdGhhdCBlYWNoIHRpbWUgZGVyaXZhdGl2ZSBzaW1wbGlmaWVzIHBpZWNld2lzZS1saW5lYXIgc2hhcGVzIGludG8gc2xvcGVzIGFuZCBpbXB1bHNlcy4iLCJzdGFuZGFyZCI6IkNvbm5lY3QgdGhlIHRvcCBzaWduYWwgeCh0KSB0byBpdHMgZmlyc3QgYW5kIHNlY29uZCBkZXJpdmF0aXZlcyBiZWZvcmUgYXBwbHlpbmcgdGhlIGZvcm11bGEuIiwidG9wX3Njb3JlIjoiSGlnaGxpZ2h0IGV4YWN0bHkgd2hlcmUgaW1wdWxzZXMgYXBwZWFyIGFuZCB3aHkgdGhlaXIgc3RyZW5ndGhzIGVxdWFsIGp1bXAgc2l6ZXMuIn0sInRpdGxlIjoiRGVyaXZhdGl2ZSBsYWRkZXIgZm9yIGEgcGllY2V3aXNlLWxpbmVhciBzaWduYWwiLCJzcGVjIjp7ImxheW91dCI6InRocmVlX3N0YWNrZWRfcGxvdHNfc2hhcmVkX3RpbWVfYXhpcyIsInBsb3RzIjpbeyJpZCI6Inh0IiwibGFiZWwiOiJ4KHQpIiwiY29sb3IiOiJuYXZ5IiwiZGVzY3JpcHRpb24iOiJQaWVjZXdpc2UtbGluZWFyOiByaXNlcyBmcm9tIDAgdG8gMiBsaW5lYXJseSBvdmVyIDAgPCB0IDwgMiwgZmFsbHMgZnJvbSAyIHRvIDAgbGluZWFybHkgb3ZlciAyIDwgdCA8IDMsIHN0YXlzIDAgZWxzZXdoZXJlLiIsInNlZ21lbnRzIjpbeyJ0X3N0YXJ0IjowLCJ0X2VuZCI6MiwidHlwZSI6ImxpbmVhciIsInlfc3RhcnQiOjAsInlfZW5kIjoyfSx7InRfc3RhcnQiOjIsInRfZW5kIjozLCJ0eXBlIjoibGluZWFyIiwieV9zdGFydCI6MiwieV9lbmQiOjB9LHsidF9zdGFydCI6MywidF9lbmQiOjUsInR5cGUiOiJjb25zdGFudCIsInkiOjB9XX0seyJpZCI6ImR4ZHQiLCJsYWJlbCI6ImR4L2R0IiwiY29sb3IiOiJtdXRlZF90ZWFsIiwiZGVzY3JpcHRpb24iOiJQaWVjZXdpc2UtY29uc3RhbnQ6ICsxIG9uIDAgPCB0IDwgMiwgLTIgb24gMiA8IHQgPCAzLCAwIGVsc2V3aGVyZS4iLCJzZWdtZW50cyI6W3sidF9zdGFydCI6MCwidF9lbmQiOjIsInR5cGUiOiJjb25zdGFudCIsInkiOjF9LHsidF9zdGFydCI6MiwidF9lbmQiOjMsInR5cGUiOiJjb25zdGFudCIsInkiOi0yfSx7InRfc3RhcnQiOjMsInRfZW5kIjo1LCJ0eXBlIjoiY29uc3RhbnQiLCJ5IjowfV19LHsiaWQiOiJkMnhkdDIiLCJsYWJlbCI6ImTCsngvZHTCsiIsImNvbG9yIjoibXV0ZWRfcmVkIiwiZGVzY3JpcHRpb24iOiJJbXB1bHNlczogKzEgYXQgdD0wLCAtMyBhdCB0PTIsICsyIGF0IHQ9My4iLCJpbXB1bHNlcyI6W3sidCI6MCwic3RyZW5ndGgiOjF9LHsidCI6Miwic3RyZW5ndGgiOi0zfSx7InQiOjMsInN0cmVuZ3RoIjoyfV19XSwiY2hlY2tib3hlcyI6W3siaWQiOiJzaG93X3Nsb3BlcyIsImxhYmVsIjoiU2hvdyBzbG9wZXMiLCJhY3Rpb24iOiJhbm5vdGF0ZSBzbG9wZSB2YWx1ZXMgKCsxLCAtMikgb24gdGhlIGR4L2R0IHBsb3QifSx7ImlkIjoic2hvd19pbXB1bHNlX3N0cmVuZ3RocyIsImxhYmVsIjoiU2hvdyBpbXB1bHNlIHN0cmVuZ3RocyIsImFjdGlvbiI6ImFubm90YXRlICsxLCAtMywgKzIgbmV4dCB0byBlYWNoIGltcHVsc2UgYXJyb3cgb24gdGhlIGTCsngvZHTCsiBwbG90In0seyJpZCI6InNob3dfbGFwbGFjZV9yZXN1bHQiLCJsYWJlbCI6IlNob3cgTGFwbGFjZSByZXN1bHQiLCJhY3Rpb24iOiJkaXNwbGF5IHRoZSBleHByZXNzaW9uIGTCsngvZHTCsiA9IM60KHQpIOKIkiAzzrQodOKIkjIpICsgMs60KHTiiJIzKSBiZWxvdyB0aGUgYm90dG9tIHBsb3QifV0sIm5vdGUiOiJBIGp1bXAgaW4gYSBkZXJpdmF0aXZlIGNyZWF0ZXMgYW4gaW1wdWxzZSB3aG9zZSBzdHJlbmd0aCBlcXVhbHMgdGhlIGp1bXAgc2l6ZS4ifX0="></div>%%KC_END%%


## 3. Example 4.9: differentiate until the signal becomes impulses

The piecewise-linear \(x(t)\) is difficult to transform directly. After differentiating **twice**, the result is a short sum of impulses — which are trivial to transform.

**Symbol guide:**
- \(\delta(t)\): unit impulse at \(t = 0\)
- \(\delta(t-2)\): unit impulse shifted to \(t = 2\)
- \(\delta(t-3)\): unit impulse shifted to \(t = 3\)

**Where the signs come from:**

| Location | Slope before | Slope after | Jump (after − before) | Impulse |
|----------|-------------|-------------|----------------------|---------|
| \(t=0\) | \(0\) | \(+1\) | \(+1\) | \(+\delta(t)\) |
| \(t=2\) | \(+1\) | \(-2\) | \(-3\) | \(-3\delta(t-2)\) |
| \(t=3\) | \(-2\) | \(0\) | \(+2\) | \(+2\delta(t-3)\) |

#### Exam Trigger
Any piecewise-linear signal with corners or ramps — differentiate until impulses appear.

#### Common Misuse
Placing impulses at flat intervals rather than at the exact points where the slope **jumps**.

$$\frac{d^2x(t)}{dt^2}=\delta(t)-3\delta(t-2)+2\delta(t-3)$$

$$X(s)=\frac{1}{s^2}\left(1-3e^{-2s}+2e^{-3s}\right)$$
***Recovering \(X(s)\) from the impulse equation**

Each impulse transforms cleanly: \(\delta(t) \mapsto 1\) and \(\delta(t-a) \mapsto e^{-as}\). So the second-derivative equation becomes:

$$s^2 X(s) = 1 - 3e^{-2s} + 2e^{-3s}$$

Because \(x(0^-) = 0\) and \(x'(0^-) = 0\) for this signal, Eq. (4.15) contributes no correction terms — the left side is simply \(s^2 X(s)\).

Solving for \(X(s)\) divides the entire right side by \(s^2\).

**Symbol guide:**
- \(e^{-2s}\): time-shift factor corresponding to a delay of 2 seconds
- \(e^{-3s}\): time-shift factor corresponding to a delay of 3 seconds

#### Exam Trigger
After using a second derivative, always divide by \(s^2\) to recover \(X(s)\).

#### Common Misuse
Stopping at \(s^2 X(s) = \ldots\) and reporting that as the answer. You must isolate \(X(s)\).*

---
**📌 Key Takeaways**
- First-derivative property: \(\frac{dx(t)}{dt}\Longleftrightarrow sX(s)-x(0^-)\) — multiply by \(s\), subtract the initial value at \(0^-\).
- Eq. (4.15) nth-derivative: \(\frac{d^n x(t)}{dt^n}\Longleftrightarrow s^nX(s)-\sum_{k=1}^{n}s^{n-k}x^{(k-1)}(0^-)\) — one correction term per derivative order.
- Piecewise-linear signals: differentiate twice to get impulses; impulse strength equals the slope jump, giving \(\frac{d^2x(t)}{dt^2}=\delta(t)-3\delta(t-2)+2\delta(t-3)\).
- Recover \(X(s)\) by dividing: \(X(s)=\frac{1}{s^2}(1-3e^{-2s}+2e^{-3s})\) — never stop at \(s^2 X(s)\).

*Next, we use the matching time-integration property to handle integrals in the time domain.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NywicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo2LCJtYXgiOjh9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6ImZpcnN0X2Rlcml2YXRpdmVfcHJvcGVydHkiLCJsYWJlbCI6IkZpcnN0LWRlcml2YXRpdmUgTGFwbGFjZSBwcm9wZXJ0eSIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiSWYgXFwoeCh0KSBcXExvbmdsZWZ0cmlnaHRhcnJvdyBYKHMpXFwpLCB3aGF0IGlzIHRoZSBjb3JyZWN0IExhcGxhY2UtZG9tYWluIGV4cHJlc3Npb24gZm9yIFxcKGR4KHQpL2R0XFwpPyIsIm9wdGlvbnMiOlsiQS4gXFwoc1gocylcXCkiLCJCLiBcXChzWChzKS14KDBeLSlcXCkiLCJDLiBcXChYKHMpLXN4KDBeLSlcXCkiLCJELiBcXChzWChzKSt4KDBeLSlcXCkiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJUaGUgZGVyaXZhdGl2ZSBwcm9wZXJ0eSBpbmNsdWRlcyB0aGUgaW5pdGlhbCB2YWx1ZSBjb3JyZWN0aW9uOiBcXChkeCh0KS9kdCBcXExvbmdsZWZ0cmlnaHRhcnJvdyBzWChzKS14KDBeLSlcXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhpcyBmb3JnZXRzIHRoZSByZXF1aXJlZCBpbml0aWFsIHZhbHVlIHRlcm0uIiwiQyI6IlRoZSBtdWx0aXBsaWNhdGlvbiBieSBcXChzXFwpIGJlbG9uZ3Mgb24gXFwoWChzKVxcKSwgbm90IG9uIFxcKHgoMF4tKVxcKS4iLCJEIjoiVGhlIGluaXRpYWwgdmFsdWUgdGVybSBpcyBzdWJ0cmFjdGVkLCBub3QgYWRkZWQuIn0sImhpbnQiOiJEaWZmZXJlbnRpYXRlIGluIHRpbWU6IG11bHRpcGx5IGJ5IFxcKHNcXCksIHRoZW4gc3VidHJhY3QgdGhlIHZhbHVlIGp1c3QgYmVmb3JlIHplcm8uIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AxX3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJBIHN0dWRlbnQgd3JpdGVzIFxcKFxcbWF0aGNhbHtMfVxce2R4L2R0XFx9ID0gc1gocylcXCkgZm9yIGV2ZXJ5IHNpZ25hbC4gV2hhdCBpcyB0aGUgcHJlY2lzZSBwcm9ibGVtPyIsIm9wdGlvbnMiOlsiQS4gSXQgaXMgYWx3YXlzIHdyb25nIGJlY2F1c2UgZGVyaXZhdGl2ZXMgY2Fubm90IGJlIHRyYW5zZm9ybWVkLiIsIkIuIEl0IGlzIG1pc3NpbmcgdGhlIGNvcnJlY3Rpb24gdGVybSBcXCh4KDBeLSlcXCksIHVubGVzcyBcXCh4KDBeLSk9MFxcKS4iLCJDLiBJdCBzaG91bGQgdXNlIFxcKHgoMF4rKVxcKSBpbnN0ZWFkIG9mIFxcKFgocylcXCkuIiwiRC4gSXQgc2hvdWxkIGRpdmlkZSBcXChYKHMpXFwpIGJ5IFxcKHNcXCkuIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiVGhlIHNob3J0Y3V0IFxcKFxcbWF0aGNhbHtMfVxce2R4L2R0XFx9ID0gc1gocylcXCkgaXMgdmFsaWQgb25seSB3aGVuIHRoZSBpbml0aWFsIHZhbHVlIFxcKHgoMF4tKVxcKSBpcyB6ZXJvLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IkRlcml2YXRpdmVzIGNhbiBiZSB0cmFuc2Zvcm1lZCB1c2luZyB0aGUgdGltZS1kaWZmZXJlbnRpYXRpb24gcHJvcGVydHkuIiwiQyI6IlRoZSB0ZXh0Ym9vayBwcm9wZXJ0eSB1c2VzIFxcKDBeLVxcKSBpbml0aWFsIHZhbHVlcy4iLCJEIjoiRGl2aWRpbmcgYnkgXFwoc1xcKSBpcyBhc3NvY2lhdGVkIHdpdGggaW50ZWdyYXRpb24sIG5vdCBkaWZmZXJlbnRpYXRpb24uIn0sImhpbnQiOiJBc2sgd2hhdCBoYXBwZW5zIGF0IHRoZSBsb3dlciBsaW1pdCBvZiB0aGUgdW5pbGF0ZXJhbCBMYXBsYWNlIGludGVncmFsLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoibnRoX2Rlcml2YXRpdmVfcHJvcGVydHkiLCJsYWJlbCI6Im50aC1kZXJpdmF0aXZlIGZvcm11bGEgYW5kIGluaXRpYWwgY29uZGl0aW9ucyIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMl9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiVXNpbmcgRXEuICg0LjE1KSwgd2hhdCBpcyB0aGUgTGFwbGFjZSB0cmFuc2Zvcm0gb2YgXFwoZF4yeCh0KS9kdF4yXFwpPyIsIm9wdGlvbnMiOlsiQS4gXFwoc14yWChzKS14KDBeLSkteCcoMF4tKVxcKSIsIkIuIFxcKHNeMlgocyktc3goMF4tKS14JygwXi0pXFwpIiwiQy4gXFwoc1gocyktc3goMF4tKS14JygwXi0pXFwpIiwiRC4gXFwoc14yWChzKStzeCgwXispK3gnKDBeKylcXCkiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJGb3IgdGhlIHNlY29uZCBkZXJpdmF0aXZlLCB0aGUgY29ycmVjdGlvbiB0ZXJtcyBhcmUgXFwoc3goMF4tKVxcKSBhbmQgXFwoeCcoMF4tKVxcKSwgYm90aCBzdWJ0cmFjdGVkLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoZSBcXCh4KDBeLSlcXCkgdGVybSBtdXN0IGJlIG11bHRpcGxpZWQgYnkgXFwoc1xcKS4iLCJDIjoiVGhlIGxlYWRpbmcgdGVybSBtdXN0IGJlIFxcKHNeMlgocylcXCksIG5vdCBcXChzWChzKVxcKS4iLCJEIjoiVGhlIGluaXRpYWwtY29uZGl0aW9uIHRlcm1zIGFyZSBzdWJ0cmFjdGVkLCBub3QgYWRkZWQsIGFuZCBtdXN0IHVzZSBcXCgwXi1cXCkgbm90IFxcKDBeK1xcKS4ifSwiaGludCI6IkZvciB0aGUgc2Vjb25kIGRlcml2YXRpdmUsIHN0YXJ0IHdpdGggXFwoc14yWChzKVxcKSwgdGhlbiBkZXNjZW5kIHBvd2VycyBvZiBcXChzXFwpLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMl9xMiIsInR5cGUiOiJzaG9ydF9hbnN3ZXIiLCJzdGVtIjoiRm9yIGEgdGhpcmQgZGVyaXZhdGl2ZSwgd2hpY2ggaW5pdGlhbCB2YWx1ZXMgbXVzdCBhcHBlYXIgaW4gdGhlIGNvcnJlY3Rpb24gdGVybXM/IiwiaWRlYWxfYW5zd2VyIjoiVGhlIGNvcnJlY3Rpb24gdGVybXMgbXVzdCBpbnZvbHZlIFxcKHgoMF4tKVxcKSwgXFwoeCcoMF4tKVxcKSwgYW5kIFxcKHgnJygwXi0pXFwpLCB3aXRoIGRlc2NlbmRpbmcgcG93ZXJzIG9mIFxcKHNcXCkuIiwiZ3JhZGluZ19ydWJyaWMiOlsiTXVzdCBsaXN0IFxcKHgoMF4tKVxcKSIsIk11c3QgbGlzdCBcXCh4JygwXi0pXFwpIiwiTXVzdCBsaXN0IFxcKHgnJygwXi0pXFwpIiwiTXVzdCBtZW50aW9uIGRlc2NlbmRpbmcgcG93ZXJzIG9mIFxcKHNcXCkgb3IgY29ycmVjdGx5IGltcGx5IHRoZSBFcS4gKDQuMTUpIHBhdHRlcm4iXSwiZXhwbGFuYXRpb24iOiJBIHRoaXJkIGRlcml2YXRpdmUgbmVlZHMgdGhyZWUgaW5pdGlhbC1jb25kaXRpb24gdmFsdWVzLCB1cCB0aHJvdWdoIHRoZSBzZWNvbmQgZGVyaXZhdGl2ZSBhdCBcXCgwXi1cXCkuIiwiaGludCI6IkFuIFxcKG5cXCl0aCBkZXJpdmF0aXZlIHVzZXMgaW5pdGlhbCB2YWx1ZXMgZnJvbSBvcmRlciAwIHRocm91Z2ggXFwobi0xXFwpLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoicGllY2V3aXNlX2xpbmVhcl9pbXB1bHNlcyIsImxhYmVsIjoiSW1wdWxzZXMgY3JlYXRlZCBieSBzbG9wZSBqdW1wcyIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJtZWRpdW0iLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AzX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJJbiBFeGFtcGxlIDQuOSwgdGhlIHNsb3BlIG9mIFxcKHgodClcXCkgY2hhbmdlcyBmcm9tIFxcKCsxXFwpIHRvIFxcKC0yXFwpIGF0IFxcKHQ9MlxcKS4gV2hhdCBpbXB1bHNlIGFwcGVhcnMgaW4gXFwoZF4yeCh0KS9kdF4yXFwpIGF0IFxcKHQ9MlxcKT8iLCJvcHRpb25zIjpbIkEuIFxcKCszXFxkZWx0YSh0LTIpXFwpIiwiQi4gXFwoLTNcXGRlbHRhKHQtMilcXCkiLCJDLiBcXCgtMlxcZGVsdGEodC0yKVxcKSIsIkQuIFxcKCtcXGRlbHRhKHQtMilcXCkiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJJbXB1bHNlIHN0cmVuZ3RoIGVxdWFscyB0aGUganVtcCBpbiBzbG9wZTogZmluYWwgc2xvcGUgbWludXMgaW5pdGlhbCBzbG9wZSBcXCg9IC0yLSgrMSkgPSAtM1xcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGlzIGhhcyB0aGUgY29ycmVjdCBtYWduaXR1ZGUgYnV0IHRoZSB3cm9uZyBzaWduLiIsIkMiOiJUaGlzIHVzZXMgdGhlIG5ldyBzbG9wZSB2YWx1ZSwgbm90IHRoZSBzbG9wZSBqdW1wLiIsIkQiOiJUaGlzIHVzZXMgdGhlIG9sZCBzbG9wZSB2YWx1ZSwgbm90IHRoZSBzbG9wZSBqdW1wLiJ9LCJoaW50IjoiSW1wdWxzZSBzdHJlbmd0aCA9IG5ldyBzbG9wZSBcXCgtXFwpIG9sZCBzbG9wZS4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoiZGVtb19vYnNlcnZhdGlvbl9jaGVjayIsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwM19xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiTG9va2luZyBhdCB0aGUgZGVyaXZhdGl2ZS1sYWRkZXIgdmlzdWFsLCB3aHkgZG9lcyBcXChkXjJ4KHQpL2R0XjJcXCkgY29udGFpbiBpbXB1bHNlcyBhdCBcXCh0PTBcXCksIFxcKHQ9MlxcKSwgYW5kIFxcKHQ9M1xcKT8iLCJvcHRpb25zIjpbIkEuIEJlY2F1c2UgXFwoeCh0KVxcKSBpcyBub256ZXJvIGF0IHRob3NlIHRpbWVzLiIsIkIuIEJlY2F1c2UgXFwoZHgvZHRcXCkganVtcHMgYXQgdGhvc2UgdGltZXMuIiwiQy4gQmVjYXVzZSBcXChYKHMpXFwpIGhhcyBleHBvbmVudGlhbCB0ZXJtcy4iLCJELiBCZWNhdXNlIGV2ZXJ5IHBvaW50IG9uIGEgcmFtcCBjcmVhdGVzIGFuIGltcHVsc2UuIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiVGhlIHNlY29uZCBkZXJpdmF0aXZlIGNvbnRhaW5zIGltcHVsc2VzIHdoZXJldmVyIHRoZSBmaXJzdCBkZXJpdmF0aXZlIGhhcyBqdW1wIGRpc2NvbnRpbnVpdGllcy4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJCZWluZyBub256ZXJvIGRvZXMgbm90IGJ5IGl0c2VsZiBjcmVhdGUgYW4gaW1wdWxzZSBpbiB0aGUgZGVyaXZhdGl2ZS4iLCJDIjoiVGhlIGV4cG9uZW50aWFscyBhcmUgdGhlIExhcGxhY2UtZG9tYWluIHJlc3VsdCBvZiB0aW1lIHNoaWZ0cywgbm90IHRoZSBjYXVzZSBvZiBpbXB1bHNlcy4iLCJEIjoiQSByYW1wIGhhcyBjb25zdGFudCBzbG9wZTsgaW1wdWxzZXMgb2NjdXIgb25seSBhdCBzbG9wZSBqdW1wcywgbm90IHRocm91Z2hvdXQgdGhlIHJhbXAuIn0sImhpbnQiOiJMb29rIGF0IHdoZXJlIHRoZSBtaWRkbGUgcGxvdCAoXFwoZHgvZHRcXCkpIGNoYW5nZXMgdmFsdWUgc3VkZGVubHkuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6InZpc3VhbF9vcl9kZW1vX29ic2VydmF0aW9uX2NoZWNrIiwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJleGFtcGxlX3RyYW5zZm9ybV9zdHJhdGVneSIsImxhYmVsIjoiUmVjb3ZlcmluZyBYKHMpIGFmdGVyIGRpZmZlcmVudGlhdGluZyIsImltcG9ydGFuY2UiOiJtZWRpdW0iLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3A0X3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJJbiBFeGFtcGxlIDQuOSwgYWZ0ZXIgdHJhbnNmb3JtaW5nIHRoZSBzZWNvbmQgZGVyaXZhdGl2ZSB3ZSBnZXQgXFwoc14yWChzKT0xLTNlXnstMnN9KzJlXnstM3N9XFwpLiBXaGF0IGlzIFxcKFgocylcXCk/Iiwib3B0aW9ucyI6WyJBLiBcXChzXjIoMS0zZV57LTJzfSsyZV57LTNzfSlcXCkiLCJCLiBcXChcXGZyYWN7MX17c14yfSgxLTNlXnstMnN9KzJlXnstM3N9KVxcKSIsIkMuIFxcKFxcZnJhY3sxfXtzfSgxLTNlXnstMnN9KzJlXnstM3N9KVxcKSIsIkQuIFxcKDEtM2Veey0yc30rMmVeey0zc31cXCkiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJCZWNhdXNlIHRoZSBlcXVhdGlvbiBjb250YWlucyBcXChzXjJYKHMpXFwpLCBzb2x2aW5nIGZvciBcXChYKHMpXFwpIHJlcXVpcmVzIGRpdmlkaW5nIHRoZSBlbnRpcmUgcmlnaHQgc2lkZSBieSBcXChzXjJcXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhpcyBtdWx0aXBsaWVzIGJ5IFxcKHNeMlxcKSBpbnN0ZWFkIG9mIGRpdmlkaW5nLiIsIkMiOiJUd28gZGlmZmVyZW50aWF0aW9ucyB3ZXJlIHVzZWQsIHNvIHRoZSBmYWN0b3IgaXMgXFwoc14yXFwpLCBub3QgXFwoc1xcKS4iLCJEIjoiVGhpcyBsZWF2ZXMgdGhlIGV4cHJlc3Npb24gYXMgXFwoc14yWChzKVxcKSwgbm90IFxcKFgocylcXCkuIn0sImhpbnQiOiJEbyBub3Qgc3RvcCBhdCBcXChzXjJYKHMpXFwpOyBpc29sYXRlIFxcKFgocylcXCkgYnkgZGl2aWRpbmcgYm90aCBzaWRlcyBieSBcXChzXjJcXCkuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfV19" style="display:none;"></div>%%KC_END%%
