%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6ImdlbmVyYXRlZF9pbWFnZSIsInJhdGlvbmFsZSI6IkFnZW50IEEgSlNPTiBmYWlsZWQsIHNvIHJlbHkgb24gb25lIGdlbmVyYXRlZCBncHRpbWFnZTIgdGVhY2hpbmcgdmlzdWFsIGluc3RlYWQgb2YgcmV0dXJuaW5nIGEgdGV4dC1vbmx5IGxlc3Nvbi4iLCJjcmFtIjoiVXNlIHRoZSB2aXN1YWwgdG8gcmVjb2duaXplIHRoZSBleGFtIHBhdHRlcm4gcXVpY2tseS4iLCJzdGFuZGFyZCI6IlVzZSB0aGUgdmlzdWFsIHRvIGNsYXJpZnkgdGhlIGNvcmUgY29uY2VwdCB3aXRoIGEgc2luZ2xlIGNsZWFyIHBhdGguIiwidG9wX3Njb3JlIjoiVXNlIHRoZSB2aXN1YWwgdG8gaGlnaGxpZ2h0IHN1YnRsZSBkaXN0aW5jdGlvbnMsIHRyYXBzLCBvciB2YXJpYW50cy4ifQ==" style="display:none;"></div>%%KC_END%%
## Overview

> **Objective:** Build a reliable reference toolkit of mathematical formulas that appear repeatedly in signals and systems work — and know which ones the exam tests most.

Section B.8 is a compact appendix that collects the most frequently used mathematical facts from several areas: constants, complex numbers, series, trigonometric identities, derivatives, and integrals. Rather than deriving each result from scratch, the goal is to recognize these formulas on sight, know when to apply them, and avoid the common traps (such as confusing the imaginary part with the imaginary term, or misremembering a sign in a trig identity). After working through this section, you will be able to quickly locate and correctly apply the right formula in a calculation.

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="generate_image" data-teaching-role="concept_anchor" data-visual-use-b64="eyJjcmFtIjoiU2NhbiB0aGUgZml2ZSBib3hlcyB0byBpbnN0YW50bHkgbG9jYXRlIHdoaWNoIGZvcm11bGEgZ3JvdXAgYXBwbGllcyB0byB5b3VyIHByb2JsZW0uIiwic3RhbmRhcmQiOiJVc2UgdGhlIHZpc3VhbCB0byB1bmRlcnN0YW5kIGhvdyB0aGUgYXBwZW5kaXggaXMgb3JnYW5pemVkIGFuZCB3aGljaCBmb3JtdWxhIGJlbG9uZ3MgdG8gd2hpY2ggY2F0ZWdvcnkuIiwidG9wX3Njb3JlIjoiTm90aWNlIHRoZSBzdHJ1Y3R1cmFsIHBhdHRlcm5zIOKAlCBlLmcuLCBob3cgRXVsZXIncyBmb3JtdWxhIGNvbm5lY3RzIHRoZSBjb21wbGV4LW51bWJlcnMgYm94IHRvIHRoZSB0cmlnLWlkZW50aXRpZXMgYm94IOKAlCBhbmQgYW50aWNpcGF0ZSBjcm9zcy10b3BpYyBleGFtIHF1ZXN0aW9ucy4ifQ==" style="display:none;"></div>%%KC_END%%
*🎨 The five major formula groups in B.8, each anchored by its most representative expression. Knowing which group to reach for is half the battle.*
![Illustration](/generated/gptimage2-1777215532334-7848.png)

## Core Idea

The central thread running through B.8 is **Euler's formula** and its consequences:

$$
e^{j\theta} = \cos\theta + j\sin\theta
$$

This single identity connects complex exponentials, trigonometric functions, and polar form. From it, the entire complex-number block follows: the polar representation \(a + jb = re^{j\theta}\) with \(r = \sqrt{a^2 + b^2}\) and \(\theta = \tan^{-1}(b/a)\), the multiplication rule \((r_1 e^{j\theta_1})(r_2 e^{j\theta_2}) = r_1 r_2 e^{j(\theta_1+\theta_2)}\), and the special values \(e^{\pm j\pi/2} = \pm j\).

