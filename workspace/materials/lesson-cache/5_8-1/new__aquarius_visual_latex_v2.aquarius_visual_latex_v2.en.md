%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6Indpa2lfcmVmZXJlbmNlIiwicmF0aW9uYWxlIjoiVGhpcyBzZWN0aW9uIGlzIG1vc3RseSBhIGZvcm11bGEtcHJvcGVydHkgc2hlZXQsIGJ1dCB0aGUgUk9DIHJ1bGVzIGFyZSB2aXN1YWw6IGludGVyc2VjdGlvbiwgc2NhbGluZywgYW5kIGludmVyc2lvbiBhcmUgbXVjaCBlYXNpZXIgdG8gcmVtZW1iZXIgd2hlbiBzdHVkZW50cyBzZWUgYW5udWxhciByZWdpb25zIGluIHRoZSB6LXBsYW5lLiBObyB0ZXh0Ym9vayBmaWd1cmVzIGFyZSBhdmFpbGFibGUsIHNvIHVzZSBhIFdpa2lwZWRpYS9XaWtpbWVkaWEgei10cmFuc2Zvcm0gb3IgUk9DIHJlZmVyZW5jZSB2aXN1YWwgaWYgYXZhaWxhYmxlLiBEbyBub3QgdXNlIGdlbmVyYXRlZCBpbWFnZXMgYmVjYXVzZSB0aGUgbmVlZGVkIHJlZmVyZW5jZSBpcyBzdGFuZGFyZCBhbmQgc3ltYm9saWMgcmF0aGVyIHRoYW4gYmVzcG9rZS4iLCJjcmFtIjoiVXNlIHRoZSBST0MgdmlzdWFsIHRvIHJlY29nbml6ZSBleGFtIHRyaWdnZXJzIHF1aWNrbHk6IHN1bS9wcm9kdWN0IG1lYW5zIGludGVyc2VjdGlvbjsgZ2FtbWEgbXVsdGlwbGljYXRpb24gbWVhbnMgcmFkaWFsIHNjYWxpbmc7IHRpbWUgcmV2ZXJzYWwgbWVhbnMgcmVjaXByb2NhbCByYWRpdXMuIiwic3RhbmRhcmQiOiJVc2UgdGhlIHZpc3VhbCB0byBjb25uZWN0IGVhY2ggZm9ybXVsYSB0byBvbmUgY2xlYXIgUk9DIGJlaGF2aW9yIGFuZCBvbmUgcmVwcmVzZW50YXRpdmUgcHJvcGVydHkgYXBwbGljYXRpb24uIiwidG9wX3Njb3JlIjoiVXNlIHRoZSB2aXN1YWwgdG8gZXhwb3NlIGVkZ2UgY2FzZXM6IHogPSAwIG9yIHogPSBpbmZpbml0eSB1bmRlciBzaGlmdHMsIGVtcHR5IFJPQyBpbnRlcnNlY3Rpb25zLCBhbmQgcmV2ZXJzZWQgYW5udWx1cyBib3VuZGFyaWVzLiJ9" style="display:none;"></div>%%KC_END%%
# Properties of the Bilateral z-Transform

> **Section Objective:** Learn the exam-useful properties of the bilateral z-transform and how each one changes the ROC.

---

## Concepts In This Section

- Linearity
- Shift
- Convolution
- Multiplication by \(\gamma^n\)
- Multiplication by \(n\)
- Time reversal
- Complex conjugation
- ROC behavior

## 1. Linearity

If you scale and add sequences in the time domain, you get the same scaling and addition of their bilateral z-transforms in the z-domain.

**Symbols:** \(x_1[n]\) and \(x_2[n]\) are two discrete-time sequences; \(X_1[z]\) and \(X_2[z]\) are their respective bilateral z-transforms; \(a_1\) and \(a_2\) are arbitrary constants (real or complex).

**When to use it:** Whenever a sequence is written as a weighted sum of known transform pairs.

**Minimal example:** \(2x_1[n] - 3x_2[n]\) transforms to \(2X_1[z] - 3X_2[z]\).

**ROC rule:** The resulting ROC is the **intersection** of the individual ROCs. If the two ROCs do not overlap, the ROC may be empty.

### EXAM TRIGGER

Look for plus signs and scalar constants on the time-domain side.

### COMMON MISTAKE

