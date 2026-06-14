%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6InJlYWN0X2RlbW8iLCJyYXRpb25hbGUiOiJUaGlzIHNlY3Rpb24gaGFzIG5vIHRleHRib29rIGZpZ3VyZXMgYW5kIG5vIGF2YWlsYWJsZSB3ZWIgcmVmZXJlbmNlIGFzc2V0cy4gVGhlIGhhcmQgcGFydCBpcyBub3QgZHJhd2luZyBhIHNpZ25hbDsgaXQgaXMgc2VlaW5nIGhvdyB0aGUgUk9DIHN0cmlwIGluIHRoZSBzLXBsYW5lIGNoYW5nZXMgb3Igc3RheXMgZml4ZWQgdW5kZXIgZGlmZmVyZW50IGJpbGF0ZXJhbCBMYXBsYWNlIHByb3BlcnRpZXMuIEEgUmVhY3QgKyBDYW52YXMgUk9DLXN0cmlwIGRlbW8gaXMgdGhlIHN0cm9uZ2VzdCB2aXN1YWwgcm91dGUgYmVjYXVzZSBzdHVkZW50cyBjYW4gY2hhbmdlIHNoaWZ0LCBzY2FsZSwgYW5kIHJldmVyc2FsIHBhcmFtZXRlcnMgYW5kIGltbWVkaWF0ZWx5IHNlZSB0aGUgdHJhbnNmb3JtLXNpZGUgZWZmZWN0LiIsImNyYW0iOiJVc2UgdGhlIGRlbW8gdG8gbWVtb3JpemUgZmFzdCBleGFtIHRyaWdnZXJzOiBpbnRlcnNlY3Rpb24sIHVuY2hhbmdlZCBST0MsIHNoaWZ0ZWQgUk9DLCBzY2FsZWQgUk9DLCBhbmQgcmV2ZXJzZWQgUk9DLiIsInN0YW5kYXJkIjoiVXNlIHRoZSBkZW1vIHRvIGNvbm5lY3QgZWFjaCBmb3JtdWxhIHRvIG9uZSB2aXNpYmxlIFJPQy1zdHJpcCBtb3ZlbWVudCBiZWZvcmUgcHJhY3RpY2luZyByZXByZXNlbnRhdGl2ZSBxdWVzdGlvbnMuIiwidG9wX3Njb3JlIjoiVXNlIHRoZSBkZW1vIHRvIHRlc3QgZWRnZSBjYXNlczogcG9sZSBjYW5jZWxsYXRpb24sIG5lZ2F0aXZlIHJldmVyc2FsLCBwcm9kdWN0IHZlcnN1cyBjb252b2x1dGlvbiwgYW5kIFJPQyBib3VuZGFyeSBtaXN0YWtlcy4ifQ==" style="display:none;"></div>%%KC_END%%
# Properties of the Bilateral Laplace Transform

> **Section Objective:** Use bilateral Laplace transform properties to predict the new transform and ROC after common time-domain or frequency-domain operations.

---

## Concepts In This Section