The trig identities (sum-of-angles, product-to-sum, and the key combination \(a\cos x + b\sin x = C\cos(x+\theta)\)) are the other high-frequency exam targets.

### COMMON EXAM TRAP

For \(a\cos x + b\sin x = C\cos(x+\theta)\), the angle is \(\theta = \tan^{-1}(-b/a)\), **not** \(\tan^{-1}(b/a)\). The negative sign is easy to drop under pressure.

#### Example

\(3\cos x + 4\sin x\): here \(C = \sqrt{9+16} = 5\) and \(\theta = \tan^{-1}(-4/3)\).

---
**📌 Key Takeaways**
- Euler's formula \(e^{j\theta} = \cos\theta + j\sin\theta\) is the master key linking complex and trig forms.
- Polar form \(re^{j\theta}\) makes multiplication and powers of complex numbers straightforward.
- The combination formula \(a\cos x + b\sin x = C\cos(x+\theta)\) carries a sign trap: \(\theta = \tan^{-1}(-b/a)\).

*With this formula toolkit in hand, the next sections apply these identities directly to analyzing sinusoidal signals and computing Fourier transforms.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NCwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo0LCJtYXgiOjV9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6ImJfOF9hcHBlbmRpeF91c2VmdWxfbWF0aGVtYXRpY2FsX2Zvcm11bGFzX2NvcmUiLCJsYWJlbCI6IkIuOCBBcHBlbmRpeDogVXNlZnVsIE1hdGhlbWF0aWNhbCBGb3JtdWxhcyIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImNvcmVfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoaWNoIHN0YXRlbWVudCBiZXN0IGNhcHR1cmVzIHRoZSBtYWluIGxlYXJuaW5nIGdvYWwgb2YgQi44IEFwcGVuZGl4OiBVc2VmdWwgTWF0aGVtYXRpY2FsIEZvcm11bGFzPyIsIm9wdGlvbnMiOlsiQS4gTWVtb3JpemUgdGhlIGZpbmFsIHJlc3VsdCB3aXRob3V0IGNvbm5lY3RpbmcgaXQgdG8gdGhlIHZpc3VhbCBvciBzdHJ1Y3R1cmFsIG1lYW5pbmciLCJCLiBVbmRlcnN0YW5kIHRoZSBjb3JlIGRlZmluaXRpb24sIHRoZSB2aXN1YWwvc3RydWN0dXJhbCBtZWFuaW5nLCBhbmQgaG93IHRoZSBpZGVhIGFwcGVhcnMgaW4gZXhhbSBxdWVzdGlvbnMiLCJDLiBUcmVhdCB0aGUgdG9waWMgYXMgcHVyZSBzeW1ib2wgbWFuaXB1bGF0aW9uIHdpdGggbm8gY29uY2VwdHVhbCBzdHJ1Y3R1cmUiLCJELiBGb2N1cyBvbmx5IG9uIHRlcm1pbm9sb2d5IGJlY2F1c2UgdGhlIGV4YW0gbmV2ZXIgdGVzdHMgaW50ZXJwcmV0YXRpb24iXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJTdHJvbmcgdW5kZXJzdGFuZGluZyBpbiB0aGlzIHNlY3Rpb24gbWVhbnMgY29ubmVjdGluZyB0aGUgZGVmaW5pdGlvbiwgdGhlIHN0cnVjdHVyZS92aXN1YWwgbWVhbmluZywgYW5kIHRoZSBleGFtLWZhY2luZyBpbnRlcnByZXRhdGlvbi4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJNZW1vcml6YXRpb24gYWxvbmUgdXN1YWxseSBicmVha3Mgb24gdmFyaWFudHMgYW5kIHRyYXAgcXVlc3Rpb25zLiIsIkMiOiJUaGUgc2VjdGlvbiBpcyBtZWFudCB0byBiZSB1bmRlcnN0b29kIHN0cnVjdHVyYWxseSwgbm90IGFzIGVtcHR5IHN5bWJvbCBwdXNoaW5nLiIsIkQiOiJJbnRlcnByZXRhdGlvbiBpcyBleGFjdGx5IHdoYXQgbWFueSBleGFtIHF1ZXN0aW9ucyBwcm9iZS4ifSwiaGludCI6IlBpY2sgdGhlIG9wdGlvbiB0aGF0IGNvbWJpbmVzIG1lYW5pbmcsIHJlcHJlc2VudGF0aW9uLCBhbmQgZXhhbSB1c2UuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX0seyJpZCI6ImNvcmVfcTIiLCJ0eXBlIjoic2hvcnRfYW5zd2VyIiwic3RlbSI6IkluIDEtMiBzZW50ZW5jZXMsIGV4cGxhaW4gdGhlIGNvcmUgcmVsYXRpb25zaGlwIGEgc3R1ZGVudCBzaG91bGQgbm90aWNlIGZpcnN0IHdoZW4gbGVhcm5pbmcgQi44IEFwcGVuZGl4OiBVc2VmdWwgTWF0aGVtYXRpY2FsIEZvcm11bGFzLiIsImlkZWFsX2Fuc3dlciI6IlRoZSBzdHVkZW50IHNob3VsZCBmaXJzdCBpZGVudGlmeSBFdWxlcidzIGZvcm11bGEgXFwoZV57alxcdGhldGF9ID0gXFxjb3NcXHRoZXRhICsgalxcc2luXFx0aGV0YVxcKSBhcyB0aGUgY2VudHJhbCBzdHJ1Y3R1cmFsIHJlbGF0aW9uc2hpcCwgdGhlbiBjb25uZWN0IGl0IHRvIHRoZSBwb2xhciByZXByZXNlbnRhdGlvbiBvZiBjb21wbGV4IG51bWJlcnMgYW5kIHRvIHRoZSB0cmlnb25vbWV0cmljIGlkZW50aXRpZXMg4oCUIHNpbmNlIHRoZXNlIGFyZSB0aGUgZm9ybXMgbW9zdCBmcmVxdWVudGx5IHRlc3RlZCBvbiBleGFtcy4iLCJncmFkaW5nX3J1YnJpYyI6WyJNdXN0IG1lbnRpb24gdGhlIGNvcmUgZGVmaW5pdGlvbiBvciBzdHJ1Y3R1cmFsIHJlbGF0aW9uc2hpcCAoZS5nLiwgRXVsZXIncyBmb3JtdWxhIG9yIHBvbGFyIGZvcm0pIiwiTXVzdCBjb25uZWN0IGl0IHRvIGEgdmlzdWFsIG9yIHN5bWJvbGljIHJlcHJlc2VudGF0aW9uIiwiTXVzdCBtZW50aW9uIGV4YW0gaW50ZXJwcmV0YXRpb24gb3IgcHJvYmxlbS1zb2x2aW5nIHVzZSJdLCJleHBsYW5hdGlvbiI6IlRoaXMgY2hlY2tzIHdoZXRoZXIgdGhlIHN0dWRlbnQgc2VlcyB0aGUgbWFpbiB0aHJlYWQgb2YgdGhlIHNlY3Rpb24g4oCUIEV1bGVyJ3MgZm9ybXVsYSBhcyB0aGUgdW5pZnlpbmcgaWRlbnRpdHkg4oCUIGluc3RlYWQgb2YgdHJlYXRpbmcgdGhlIGFwcGVuZGl4IGFzIGFuIHVucmVsYXRlZCBsaXN0IG9mIGZhY3RzLiIsImhpbnQiOiJTdGFydCB3aXRoICd0aGUgbWFpbiByZWxhdGlvbnNoaXAgaXMuLi4nIGFuZCB0aGluayBhYm91dCB3aGljaCBzaW5nbGUgZm9ybXVsYSBjb25uZWN0cyB0aGUgbW9zdCBvdGhlciBmb3JtdWxhcyBpbiB0aGUgYXBwZW5kaXguIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfV19" style="display:none;"></div>%%KC_END%%