Adding the transforms correctly but copying only one ROC — the ROC can shrink or even become empty at the intersection.

$$a_1 x_1[n] + a_2 x_2[n] \Longleftrightarrow a_1 X_1[z] + a_2 X_2[z]$$

## 2. Convolution

Discrete-time convolution in the time domain becomes **multiplication** in the z-domain.

**Symbols:** \(*\) denotes discrete-time convolution; \(X_1[z]\) and \(X_2[z]\) are the bilateral z-transforms of \(x_1[n]\) and \(x_2[n]\).

**When to use it:** When the problem contains a convolution sum or an LTID system input-output relation (e.g., \(y[n] = x_1[n] * x_2[n]\)).

**Minimal example:** If \(y[n] = x_1[n] * x_2[n]\), then \(Y[z] = X_1[z]\, X_2[z]\).

**ROC rule:** The ROC of \(X_1[z]\, X_2[z]\) is the **intersection** of the ROCs for \(X_1[z]\) and \(X_2[z]\). Pole-zero cancellations can sometimes enlarge the ROC, but treat intersection as the safe default.

### EXAM TRIGGER

A convolution sum or a system response described through convolution.

### COMMON MISTAKE

Multiplying the transforms correctly but carrying over only one of the two original ROCs.

$$x_1[n] * x_2[n] \Longleftrightarrow X_1[z]\, X_2[z]$$

## 3. Shift

Delaying or advancing a sequence by an integer \(m\) multiplies its z-transform by \(z^{-m}\), written here as \(X[z]/z^m\).

**Symbols:** \(m\) is any integer (positive = delay, negative = advance); \(X[z]\) is the bilateral z-transform of \(x[n]\).

**How to read it:** \(x[n-m] \Longleftrightarrow z^{-m} X[z] = X[z]/z^m\). The exponent on \(z\) matches the shift amount with a sign flip.

**Minimal example:** \(x[n-2]\) transforms to \(X[z]/z^2\).

**ROC rule:** The ROC is the **same** as the ROC of \(X[z]\), except that \(z = 0\) or \(z = \infty\) may be added or deleted due to the factor \(1/z^m\).

### EXAM TRIGGER

\(n\) is replaced by \(n - m\) inside the sequence argument.

### COMMON MISTAKE

Reversing the sign and writing \(z^m X[z]\) for \(x[n-m]\) — the delay goes in the denominator, not the numerator.

$$x[n-m] \Longleftrightarrow \frac{1}{z^m}\, X[z]$$


## 4. Multiplication by gamma^n

Multiplying a sequence by \(\gamma^n\) does **not** multiply the transform by \(\gamma\). Instead, it replaces the argument \(z\) with \(z/\gamma\) inside the transform.

**Symbols:** \(\gamma\) is a constant (real or complex); \(X[z]\) is the original bilateral z-transform of \(x[n]\).

**ROC rule:** If the original ROC is \(\gamma_1 < |z| < \gamma_2\), the new ROC is scaled by \(|\gamma|\):

$$|\gamma|\,\gamma_1 \;<\; |z| \;<\; |\gamma|\,\gamma_2$$

**Minimal example:** Multiplying by \(2^n\) (so \(|\gamma| = 2\)) doubles both ROC radii. If the original ROC is \(1 < |z| < 4\), the new ROC is \(2 < |z| < 8\).

### EXAM TRIGGER

A factor raised to the power \(n\) multiplying the sequence.

### COMMON MISTAKE

Writing \(\gamma X[z]\) instead of \(X[z/\gamma]\) — the constant enters the argument, not as an outside multiplier.

$$\gamma^n x[n] \Longleftrightarrow X\!\left[\frac{z}{\gamma}\right]$$

## 5. Multiplication by n

Multiplying the sequence by the index \(n\) corresponds to **differentiating** the z-domain expression with respect to \(z\) and then multiplying by \(-z\).

**Symbols:** \(d/dz\) denotes differentiation with respect to \(z\); \(X[z]\) is the bilateral z-transform of \(x[n]\).

**When to use it:** Whenever a bare \(n\) factor appears multiplying a known sequence whose transform you already know.

**Minimal example:** If \(x[n]\) has transform \(X[z]\), then the transform of \(n\, x[n]\, u[n]\) is found by computing \(-z\, dX/dz\).