- Linearity
- Time shift
- Frequency shift
- Time differentiation
- Time integration
- Time scaling
- Time convolution
- Frequency convolution
- Time reversal

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="interactive_demo" data-teaching-role="concept_anchor" data-visual-use-b64="eyJjcmFtIjoiTGV0IHN0dWRlbnRzIGNob29zZSBhIHByb3BlcnR5IGFuZCBpbnN0YW50bHkgc2VlIHRoZSBST0MgcnVsZSB0aGV5IG11c3QgcmVjYWxsIG9uIGV4YW1zLiIsInN0YW5kYXJkIjoiVXNlIHRoZSBtb3ZpbmcgdmVydGljYWwgUk9DIHN0cmlwIHRvIGV4cGxhaW4gd2hhdCBjaGFuZ2VzIGFuZCB3aGF0IHN0YXlzIGludmFyaWFudC4iLCJ0b3Bfc2NvcmUiOiJJbmNsdWRlIGJvdW5kYXJ5IGFuZCBzaWduIGNhc2VzIHNvIHN0dWRlbnRzIGNhdGNoIHJldmVyc2FsIGFuZCBzY2FsaW5nIHRyYXBzLiJ9" style="display:none;"></div><div class="kc-interactive-demo" data-demo-b64="eyJ0eXBlIjoiaW50ZXJhY3RpdmVfZGVtbyIsInRlYWNoaW5nX3JvbGUiOiJjb25jZXB0X2FuY2hvciIsIm1vZGVfc3BlY2lmaWNfdmlzdWFsX3VzZSI6eyJjcmFtIjoiTGV0IHN0dWRlbnRzIGNob29zZSBhIHByb3BlcnR5IGFuZCBpbnN0YW50bHkgc2VlIHRoZSBST0MgcnVsZSB0aGV5IG11c3QgcmVjYWxsIG9uIGV4YW1zLiIsInN0YW5kYXJkIjoiVXNlIHRoZSBtb3ZpbmcgdmVydGljYWwgUk9DIHN0cmlwIHRvIGV4cGxhaW4gd2hhdCBjaGFuZ2VzIGFuZCB3aGF0IHN0YXlzIGludmFyaWFudC4iLCJ0b3Bfc2NvcmUiOiJJbmNsdWRlIGJvdW5kYXJ5IGFuZCBzaWduIGNhc2VzIHNvIHN0dWRlbnRzIGNhdGNoIHJldmVyc2FsIGFuZCBzY2FsaW5nIHRyYXBzLiJ9LCJ0aXRsZSI6IkludGVyYWN0aXZlIFJPQyBTdHJpcDogV2hhdCBFYWNoIFByb3BlcnR5IERvZXMiLCJjYXB0aW9uIjoiVGhlIGJpbGF0ZXJhbCBMYXBsYWNlIHByb3BlcnR5IGNoYW5nZXMgdGhlIHRyYW5zZm9ybSBleHByZXNzaW9uLCBidXQgdGhlIFJPQyBtYXkgc3RheSBmaXhlZCwgc2hpZnQsIHNjYWxlLCBmbGlwLCBvciBpbnRlcnNlY3QgZGVwZW5kaW5nIG9uIHRoZSBvcGVyYXRpb24uIiwic3R1ZGVudF9wcm9tcHQiOiJCZWZvcmUgcmVhZGluZyBlYWNoIGZvcm11bGEgcGFnZSwgc2VsZWN0IGl0cyBwcm9wZXJ0eSBpbiB0aGUgZGVtbyBhbmQgcHJlZGljdCB3aGV0aGVyIHRoZSBST0Mgc3RheXMgZml4ZWQsIG1vdmVzLCBzY2FsZXMsIGZsaXBzLCBvciBpbnRlcnNlY3RzLiIsImRlbW9fc3BlYyI6eyJmcmFtZXdvcmsiOiJyZWFjdF9jYW52YXMiLCJjYW52YXNfZGVzY3JpcHRpb24iOiJSZW5kZXIgdGhlIGNvbXBsZXggcy1wbGFuZSBhcyBhIGhvcml6b250YWwgcmVhbCBheGlzIGxhYmVsZWQgUmUocykuIFNoYWRlIGEgdmVydGljYWwgUk9DIHN0cmlwIGJldHdlZW4gdHdvIGRyYWdnYWJsZSBib3VuZGFyeSB2YWx1ZXMgYSBhbmQgYiB1c2luZyBtdXRlZCB0ZWFsIGZpbGwuIEluY2x1ZGUgYSBkcm9wZG93biBzZWxlY3RvciB3aXRoIGZpdmUgbW9kZXM6IFRpbWUgU2hpZnQsIEZyZXF1ZW5jeSBTaGlmdCwgVGltZSBTY2FsaW5nIChwb3NpdGl2ZSBiZXRhKSwgVGltZSBSZXZlcnNhbCwgTGluZWFyaXR5IC8gQ29udm9sdXRpb24gSW50ZXJzZWN0aW9uLiBGb3IgRnJlcXVlbmN5IFNoaWZ0IG1vZGU6IGFkZCBhIHNsaWRlciBmb3IgYyA9IFJlKHMwKSByYW5naW5nIGZyb20gLTUgdG8gNTsgYW5pbWF0ZSBib3RoIGJvdW5kYXJpZXMgbW92aW5nIGZyb20gKGEsIGIpIHRvIChhK2MsIGIrYykgaW4gbmF2eS4gRm9yIFRpbWUgU2NhbGluZyBtb2RlOiBhZGQgYSBiZXRhIHNsaWRlciByYW5naW5nIGZyb20gMC4yNSB0byA0OyBhbmltYXRlIGJvdW5kYXJpZXMgdG8gKGJldGEqYSwgYmV0YSpiKS4gRm9yIFRpbWUgUmV2ZXJzYWwgbW9kZTogZmxpcCB0aGUgc3RyaXAgdG8gKC1iLCAtYSkgYW5kIHNoYWRlIGluIG11dGVkIHRlYWwuIEZvciBJbnRlcnNlY3Rpb24gbW9kZTogZHJhdyB0d28gb3ZlcmxhcHBpbmcgc3RyaXBzIGluIG11dGVkIGNvbG9ycyBhbmQgc2hhZGUgb25seSB0aGVpciBvdmVybGFwIHJlZ2lvbjsgaWYgb3ZlcmxhcCBpcyBlbXB0eSwgc2hhZGUgaW4gbXV0ZWQgcmVkIGFuZCBsYWJlbCAnRW1wdHkgUk9DJy4gRGlzcGxheSB0aGUgbWF0Y2hpbmcgcHJvcGVydHkgZm9ybXVsYSBiZXNpZGUgdGhlIGNhbnZhcyBhcyBhIGxhcmdlIHN0YW5kYWxvbmUgZXF1YXRpb24uIFdoaXRlIGJhY2tncm91bmQsIG5hdnkgYXhlcywgbXV0ZWQgdGVhbCBST0Mgc2hhZGluZywgbXV0ZWQgcmVkIG9ubHkgZm9yIGVtcHR5IG9yIGludmFsaWQgaW50ZXJzZWN0aW9uLiIsIm1vZGVzIjpbeyJpZCI6InRpbWVfc2hpZnQiLCJsYWJlbCI6IlRpbWUgU2hpZnQiLCJmb3JtdWxhIjoieCh0LVQpIFxcTG9uZ2xlZnRyaWdodGFycm93IGVeey1zVH1YKHMpIiwicm9jX3J1bGUiOiJST0MgdW5jaGFuZ2VkIn0seyJpZCI6ImZyZXF1ZW5jeV9zaGlmdCIsImxhYmVsIjoiRnJlcXVlbmN5IFNoaWZ0IiwiZm9ybXVsYSI6ImVee3NfMCB0fXgodCkgXFxMb25nbGVmdHJpZ2h0YXJyb3cgWChzLXNfMCkiLCJyb2NfcnVsZSI6IkJvdGggYm91bmRhcmllcyBzaGlmdCBieSBjID0gUmUoczApIn0seyJpZCI6InRpbWVfc2NhbGluZyIsImxhYmVsIjoiVGltZSBTY2FsaW5nIChwb3NpdGl2ZSBiZXRhKSIsImZvcm11bGEiOiJ4KFxcYmV0YSB0KSBcXExvbmdsZWZ0cmlnaHRhcnJvdyBcXGZyYWN7MX17fFxcYmV0YXx9WFxcIVxcbGVmdChcXGZyYWN7c317XFxiZXRhfVxccmlnaHQpIiwicm9jX3J1bGUiOiJCb3RoIGJvdW5kYXJpZXMgc2NhbGUgYnkgYmV0YSJ9LHsiaWQiOiJ0aW1lX3JldmVyc2FsIiwibGFiZWwiOiJUaW1lIFJldmVyc2FsIiwiZm9ybXVsYSI6IngoLXQpIFxcTG9uZ2xlZnRyaWdodGFycm93IFgoLXMpIiwicm9jX3J1bGUiOiJTdHJpcCBmbGlwcyB0byAtYiA8IFJlKHMpIDwgLWEifSx7ImlkIjoiaW50ZXJzZWN0aW9uIiwibGFiZWwiOiJMaW5lYXJpdHkgLyBDb252b2x1dGlvbiBJbnRlcnNlY3Rpb24iLCJmb3JtdWxhIjoiYV8xIHhfMSh0KSthXzIgeF8yKHQpIFxcTG9uZ2xlZnRyaWdodGFycm93IGFfMSBYXzEocykrYV8yIFhfMihzKSIsInJvY19ydWxlIjoiUk9DIGlzIGludGVyc2VjdGlvbiBvZiBpbmRpdmlkdWFsIFJPQ3MifV19fQ=="></div>%%KC_END%%

## 1. Operations That Combine Signals

When signals are combined linearly, their transforms combine in exactly the same way: constants pass through unchanged and the two transforms are added. When signals are convolved in time, their transforms are multiplied in the s-domain.

**Symbols:** \(a_1, a_2\) are constants; \(x_1, x_2\) are signals; \(X_1, X_2\) are their bilateral Laplace transforms; \(*\) denotes time convolution.

**ROC rule:** The resulting ROC is at least the intersection of the individual ROCs. In special cases where a pole cancels at a boundary, the ROC may be slightly larger.

**Minimal example:** If \(X_1\) has ROC \(\text{Re}(s) > 1\) and \(X_2\) has ROC \(\text{Re}(s) > 3\), the common ROC is \(\text{Re}(s) > 3\).

### EXAM TRIGGER

Look for "sum of signals" or "convolution integral" in the problem statement.

### COMMON MISTAKE

Taking the **union** of ROCs instead of the **intersection**. The union is almost always wrong.

## 2. Shifts: moving in time versus moving in s

Linearity: a linear combination in time becomes the same linear combination of transforms. ROC is at least the intersection of the individual ROCs.

$$a_1 x_1(t) + a_2 x_2(t) \Longleftrightarrow a_1 X_1(s) + a_2 X_2(s)$$

## 3. Calculus operations in time

Time convolution: convolving two signals in time multiplies their bilateral Laplace transforms. ROC is again at least the intersection of the individual ROCs.

$$x_1(t) * x_2(t) \Longleftrightarrow X_1(s)\,X_2(s)$$

## 4. Scaling and reversal

Two different shift operations produce very different effects on the ROC.

**Time shift** \(x(t-T)\): multiplies the transform by \(e^{-sT}\) but leaves the ROC completely unchanged. The strip does not move.

**Frequency shift** \(e^{s_0 t}x(t)\): shifts the transform argument from \(s\) to \(s - s_0\) and moves the ROC horizontally by \(c = \text{Re}(s_0)\). If \(X(s)\) has ROC \(a < \text{Re}(s) < b\), then \(X(s - s_0)\) has ROC \(a + c < \text{Re}(s) < b + c\).

**Symbols:** \(T\) is the time delay; \(s_0\) is a complex constant; \(c = \text{Re}(s_0)\).

**Minimal example:** If ROC is \(2 < \text{Re}(s) < 5\) and \(c = -1\), the new ROC is \(1 < \text{Re}(s) < 4\).

### EXAM TRIGGER

Distinguish \(x(t-T)\) (time shift, ROC unchanged) from \(e^{s_0 t}x(t)\) (frequency shift, ROC moves).

### COMMON MISTAKE

Shifting the ROC for a time delay. A time delay only multiplies the transform by an exponential; it never moves the ROC strip.

## 5. Frequency convolution: product in time

Time shift by \(T\): multiplies the transform by \(e^{-sT}\). The ROC is identical to the original ROC — it does not shift.

$$x(t - T) \Longleftrightarrow e^{-sT}X(s)$$

$$e^{s_0 t}\,x(t) \Longleftrightarrow X(s - s_0)$$
*Frequency shift: multiplying by \(e^{s_0 t}\) in time shifts the s-argument by \(s_0\). The ROC shifts horizontally by \(c = \text{Re}(s_0)\): new ROC is \(a + c < \text{Re}(s) < b + c\).*

## 3. Calculus Operations in Time

Differentiation and integration in the time domain have clean s-domain counterparts, but their ROC effects differ.

**Differentiation:** Multiplies the transform by \(s\). The ROC contains the original ROC and may become larger if multiplication by \(s\) cancels a pole at \(s = 0\).

**Integration:** Divides the transform by \(s\), introducing a possible pole at \(s = 0\). The ROC rule is \(\max(a, 0) < \text{Re}(s) < b\) when the original ROC is \(a < \text{Re}(s) < b\).

**Symbol:** \(\tau\) is the dummy integration variable.

**Minimal example:** If \(a = -2\) and \(b = 4\), integration gives ROC \(0 < \text{Re}(s) < 4\).

### EXAM TRIGGER

Look for a derivative or an accumulated integral in the problem.

### COMMON MISTAKE

Assuming integration keeps the ROC identical. Division by \(s\) adds a pole at \(s = 0\), which can cut into the left side of the ROC strip.

$$\frac{dx(t)}{dt} \Longleftrightarrow s\,X(s)$$
*Time differentiation multiplies the transform by \(s\). ROC contains the original ROC; may expand if the \(s\) factor cancels a pole at \(s = 0\).*

$$\int_{-\infty}^{t} x(\tau)\,d\tau \Longleftrightarrow \frac{X(s)}{s}$$
*Time integration divides the transform by \(s\). This introduces a pole at \(s = 0\), so the ROC becomes \(\max(a, 0) < \text{Re}(s) < b\) when the original ROC is \(a < \text{Re}(s) < b\).*