**ROC rule:** The ROC is the **same** as the ROC for \(X[z]\).

### EXAM TRIGGER

A bare \(n\) multiplying the sequence expression.

### COMMON MISTAKE

Forgetting the **negative sign**, or forgetting the outer factor \(z\) — both must be present: \(-z\, dX/dz\), not just \(dX/dz\).

$$n\, x[n]\, u[n] \Longleftrightarrow -z\,\frac{d}{dz}X[z]$$

## 6. Time Reversal

Reversing the sequence in time replaces \(z\) by \(1/z\) in the transform.

**Symbols:** \(x[-n]\) is the time-reversed version of \(x[n]\); \(X[1/z]\) means the same transform expression with every \(z\) replaced by \(1/z\).

**ROC behavior:** An annular ROC \(\gamma_1 < |z| < \gamma_2\) is **inverted** to reciprocal radii:

$$\frac{1}{\gamma_2} \;<\; |z| \;<\; \frac{1}{\gamma_1}$$

Small radii become large and large radii become small. A right-sided sequence can become left-sided after time reversal, so the ROC orientation flips.

**Minimal example:** If the original ROC is \(2 < |z| < 5\), after time reversal the ROC becomes \(1/5 < |z| < 1/2\).

### EXAM TRIGGER

\(n\) is replaced by \(-n\) inside the sequence argument.

### COMMON MISTAKE

Changing \(X[z]\) to \(-X[z]\), or only reversing the sequence coefficients while forgetting to substitute \(1/z\) into the transform argument.

$$x[-n] \Longleftrightarrow X\!\left[\frac{1}{z}\right]$$

## 7. Complex Conjugation

Conjugating the sequence conjugates the transform **and** evaluates it at \(z^*\) (the conjugate of \(z\)).

**Symbols:** \(x^*[n]\) is the complex conjugate of the sequence; \(X^*[z^*]\) means the conjugated transform expression with \(z\) replaced by \(z^*\) inside the argument.

**ROC rule:** The ROC is the **same** as the ROC for \(X[z]\).

**Minimal example:** If a sequence has complex-valued samples, conjugating every sample produces a z-domain expression where both the formula and the \(z\) variable are conjugated.

### EXAM TRIGGER

A star (\(*\)) on the time-domain signal.

### COMMON MISTAKE

Writing only \(X^*[z]\) and ignoring the \(z^*\) inside the argument — there are **two** stars in the correct formula: one on \(X\) and one on \(z\).

$$x^*[n] \Longleftrightarrow X^*[z^*]$$

---
**📌 Key Takeaways**
- **Linearity:** \(a_1 x_1[n] + a_2 x_2[n] \Longleftrightarrow a_1 X_1[z] + a_2 X_2[z]\) — ROC is the intersection of individual ROCs.
- **Shift:** \(x[n-m] \Longleftrightarrow X[z]/z^m\) — ROC is the same as \(X[z]\), except \(z=0\) or \(z=\infty\) may be added or deleted.
- **Convolution:** \(x_1[n] * x_2[n] \Longleftrightarrow X_1[z]\, X_2[z]\) — ROC is the intersection of the two individual ROCs.
- **Multiplication by \(\gamma^n\):** \(\gamma^n x[n] \Longleftrightarrow X[z/\gamma]\) — ROC radii are scaled by \(|\gamma|\).
- **Multiplication by \(n\):** \(n\, x[n]\, u[n] \Longleftrightarrow -z\,\frac{d}{dz}X[z]\) — ROC is unchanged.
- **Time reversal:** \(x[-n] \Longleftrightarrow X[1/z]\) — ROC radii are inverted (reciprocal inner and outer boundaries).
- **Complex conjugation:** \(x^*[n] \Longleftrightarrow X^*[z^*]\) — ROC is unchanged.
- **ROC summary:** Linearity and convolution use ROC intersection; shift may affect \(z=0\) or \(z=\infty\); \(\gamma^n\) multiplication scales radii by \(|\gamma|\); time reversal inverts radii; multiplication by \(n\) and conjugation keep the ROC.