## 4. Scaling and Reversal

These two operations both change the s-argument, but in different ways.

**Time scaling** \(x(\beta t)\): introduces an amplitude factor \(1/|\beta|\) and replaces \(s\) with \(s/\beta\). For positive \(\beta\), the ROC scales proportionally: if \(X(s)\) has ROC \(a < \text{Re}(s) < b\), then \(X(s/\beta)\) has ROC \(\beta a < \text{Re}(s) < \beta b\).

- \(\beta > 1\): compresses time, expands the ROC scale.
- \(0 < \beta < 1\): expands time, compresses the ROC scale.

**Time reversal** \(x(-t)\): flips the transform to \(X(-s)\) and flips the ROC to \(-b < \text{Re}(s) < -a\).

**Minimal example:** If \(1 < \text{Re}(s) < 4\), reversal gives \(-4 < \text{Re}(s) < -1\).

### COMMON MISTAKE

Writing \(-a < \text{Re}(s) < -b\) for the reversed ROC. Since \(a < b\), we have \(-b < -a\), so the correct order is always \(-b < \text{Re}(s) < -a\).

$$x(\beta t) \Longleftrightarrow \frac{1}{|\beta|}\,X\!\left(\frac{s}{\beta}\right)$$
*Time scaling by positive \(\beta\): amplitude scales by \(1/|\beta|\) and the s-variable is divided by \(\beta\). ROC scales from \((a, b)\) to \((\beta a,\, \beta b)\).*

$$x(-t) \Longleftrightarrow X(-s)$$
*Time reversal: flips the s-argument sign. ROC flips from \(a < \text{Re}(s) < b\) to \(-b < \text{Re}(s) < -a\). Always write the smaller value first.*

## 5. Frequency Convolution: Product in Time

Multiplying two time-domain signals does **not** multiply their Laplace transforms. Instead, it produces a convolution-like integral in the s-domain.

**Symbol:** \(w\) is the complex integration variable; \(c\) is the real part of the vertical integration contour.

**ROC rule:** If \(X_1\) has ROC \(a_1 < \text{Re}(s) < b_1\) and \(X_2\) has ROC \(a_2 < \text{Re}(s) < b_2\), the resulting ROC is \(a_1 + a_2 < \text{Re}(s) < b_1 + b_2\).

**Key contrast:**
- Time convolution \(x_1(t) * x_2(t)\) → \(X_1(s)\,X_2(s)\) (simple product)
- Time multiplication \(x_1(t)\,x_2(t)\) → the contour integral below

### EXAM TRIGGER

See \(x_1(t)\,x_2(t)\) (pointwise product, no asterisk).

### COMMON MISTAKE

Confusing product in time with convolution in time. The asterisk \(*\) is the critical distinguishing symbol.

$$x_1(t)\,x_2(t) \Longleftrightarrow \frac{1}{2\pi j}\int_{c-j\infty}^{c+j\infty} X_1(w)\,X_2(s-w)\,dw$$
*Multiplication in time produces a frequency-domain convolution integral. The ROC of the result is \(a_1 + a_2 < \text{Re}(s) < b_1 + b_2\), where \((a_1, b_1)\) and \((a_2, b_2)\) are the individual ROCs.*

---
**📌 Key Takeaways**
- **Linearity:** \(a_1 x_1(t) + a_2 x_2(t) \Longleftrightarrow a_1 X_1(s) + a_2 X_2(s)\) — ROC is the intersection of individual ROCs.
- **Time convolution:** \(x_1(t) * x_2(t) \Longleftrightarrow X_1(s)\,X_2(s)\) — ROC is the intersection of individual ROCs.
- **Time shift:** \(x(t-T) \Longleftrightarrow e^{-sT}X(s)\) — ROC is **unchanged**.
- **Frequency shift:** \(e^{s_0 t}x(t) \Longleftrightarrow X(s-s_0)\) — ROC shifts horizontally by \(c = \text{Re}(s_0)\): new ROC is \(a+c < \text{Re}(s) < b+c\).
- **Time differentiation:** \(\dfrac{dx(t)}{dt} \Longleftrightarrow s\,X(s)\) — ROC contains original ROC; may expand if pole at \(s=0\) cancels.
- **Time integration:** \(\displaystyle\int_{-\infty}^{t} x(\tau)\,d\tau \Longleftrightarrow \dfrac{X(s)}{s}\) — ROC becomes \(\max(a,0) < \text{Re}(s) < b\).
- **Time scaling (positive \(\beta\)):** \(x(\beta t) \Longleftrightarrow \dfrac{1}{|\beta|}X\!\left(\dfrac{s}{\beta}\right)\) — ROC scales to \(\beta a < \text{Re}(s) < \beta b\).
- **Time multiplication:** \(x_1(t)\,x_2(t) \Longleftrightarrow \dfrac{1}{2\pi j}\displaystyle\int_{c-j\infty}^{c+j\infty} X_1(w)\,X_2(s-w)\,dw\) — ROC is \(a_1+a_2 < \text{Re}(s) < b_1+b_2\).
- **Time reversal:** \(x(-t) \Longleftrightarrow X(-s)\) — ROC flips to \(-b < \text{Re}(s) < -a\). Always write the smaller value first.
- **ROC trap:** For linearity and convolution, take the **intersection** (not union) of ROCs. For time shift, the ROC does **not** move. For reversal, the order of boundaries flips: \(-b < \text{Re}(s) < -a\), never \(-a < \text{Re}(s) < -b\).

*Next, these properties become tools for analyzing continuous-time LTI systems with the bilateral transform.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6OCwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo3LCJtYXgiOjl9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InJvY19iZWhhdmlvciIsImxhYmVsIjoiUk9DIGJlaGF2aW9yIHVuZGVyIGJpbGF0ZXJhbCBMYXBsYWNlIHByb3BlcnRpZXMiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJyb2NfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkluIHRoZSBST0Mtc3RyaXAgZGVtbywgYSBmcmVxdWVuY3kgc2hpZnQgdXNlcyBcXChjID0gXFx0ZXh0e1JlfShzXzApID0gM1xcKS4gSWYgdGhlIG9yaWdpbmFsIFJPQyBpcyBcXCgxIDwgXFx0ZXh0e1JlfShzKSA8IDRcXCksIHdoYXQgaXMgdGhlIHNoaWZ0ZWQgUk9DPyIsIm9wdGlvbnMiOlsiQS4gXFwoMSA8IFxcdGV4dHtSZX0ocykgPCA0XFwpIiwiQi4gXFwoNCA8IFxcdGV4dHtSZX0ocykgPCA3XFwpIiwiQy4gXFwoLTIgPCBcXHRleHR7UmV9KHMpIDwgMVxcKSIsIkQuIFxcKDMgPCBcXHRleHR7UmV9KHMpIDwgMTJcXCkiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJGcmVxdWVuY3kgc2hpZnQgXFwoZV57c18wIHR9eCh0KSBcXExvbmdsZWZ0cmlnaHRhcnJvdyBYKHMtc18wKVxcKSBzaGlmdHMgYm90aCBST0MgYm91bmRhcmllcyBieSBcXChjID0gXFx0ZXh0e1JlfShzXzApXFwpLCBzbyBcXCgxKzMgPCBcXHRleHR7UmV9KHMpIDwgNCszXFwpIGdpdmVzIFxcKDQgPCBcXHRleHR7UmV9KHMpIDwgN1xcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGF0IGlzIHRoZSB0aW1lLXNoaWZ0IFJPQyBydWxlIOKAlCBhIHRpbWUgc2hpZnQgbGVhdmVzIHRoZSBST0MgdW5jaGFuZ2VkLCBub3QgdGhlIGZyZXF1ZW5jeSBzaGlmdC4iLCJDIjoiVGhpcyBzdWJ0cmFjdHMgXFwoY1xcKSBpbnN0ZWFkIG9mIGFkZGluZyBpdC4iLCJEIjoiVGhpcyBpbmNvcnJlY3RseSBtdWx0aXBsaWVzIHRoZSBib3VuZGFyaWVzIGJ5IFxcKGNcXCkuIn0sImhpbnQiOiJGcmVxdWVuY3kgc2hpZnQgbW92ZXMgdGhlIFJPQyBob3Jpem9udGFsbHkgYnkgXFwoXFx0ZXh0e1JlfShzXzApXFwpLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJpbnRlcmFjdGl2ZV9kZW1vIiwicXVlc3Rpb25fcm9sZSI6ImRlbW9fb2JzZXJ2YXRpb25fY2hlY2siLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJyb2NfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IlR3byBzaWduYWxzIGhhdmUgUk9DcyBcXChcXHRleHR7UmV9KHMpID4gMlxcKSBhbmQgXFwoXFx0ZXh0e1JlfShzKSA+IDVcXCkuIEZvciB0aGVpciBsaW5lYXIgY29tYmluYXRpb24sIHdoYXQgUk9DIHNob3VsZCB5b3UgZXhwZWN0IGJlZm9yZSBjb25zaWRlcmluZyBwb3NzaWJsZSBjYW5jZWxsYXRpb25zPyIsIm9wdGlvbnMiOlsiQS4gXFwoXFx0ZXh0e1JlfShzKSA+IDJcXCkiLCJCLiBcXChcXHRleHR7UmV9KHMpID4gNVxcKSIsIkMuIFxcKDIgPCBcXHRleHR7UmV9KHMpIDwgNVxcKSIsIkQuIFxcKFxcdGV4dHtSZX0ocykgPCA1XFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiVGhlIFJPQyBmb3IgYSBsaW5lYXIgY29tYmluYXRpb24gaXMgdGhlIGludGVyc2VjdGlvbiBvZiB0aGUgaW5kaXZpZHVhbCBST0NzLiBUaGUgb3ZlcmxhcCBvZiBcXChcXHRleHR7UmV9KHMpID4gMlxcKSBhbmQgXFwoXFx0ZXh0e1JlfShzKSA+IDVcXCkgaXMgXFwoXFx0ZXh0e1JlfShzKSA+IDVcXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhhdCBpcyB0aGUgbGFyZ2VyIGluZGl2aWR1YWwgcmVnaW9uLCBub3QgdGhlIGludGVyc2VjdGlvbi4iLCJDIjoiQm90aCBvcmlnaW5hbCBST0NzIGV4dGVuZCB0byB0aGUgcmlnaHQ7IHRoZWlyIG92ZXJsYXAgaXMgbm90IGEgZmluaXRlIHN0cmlwLiIsIkQiOiJUaGlzIHBvaW50cyBpbiB0aGUgd3JvbmcgZGlyZWN0aW9uLiJ9LCJoaW50IjoiQ29tbW9uIFJPQyBtZWFucyBvdmVybGFwLCBub3QgdW5pb24uIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6ImludGVyYWN0aXZlX2RlbW8iLCJxdWVzdGlvbl9yb2xlIjoidmlzdWFsX29yX2RlbW9fb2JzZXJ2YXRpb25fY2hlY2siLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6InNpZ25hbF9jb21iaW5hdGlvbl9wcm9wZXJ0aWVzIiwibGFiZWwiOiJMaW5lYXJpdHkgYW5kIHRpbWUgY29udm9sdXRpb24iLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJjb21iaW5lX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGljaCBwcm9wZXJ0eSBtYXRjaGVzIFxcKHhfMSh0KSAqIHhfMih0KVxcKT8iLCJvcHRpb25zIjpbIkEuIFxcKFhfMShzKSArIFhfMihzKVxcKSIsIkIuIFxcKFhfMShzKVxcLFhfMihzKVxcKSIsIkMuIFxcKFhfMShzLXNfMClcXCxYXzIocy1zXzApXFwpIiwiRC4gVGhlIGZyZXF1ZW5jeS1jb252b2x1dGlvbiBpbnRlZ3JhbCJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IkNvbnZvbHV0aW9uIGluIHRpbWUgY29ycmVzcG9uZHMgdG8gbXVsdGlwbGljYXRpb24gaW4gdGhlIGJpbGF0ZXJhbCBMYXBsYWNlIGRvbWFpbi4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJBZGRpdGlvbiBpbiB0aW1lIGNvcnJlc3BvbmRzIHRvIGFkZGl0aW9uIG9mIHRyYW5zZm9ybXMsIG5vdCBjb252b2x1dGlvbi4iLCJDIjoiVGhpcyBpbnRyb2R1Y2VzIGFuIHVucmVsYXRlZCBmcmVxdWVuY3kgc2hpZnQuIiwiRCI6IlRoZSBpbnRlZ3JhbCBhcHBlYXJzIHdoZW4gbXVsdGlwbHlpbmcgc2lnbmFscyBpbiB0aW1lLCBub3QgY29udm9sdmluZyB0aGVtIGluIHRpbWUuIn0sImhpbnQiOiJUaW1lIGNvbnZvbHV0aW9uIGJlY29tZXMgcy1kb21haW4gbXVsdGlwbGljYXRpb24uIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwicXVlc3Rpb25fcm9sZSI6ImZvcm11bGFfdHJpZ2dlcl9jaGVjayIsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9XX0seyJpZCI6InNoaWZ0X3Byb3BlcnRpZXMiLCJsYWJlbCI6IlRpbWUgc2hpZnQgdmVyc3VzIGZyZXF1ZW5jeSBzaGlmdCIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6InNoaWZ0X3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJBIHNpZ25hbCBpcyBjaGFuZ2VkIGZyb20gXFwoeCh0KVxcKSB0byBcXCh4KHQtVClcXCkuIFdoaWNoIHN0YXRlbWVudCBpcyBjb3JyZWN0PyIsIm9wdGlvbnMiOlsiQS4gVGhlIHRyYW5zZm9ybSBiZWNvbWVzIFxcKGVeey1zVH1YKHMpXFwpLCBhbmQgdGhlIFJPQyBpcyB1bmNoYW5nZWQuIiwiQi4gVGhlIHRyYW5zZm9ybSBiZWNvbWVzIFxcKFgocy1UKVxcKSwgYW5kIHRoZSBST0Mgc2hpZnRzIGJ5IFxcKFRcXCkuIiwiQy4gVGhlIHRyYW5zZm9ybSBiZWNvbWVzIFxcKGVee3NUfVgocylcXCksIGFuZCB0aGUgUk9DIGZsaXBzLiIsIkQuIFRoZSB0cmFuc2Zvcm0gYmVjb21lcyBcXChYKHMpXFwsZV57LVR9XFwpLCBhbmQgdGhlIFJPQyBzY2FsZXMgYnkgXFwoVFxcKS4iXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJBIHRpbWUgc2hpZnQgbXVsdGlwbGllcyB0aGUgdHJhbnNmb3JtIGJ5IFxcKGVeey1zVH1cXCk7IGl0IGRvZXMgbm90IHNoaWZ0IHRoZSBST0MuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiVGhhdCBjb25mdXNlcyB0aW1lIHNoaWZ0IHdpdGggZnJlcXVlbmN5IHNoaWZ0LiIsIkMiOiJUaGUgZXhwb25lbnQgc2lnbiBpcyB3cm9uZyBmb3IgXFwoeCh0LVQpXFwpLCBhbmQgcmV2ZXJzYWwgaXMgdW5yZWxhdGVkLiIsIkQiOiJUaGUgZmFjdG9yIG11c3QgZGVwZW5kIG9uIFxcKHNcXCksIGFuZCBzY2FsaW5nIGlzIHVucmVsYXRlZC4ifSwiaGludCI6IkNoYW5naW5nIFxcKHRcXCkgdG8gXFwodC1UXFwpIGNyZWF0ZXMgYW4gZXhwb25lbnRpYWwgbXVsdGlwbGllciBpbiBcXChzXFwpLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInF1ZXN0aW9uX3JvbGUiOiJjb21tb25fdHJhcF9jaGVjayIsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6InNoaWZ0X3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGljaCB0aW1lLWRvbWFpbiBvcGVyYXRpb24gcHJvZHVjZXMgXFwoWChzLXNfMClcXCk/Iiwib3B0aW9ucyI6WyJBLiBcXCh4KHQtVClcXCkiLCJCLiBcXChlXntzXzAgdH1cXCx4KHQpXFwpIiwiQy4gXFwoZHgodCkvZHRcXCkiLCJELiBcXCh4KC10KVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6Ik11bHRpcGxpY2F0aW9uIGJ5IFxcKGVee3NfMCB0fVxcKSBpbiB0aW1lIHNoaWZ0cyB0aGUgdHJhbnNmb3JtIGFyZ3VtZW50IHRvIFxcKHMgLSBzXzBcXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiQSB0aW1lIHNoaWZ0IGdpdmVzIFxcKGVeey1zVH1YKHMpXFwpLCBub3QgXFwoWChzLXNfMClcXCkuIiwiQyI6IkRpZmZlcmVudGlhdGlvbiBnaXZlcyBcXChzXFwsWChzKVxcKS4iLCJEIjoiVGltZSByZXZlcnNhbCBnaXZlcyBcXChYKC1zKVxcKS4ifSwiaGludCI6IkFuIGV4cG9uZW50aWFsIG11bHRpcGxpZXIgaW4gdGltZSBzaGlmdHMgdGhlIFxcKHNcXCktdmFyaWFibGUuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwicXVlc3Rpb25fcm9sZSI6ImZvcm11bGFfdHJpZ2dlcl9jaGVjayIsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoiY2FsY3VsdXNfcHJvcGVydGllcyIsImxhYmVsIjoiVGltZSBkaWZmZXJlbnRpYXRpb24gYW5kIGludGVncmF0aW9uIiwiaW1wb3J0YW5jZSI6Im1lZGl1bSIsImV4YW1fd2VpZ2h0IjoibWVkaXVtIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoxfSwicXVlc3Rpb25zIjpbeyJpZCI6ImNhbGNfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IklmIFxcKHgodCkgXFxMb25nbGVmdHJpZ2h0YXJyb3cgWChzKVxcKSwgd2hhdCBpcyB0aGUgYmlsYXRlcmFsIExhcGxhY2UgdHJhbnNmb3JtIG9mIFxcKGR4KHQpL2R0XFwpPyIsIm9wdGlvbnMiOlsiQS4gXFwoWChzKS9zXFwpIiwiQi4gXFwoc1xcLFgocylcXCkiLCJDLiBcXChYKHMtMSlcXCkiLCJELiBcXCgtWCgtcylcXCkiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJUaW1lIGRpZmZlcmVudGlhdGlvbiBjb3JyZXNwb25kcyB0byBtdWx0aXBseWluZyB0aGUgdHJhbnNmb3JtIGJ5IFxcKHNcXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiRGl2aXNpb24gYnkgXFwoc1xcKSBjb3JyZXNwb25kcyB0byBpbnRlZ3JhdGlvbiBmcm9tIFxcKC1cXGluZnR5XFwpIHRvIFxcKHRcXCkuIiwiQyI6IlRoaXMgaXMgYSBmcmVxdWVuY3kgc2hpZnQsIG5vdCBkaWZmZXJlbnRpYXRpb24uIiwiRCI6IlRoaXMgcmVzZW1ibGVzIHJldmVyc2FsIHdpdGggYW4gZXh0cmEgaW5jb3JyZWN0IG5lZ2F0aXZlIHNpZ24uIn0sImhpbnQiOiJEZXJpdmF0aXZlIGluIHRpbWUgbWVhbnMgbXVsdGlwbHkgYnkgXFwoc1xcKS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJxdWVzdGlvbl9yb2xlIjoiY29yZV9jb25jZXB0X2NoZWNrIiwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX0seyJpZCI6ImNhbGNfcTIiLCJ0eXBlIjoic2hvcnRfYW5zd2VyIiwic3RlbSI6IkEgY2xhc3NtYXRlIHNheXMgaW50ZWdyYXRpb24gYWx3YXlzIGtlZXBzIGV4YWN0bHkgdGhlIHNhbWUgUk9DIGJlY2F1c2Ugb25seSBcXChYKHMpXFwpIGNoYW5nZXMgdG8gXFwoWChzKS9zXFwpLiBFeHBsYWluIHdoeSB0aGF0IGlzIHVuc2FmZS4iLCJpZGVhbF9hbnN3ZXIiOiJEaXZpZGluZyBieSBcXChzXFwpIGNhbiBpbnRyb2R1Y2UgYSBwb2xlIGF0IFxcKHMgPSAwXFwpLCBzbyB0aGUgUk9DIGlzIG5vdCBhdXRvbWF0aWNhbGx5IGlkZW50aWNhbC4gVGhlIGludGVncmF0aW9uIFJPQyBpcyBcXChcXG1heChhLCAwKSA8IFxcdGV4dHtSZX0ocykgPCBiXFwpIGZvciBvcmlnaW5hbCBST0MgXFwoYSA8IFxcdGV4dHtSZX0ocykgPCBiXFwpLiIsImdyYWRpbmdfcnVicmljIjpbIk11c3QgbWVudGlvbiBkaXZpc2lvbiBieSBcXChzXFwpIiwiTXVzdCBtZW50aW9uIHBvc3NpYmxlIHBvbGUgb3IgYm91bmRhcnkgZWZmZWN0IGF0IFxcKHMgPSAwXFwpIiwiTXVzdCBzdGF0ZSBvciBjb3JyZWN0bHkgcGFyYXBocmFzZSBcXChcXG1heChhLDApIDwgXFx0ZXh0e1JlfShzKSA8IGJcXCkiXSwiZXhwbGFuYXRpb24iOiJUaGlzIGNoZWNrcyB3aGV0aGVyIHRoZSBzdHVkZW50IHRyYWNrcyBST0MgZWZmZWN0cywgbm90IGp1c3QgdHJhbnNmb3JtIGZvcm11bGFzLiIsImhpbnQiOiJBc2sgd2hhdCBuZXcgZmFjdG9yIGFwcGVhcnMgaW4gdGhlIGRlbm9taW5hdG9yLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInF1ZXN0aW9uX3JvbGUiOiJjb21tb25fdHJhcF9jaGVjayIsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9XX0seyJpZCI6InNjYWxpbmdfcmV2ZXJzYWwiLCJsYWJlbCI6IlRpbWUgc2NhbGluZyBhbmQgdGltZSByZXZlcnNhbCIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6InNjYWxlX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJGb3IgcG9zaXRpdmUgXFwoXFxiZXRhXFwpLCB3aGljaCBmb3JtdWxhIG1hdGNoZXMgXFwoeChcXGJldGEgdClcXCk/Iiwib3B0aW9ucyI6WyJBLiBcXChcXGJldGFcXCxYKFxcYmV0YSBzKVxcKSIsIkIuIFxcKFgocyAtIFxcYmV0YSlcXCkiLCJDLiBcXChcXGRmcmFjezF9e3xcXGJldGF8fVhcXCFcXGxlZnQoXFxkZnJhY3tzfXtcXGJldGF9XFxyaWdodClcXCkiLCJELiBcXChYKC1zKVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkMiLCJleHBsYW5hdGlvbiI6IlRpbWUgc2NhbGluZyBnaXZlcyB0aGUgYW1wbGl0dWRlIGZhY3RvciBcXCgxL3xcXGJldGF8XFwpIGFuZCByZXBsYWNlcyBcXChzXFwpIGJ5IFxcKHMvXFxiZXRhXFwpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IkJvdGggdGhlIGFtcGxpdHVkZSBmYWN0b3IgYW5kIHRoZSBcXChzXFwpLWFyZ3VtZW50IGFyZSB3cm9uZy4iLCJCIjoiVGhhdCBpcyBhIHNoaWZ0IGluIFxcKHNcXCksIG5vdCB0aW1lIHNjYWxpbmcuIiwiRCI6IlRoYXQgaXMgdGltZSByZXZlcnNhbC4ifSwiaGludCI6IlNjYWxpbmcgaW4gdGltZSBkaXZpZGVzIHRoZSBcXChzXFwpLXZhcmlhYmxlIGJ5IHRoZSBzYW1lIHNjYWxlIGZhY3Rvci4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoiaW50ZXJhY3RpdmVfZGVtbyIsInF1ZXN0aW9uX3JvbGUiOiJkZW1vX29ic2VydmF0aW9uX2NoZWNrIiwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoicmV2ZXJzZV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiSWYgXFwoWChzKVxcKSBoYXMgUk9DIFxcKDIgPCBcXHRleHR7UmV9KHMpIDwgNlxcKSwgd2hhdCBpcyB0aGUgUk9DIGZvciBcXCh4KC10KSBcXExvbmdsZWZ0cmlnaHRhcnJvdyBYKC1zKVxcKT8iLCJvcHRpb25zIjpbIkEuIFxcKC0yIDwgXFx0ZXh0e1JlfShzKSA8IC02XFwpIiwiQi4gXFwoLTYgPCBcXHRleHR7UmV9KHMpIDwgLTJcXCkiLCJDLiBcXCgyIDwgXFx0ZXh0e1JlfShzKSA8IDZcXCkiLCJELiBcXChcXHRleHR7UmV9KHMpID4gLTZcXCkiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJUaW1lIHJldmVyc2FsIGZsaXBzIHRoZSBST0MgYm91bmRhcmllcyBhbmQgcmV2ZXJzZXMgdGhlaXIgb3JkZXI6IFxcKC1iIDwgXFx0ZXh0e1JlfShzKSA8IC1hXFwpLiBIZXJlIFxcKC02IDwgXFx0ZXh0e1JlfShzKSA8IC0yXFwpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoZSBlbmRwb2ludHMgYXJlIHdyaXR0ZW4gaW4gYW4gaW1wb3NzaWJsZSBvcmRlciAoXFwoLTIgPiAtNlxcKSBpcyBmYWxzZSBhcyBhIGxvd2VyIGJvdW5kKS4iLCJDIjoiVGhlIFJPQyBpcyBub3QgdW5jaGFuZ2VkIHVuZGVyIHJldmVyc2FsLiIsIkQiOiJUaGUgb3JpZ2luYWwgUk9DIHdhcyBhIGZpbml0ZSBzdHJpcCwgc28gdGhlIHJldmVyc2VkIFJPQyBpcyBhbHNvIGEgZmluaXRlIHN0cmlwLiJ9LCJoaW50IjoiRmxpcCBib3RoIGJvdW5kYXJ5IHNpZ25zLCB0aGVuIHdyaXRlIHRoZSBzbWFsbGVyIG51bWJlciBmaXJzdC4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoiaW50ZXJhY3RpdmVfZGVtbyIsInF1ZXN0aW9uX3JvbGUiOiJ3cm9uZ192c19yaWdodF92aXN1YWxfY2hlY2siLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6ImZyZXF1ZW5jeV9jb252b2x1dGlvbiIsImxhYmVsIjoiRnJlcXVlbmN5IGNvbnZvbHV0aW9uIHZlcnN1cyB0aW1lIGNvbnZvbHV0aW9uIiwiaW1wb3J0YW5jZSI6Im1lZGl1bSIsImV4YW1fd2VpZ2h0IjoibWVkaXVtIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoxfSwicXVlc3Rpb25zIjpbeyJpZCI6ImZyZXFjb252X3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGljaCBvcGVyYXRpb24gdHJpZ2dlcnMgdGhlIGZyZXF1ZW5jeS1jb252b2x1dGlvbiBpbnRlZ3JhbCBpbiB0aGUgcy1kb21haW4/Iiwib3B0aW9ucyI6WyJBLiBcXCh4XzEodCkgKyB4XzIodClcXCkiLCJCLiBcXCh4XzEodCkgKiB4XzIodClcXCkiLCJDLiBcXCh4XzEodClcXCx4XzIodClcXCkiLCJELiBcXCh4KHQtVClcXCkiXSwiY29ycmVjdF9vcHRpb24iOiJDIiwiZXhwbGFuYXRpb24iOiJNdWx0aXBsaWNhdGlvbiBpbiB0aW1lIGNvcnJlc3BvbmRzIHRvIHRoZSBmcmVxdWVuY3ktY29udm9sdXRpb24gaW50ZWdyYWwgaW52b2x2aW5nIFxcKFhfMSh3KVxcLFhfMihzLXcpXFwpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IkFkZGl0aW9uIHVzZXMgbGluZWFyaXR5LiIsIkIiOiJUaW1lIGNvbnZvbHV0aW9uIGdpdmVzIFxcKFhfMShzKVxcLFhfMihzKVxcKSwgbm90IHRoZSBpbnRlZ3JhbC4iLCJEIjoiVGltZSBzaGlmdCBnaXZlcyBcXChlXnstc1R9WChzKVxcKS4ifSwiaGludCI6IlByb2R1Y3QgaW4gb25lIGRvbWFpbiBjb3JyZXNwb25kcyB0byBjb252b2x1dGlvbiBpbiB0aGUgb3RoZXIgZG9tYWluLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInF1ZXN0aW9uX3JvbGUiOiJtaW5pX3RyYW5zZmVyX2NoZWNrIiwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfV19" style="display:none;"></div>%%KC_END%%