*Next, these properties will be used to analyze LTID systems with the bilateral z-transform.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6OCwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo3LCJtYXgiOjl9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6ImxpbmVhcml0eV9hbmRfY29udm9sdXRpb25fcm9jIiwibGFiZWwiOiJMaW5lYXJpdHkgYW5kIGNvbnZvbHV0aW9uIHVzZSBST0MgaW50ZXJzZWN0aW9uIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AxX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJJZiBcXCh5W25dID0gM3hfMVtuXSAtIDJ4XzJbbl1cXCksIGFuZCBcXCh4XzFbbl0gXFxMb25nbGVmdHJpZ2h0YXJyb3cgWF8xW3pdXFwpLCBcXCh4XzJbbl0gXFxMb25nbGVmdHJpZ2h0YXJyb3cgWF8yW3pdXFwpLCB3aGF0IGlzIFxcKFlbel1cXCk/Iiwib3B0aW9ucyI6WyJBLiBcXChZW3pdID0gM1hfMVt6XSAtIDJYXzJbel1cXCkiLCJCLiBcXChZW3pdID0gWF8xWzN6XSAtIFhfMlsyel1cXCkiLCJDLiBcXChZW3pdID0gM1hfMVt6XVxcLCBYXzJbel1cXCkiLCJELiBcXChZW3pdID0gWF8xW3pdIC0gWF8yW3pdXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiTGluZWFyaXR5IGtlZXBzIHRoZSBzYW1lIGNvbnN0YW50czogd2VpZ2h0ZWQgc3VtcyBvZiBzZXF1ZW5jZXMgYmVjb21lIHdlaWdodGVkIHN1bXMgb2YgdHJhbnNmb3Jtcy4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJDb25zdGFudHMgbXVsdGlwbHlpbmcgc2VxdWVuY2VzIGRvIG5vdCBjaGFuZ2UgdGhlIFxcKHpcXCkgYXJndW1lbnQuIiwiQyI6Ik11bHRpcGxpY2F0aW9uIG9mIHRyYW5zZm9ybXMgY29ycmVzcG9uZHMgdG8gY29udm9sdXRpb24sIG5vdCBhZGRpdGlvbi4iLCJEIjoiVGhlIHNjYWxlIGZhY3RvcnMgMyBhbmQgXFwoLTJcXCkgY2Fubm90IGJlIGRyb3BwZWQuIn0sImhpbnQiOiJMb29rIGZvciBhZGRpdGlvbi9zdWJ0cmFjdGlvbiBvZiBrbm93biBzZXF1ZW5jZXMgd2l0aCBzY2FsYXIgd2VpZ2h0cy4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDFfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkZvciBcXCh4XzFbbl0gKiB4XzJbbl1cXCksIHdoYXQgUk9DIHN0YXRlbWVudCBpcyB0aGUgc2FmZXN0IGRlZmF1bHQgZnJvbSB0aGlzIHNlY3Rpb24/Iiwib3B0aW9ucyI6WyJBLiBUaGUgUk9DIGlzIHRoZSB1bmlvbiBvZiB0aGUgdHdvIGluZGl2aWR1YWwgUk9Dcy4iLCJCLiBUaGUgUk9DIGlzIHRoZSBjb21tb24gaW50ZXJzZWN0aW9uIG9mIHRoZSB0d28gaW5kaXZpZHVhbCBST0NzLiIsIkMuIFRoZSBST0MgaXMgYWx3YXlzIHRoZSB3aG9sZSB6LXBsYW5lLiIsIkQuIFRoZSBST0MgaXMgYWx3YXlzIHVuY2hhbmdlZCBmcm9tIFxcKFhfMVt6XVxcKS4iXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJUaGUgc2VjdGlvbiBzdGF0ZXMgdGhhdCB0aGUgUk9DIGZvciBcXChYXzFbel1cXCwgWF8yW3pdXFwpIGlzIHRoZSBjb21tb24gaW50ZXJzZWN0aW9uIG9mIHRoZSBST0NzIGZvciBcXChYXzFbel1cXCkgYW5kIFxcKFhfMlt6XVxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJVbmlvbiBpcyB0b28gbGFyZ2U7IGJvdGggb3JpZ2luYWwgdHJhbnNmb3JtcyBtdXN0IGJlIHZhbGlkIHNpbXVsdGFuZW91c2x5LiIsIkMiOiJUaGUgd2hvbGUgei1wbGFuZSBpcyBub3QgZ2VuZXJhbGx5IGFjaGlldmFibGUuIiwiRCI6IlRoZSBzZWNvbmQgdHJhbnNmb3JtJ3MgUk9DIGFsc28gY29uc3RyYWlucyB0aGUgcmVzdWx0LiJ9LCJoaW50IjoiRm9yIGJvdGggbGluZWFyIGNvbWJpbmF0aW9ucyBhbmQgcHJvZHVjdHMsIHRoaXMgc2VjdGlvbiBlbXBoYXNpemVzIHRoZSB3b3JkICdjb21tb24nLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJST0MgaW50ZXJzZWN0aW9uIGRpYWdyYW0gdXNpbmcgb3ZlcmxhcHBpbmcgYW5udWxhciByZWdpb25zIGluIHRoZSB6LXBsYW5lIiwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJzaGlmdF9wcm9wZXJ0eSIsImxhYmVsIjoiVGltZSBzaGlmdCBtdWx0aXBsaWVzIGJ5IGEgcG93ZXIgb2YgeiIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMl9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiSWYgXFwoeFtuXSBcXExvbmdsZWZ0cmlnaHRhcnJvdyBYW3pdXFwpLCB3aGF0IGRvZXMgXFwoeFtuLTNdXFwpIHRyYW5zZm9ybSB0byBhY2NvcmRpbmcgdG8gdGhpcyBzZWN0aW9uPyIsIm9wdGlvbnMiOlsiQS4gXFwoel4zIFhbel1cXCkiLCJCLiBcXChYW3pdL3peM1xcKSIsIkMuIFxcKFhbei0zXVxcKSIsIkQuIFxcKFhbM3pdXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiVGhlIHNoaWZ0IGZvcm11bGEgaXMgXFwoeFtuLW1dIFxcTG9uZ2xlZnRyaWdodGFycm93IFhbel0vel5tXFwpLiBXaXRoIFxcKG09M1xcKSwgdGhlIGFuc3dlciBpcyBcXChYW3pdL3peM1xcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGlzIGhhcyB0aGUgc2lnbiBvZiB0aGUgcG93ZXIgcmV2ZXJzZWQgZm9yIFxcKHhbbi0zXVxcKS4iLCJDIjoiQSB0aW1lIHNoaWZ0IGRvZXMgbm90IHN1YnRyYWN0IGZyb20gdGhlIFxcKHpcXCkgdmFyaWFibGUgaXRzZWxmLiIsIkQiOiJTY2FsaW5nIFxcKHpcXCkgaXMgdGhlIFxcKFxcZ2FtbWFeblxcKSBwcm9wZXJ0eSwgbm90IHRoZSBzaGlmdCBwcm9wZXJ0eS4ifSwiaGludCI6Ik1hdGNoIFxcKHhbbi1tXVxcKSBkaXJlY3RseSB0byBcXChYW3pdL3pebVxcKS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDJfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoaWNoIFJPQyB3YXJuaW5nIGJlbG9uZ3Mgc3BlY2lmaWNhbGx5IHRvIHRoZSBzaGlmdCBwcm9wZXJ0eT8iLCJvcHRpb25zIjpbIkEuIFRoZSBST0MgaXMgYWx3YXlzIHNjYWxlZCBieSBcXCh8bXxcXCkuIiwiQi4gVGhlIFJPQyBpcyBhbHdheXMgaW52ZXJ0ZWQgYnkgcmVjaXByb2NhbCByYWRpdXMuIiwiQy4gVGhlIFJPQyBpcyB0aGUgc2FtZSBleGNlcHQgZm9yIHBvc3NpYmxlIGFkZGl0aW9uIG9yIGRlbGV0aW9uIG9mIFxcKHo9MFxcKSBvciBcXCh6PVxcaW5mdHlcXCkuIiwiRC4gVGhlIFJPQyBtdXN0IGJlY29tZSBlbXB0eS4iXSwiY29ycmVjdF9vcHRpb24iOiJDIiwiZXhwbGFuYXRpb24iOiJUaGUgZmFjdG9yIFxcKDEvel5tXFwpIGNhbiBhZGQgb3IgcmVtb3ZlIGJlaGF2aW9yIGF0IFxcKHo9MFxcKSBvciBcXCh6PVxcaW5mdHlcXCksIHdoaWxlIHRoZSByZXN0IG9mIHRoZSBST0Mgc3RheXMgdGhlIHNhbWUuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiU2NhbGluZyByYWRpaSBiZWxvbmdzIHRvIG11bHRpcGxpY2F0aW9uIGJ5IFxcKFxcZ2FtbWFeblxcKS4iLCJCIjoiUmVjaXByb2NhbCBpbnZlcnNpb24gYmVsb25ncyB0byB0aW1lIHJldmVyc2FsLiIsIkQiOiJBIHNoaWZ0IGRvZXMgbm90IGZvcmNlIHRoZSBST0MgdG8gYmVjb21lIGVtcHR5LiJ9LCJoaW50IjoiQXNrIHdoYXQgZXh0cmEgZmFjdG9yIGFwcGVhcnMgaW4gZnJvbnQgb2YgXFwoWFt6XVxcKSBhbmQgd2hhdCBzcGVjaWFsIHBvaW50cyBpdCBjYW4gYWZmZWN0LiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJ6LXBsYW5lIFJPQyBkaWFncmFtIHdpdGggb3JpZ2luIGFuZCBpbmZpbml0eSBjYWxsb3V0cyIsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoiZ2FtbWFfcG93ZXJfcHJvcGVydHkiLCJsYWJlbCI6Ik11bHRpcGxpY2F0aW9uIGJ5IGdhbW1hXm4gY2hhbmdlcyB0aGUgeiBhcmd1bWVudCBhbmQgc2NhbGVzIHRoZSBST0MiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDNfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IklmIFxcKHhbbl0gXFxMb25nbGVmdHJpZ2h0YXJyb3cgWFt6XVxcKSwgd2hhdCBpcyB0aGUgdHJhbnNmb3JtIG9mIFxcKFxcZ2FtbWFebiB4W25dXFwpPyIsIm9wdGlvbnMiOlsiQS4gXFwoXFxnYW1tYVxcLCBYW3pdXFwpIiwiQi4gXFwoWFt6L1xcZ2FtbWFdXFwpIiwiQy4gXFwoWFtcXGdhbW1hIHpdXFwpIiwiRC4gXFwoWFt6XSArIFxcZ2FtbWFcXCkiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJNdWx0aXBsaWNhdGlvbiBieSBcXChcXGdhbW1hXm5cXCkgY2hhbmdlcyB0aGUgYXJndW1lbnQgdG8gXFwoei9cXGdhbW1hXFwpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoYXQgd291bGQgYmUgb3JkaW5hcnkgc2NhbGFyIG11bHRpcGxpY2F0aW9uLCBub3QgbXVsdGlwbGljYXRpb24gYnkgYSBmYWN0b3IgcmFpc2VkIHRvIFxcKG5cXCkuIiwiQyI6IlRoZSBhcmd1bWVudCBpcyBcXCh6L1xcZ2FtbWFcXCksIG5vdCBcXChcXGdhbW1hIHpcXCkuIiwiRCI6Ik5vIGFkZGl0aXZlIHRlcm0gYXBwZWFycyBpbiB0aGlzIHByb3BlcnR5LiJ9LCJoaW50IjoiQSBmYWN0b3IgcmFpc2VkIHRvIFxcKG5cXCkgY2hhbmdlcyB0aGUgei1kb21haW4gYXJndW1lbnQsIG5vdCB0aGUgb3V0c2lkZSBtdWx0aXBsaWVyLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwM19xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiU3VwcG9zZSB0aGUgb3JpZ2luYWwgUk9DIGlzIFxcKDEgPCB8enwgPCA0XFwpLiBJZiB0aGUgc2VxdWVuY2UgaXMgbXVsdGlwbGllZCBieSBcXCgyXm5cXCksIHdoYXQgaGFwcGVucyB0byB0aGUgUk9DIHJhZGlpPyIsIm9wdGlvbnMiOlsiQS4gVGhleSBiZWNvbWUgXFwoMiA8IHx6fCA8IDhcXCkuIiwiQi4gVGhleSBiZWNvbWUgXFwoMS8yIDwgfHp8IDwgMlxcKS4iLCJDLiBUaGV5IHN0YXkgXFwoMSA8IHx6fCA8IDRcXCkuIiwiRC4gVGhleSBiZWNvbWUgXFwofHp8IDwgOFxcKSBvbmx5LiJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6Ik11bHRpcGxpY2F0aW9uIGJ5IFxcKFxcZ2FtbWFeblxcKSBzY2FsZXMgUk9DIHJhZGlpIGJ5IFxcKHxcXGdhbW1hfFxcKS4gSGVyZSBcXCh8XFxnYW1tYXwgPSAyXFwpLCBzbyB0aGUgcmFkaWkgMSBhbmQgNCBiZWNvbWUgMiBhbmQgOC4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJUaGlzIGRpdmlkZXMgdGhlIHJhZGlpIGJ5IDIsIHdoaWNoIGlzIHRoZSBvcHBvc2l0ZSBvZiB0aGUgc3RhdGVkIFJPQyBzY2FsaW5nIHJ1bGUuIiwiQyI6IlRoZSBST0MgaXMgbm90IHVuY2hhbmdlZCBmb3IgXFwoXFxnYW1tYV5uXFwpIG11bHRpcGxpY2F0aW9uLiIsIkQiOiJCb3RoIGlubmVyIGFuZCBvdXRlciByYWRpaSBtYXR0ZXIgZm9yIGFuIGFubnVsYXIgUk9DLiJ9LCJoaW50IjoiTXVsdGlwbHkgYm90aCBib3VuZGFyeSByYWRpaSBieSBcXCh8XFxnYW1tYXxcXCkuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6ImJlZm9yZS1hbmQtYWZ0ZXIgYW5udWxhciBST0Mgc2NhbGluZyBpbiB0aGUgei1wbGFuZSIsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoibl9tdWx0aXBsaWNhdGlvbl9wcm9wZXJ0eSIsImxhYmVsIjoiTXVsdGlwbGljYXRpb24gYnkgbiBjb3JyZXNwb25kcyB0byAteiBkL2R6IiwiaW1wb3J0YW5jZSI6Im1lZGl1bSIsImV4YW1fd2VpZ2h0IjoibWVkaXVtIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoxfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwNF9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiQWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhIGluIHRoaXMgc2VjdGlvbiwgd2hpY2ggei1kb21haW4gb3BlcmF0aW9uIGNvcnJlc3BvbmRzIHRvIG11bHRpcGx5aW5nIHRoZSBzZXF1ZW5jZSBieSBcXChuXFwpPyIsIm9wdGlvbnMiOlsiQS4gRGlmZmVyZW50aWF0ZSBcXChYW3pdXFwpIGFuZCBtdWx0aXBseSBieSBcXCgtelxcKS4iLCJCLiBJbnRlZ3JhdGUgXFwoWFt6XVxcKSBhbmQgbXVsdGlwbHkgYnkgXFwoelxcKS4iLCJDLiBSZXBsYWNlIFxcKHpcXCkgYnkgXFwoMS96XFwpLiIsIkQuIE11bHRpcGx5IFxcKFhbel1cXCkgYnkgXFwoblxcKS4iXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJUaGUgZGlzcGxheWVkIHByb3BlcnR5IGlzIFxcKG5cXCwgeFtuXVxcLCB1W25dIFxcTG9uZ2xlZnRyaWdodGFycm93IC16XFwsIGRYL2R6XFwpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IlRoZSBwcm9wZXJ0eSB1c2VzIGRpZmZlcmVudGlhdGlvbiwgbm90IGludGVncmF0aW9uLiIsIkMiOiJSZXBsYWNpbmcgXFwoelxcKSBieSBcXCgxL3pcXCkgaXMgdGltZSByZXZlcnNhbC4iLCJEIjoiXFwoblxcKSBpcyBhIHRpbWUgaW5kZXgsIG5vdCBhIHotZG9tYWluIGNvbnN0YW50IG11bHRpcGxpZXIuIn0sImhpbnQiOiJMb29rIGZvciB0aGUgZGVyaXZhdGl2ZSBzeW1ib2wgaW4gdGhlIHByb3BlcnR5IGxpc3QuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfSx7ImlkIjoidGltZV9yZXZlcnNhbF9hbmRfY29uanVnYXRpb24iLCJsYWJlbCI6IlRpbWUgcmV2ZXJzYWwgdXNlcyBYWzEvel07IGNvbmp1Z2F0aW9uIHVzZXMgWCpbeipdIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6Im1lZGl1bSIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDVfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IklmIFxcKHhbbl0gXFxMb25nbGVmdHJpZ2h0YXJyb3cgWFt6XVxcKSwgd2hhdCBkb2VzIFxcKHhbLW5dXFwpIGNvcnJlc3BvbmQgdG8/Iiwib3B0aW9ucyI6WyJBLiBcXCgtWFt6XVxcKSIsIkIuIFxcKFhbLXpdXFwpIiwiQy4gXFwoWFsxL3pdXFwpIiwiRC4gXFwoMS9YW3pdXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQyIsImV4cGxhbmF0aW9uIjoiVGltZSByZXZlcnNhbCByZXBsYWNlcyBcXCh6XFwpIGJ5IFxcKDEvelxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJSZXZlcnNpbmcgdGltZSBkb2VzIG5vdCBzaW1wbHkgbmVnYXRlIHRoZSB0cmFuc2Zvcm0uIiwiQiI6IlRoZSBzdWJzdGl0dXRpb24gaXMgcmVjaXByb2NhbCBcXCh6XFwpLCBub3QgbmVnYXRpdmUgXFwoelxcKS4iLCJEIjoiVGhlIHRyYW5zZm9ybSBpcyBub3QgaW52ZXJ0ZWQgYXMgYSB3aG9sZSBmcmFjdGlvbi4ifSwiaGludCI6IlRpbWUgcmV2ZXJzYWwgZmxpcHMgdGhlIHotcGxhbmUgcmFkaXVzIGJ5IHJlY2lwcm9jYWwgc3Vic3RpdHV0aW9uLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJST0MgYW5udWx1cyBpbnZlcnNpb24gc2hvd2luZyByZWNpcHJvY2FsIGlubmVyIGFuZCBvdXRlciByYWRpaSIsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwNV9xMiIsInR5cGUiOiJzaG9ydF9hbnN3ZXIiLCJzdGVtIjoiQSBjbGFzc21hdGUgc2F5cyB0aGF0IGlmIFxcKHheKltuXVxcKSBpcyBnaXZlbiwgdGhlIHRyYW5zZm9ybSBpcyBqdXN0IFxcKFheKlt6XVxcKS4gRXhwbGFpbiB3aGF0IGlzIG1pc3NpbmcuIiwiaWRlYWxfYW5zd2VyIjoiVGhlIGNvcnJlY3QgY29uanVnYXRpb24gcHJvcGVydHkgaXMgXFwoeF4qW25dIFxcTG9uZ2xlZnRyaWdodGFycm93IFheKlt6XipdXFwpLiBUaGUgdHJhbnNmb3JtIGV4cHJlc3Npb24gaXMgY29uanVnYXRlZCwgYW5kIHRoZSBcXCh6XFwpIHZhcmlhYmxlIGluc2lkZSB0aGUgYXJndW1lbnQgaXMgYWxzbyBjb25qdWdhdGVkLiBXcml0aW5nIG9ubHkgXFwoWF4qW3pdXFwpIG1pc3NlcyB0aGUgXFwoel4qXFwpIGFyZ3VtZW50LiIsImdyYWRpbmdfcnVicmljIjpbIk11c3Qgc3RhdGUgdGhlIGNvcnJlY3QgZm9ybSBcXChYXipbel4qXVxcKS4iLCJNdXN0IG1lbnRpb24gY29uanVnYXRpbmcgdGhlIHRyYW5zZm9ybSBleHByZXNzaW9uLiIsIk11c3QgbWVudGlvbiByZXBsYWNpbmcgXFwoelxcKSBieSBcXCh6XipcXCkgaW5zaWRlIHRoZSBhcmd1bWVudC4iLCJNdXN0IG5vdCBjb25mdXNlIGNvbmp1Z2F0aW9uIHdpdGggdGltZSByZXZlcnNhbC4iXSwiZXhwbGFuYXRpb24iOiJUaGlzIGNoZWNrcyB0aGUgY29tbW9uIHRyYXA6IHN0dWRlbnRzIHJlbWVtYmVyIHRoZSBzdGFyIG9uIFxcKFhcXCkgYnV0IGZvcmdldCB0aGUgc3RhciBvbiBcXCh6XFwpLiIsImhpbnQiOiJDb3VudCB0aGUgdHdvIHN0YXJzIGluIHRoZSBjb3JyZWN0IGZvcm11bGE6IG9uZSBvbiBcXChYXFwpIGFuZCBvbmUgb24gXFwoelxcKS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX1dfQ==" style="display:none;"></div>%%KC_END%%
