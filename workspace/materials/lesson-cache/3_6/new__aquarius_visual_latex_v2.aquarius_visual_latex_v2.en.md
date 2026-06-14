%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6Indpa2lfcmVmZXJlbmNlIiwicmF0aW9uYWxlIjoiVGhpcyBzZWN0aW9uIGlzIGZvcm11bGEtZHJpdmVuLCBzbyBMYVRlWC1uYXRpdmUgZm9ybXVsYSBibG9ja3Mgc2hvdWxkIGJlIHRoZSBtYWluIHRlYWNoaW5nIHN1cmZhY2UuIFN0YXRpYyBXaWtpbWVkaWEvV2lraXBlZGlhIHZpc3VhbHMgc2hvdWxkIHN1cHBvcnQgdGhlIHJvb3QtdG8tbW9kZSBpZGVhLCBlc3BlY2lhbGx5IGNvbXBsZXggcm9vdHMgcHJvZHVjaW5nIGRlY2F5aW5nIG9yIGdyb3dpbmcgc2ludXNvaWRhbCBiZWhhdmlvci4gTm8gY3JvcHBlZCB0ZXh0Ym9vayBmaWd1cmVzIGFyZSBhdmFpbGFibGUsIGFuZCBHUFRJbWFnZTIgaXMgbm90IG5lZWRlZCBiZWNhdXNlIHRoZSBrZXkgb2JqZWN0cyBjYW4gYmUgc2hvd24gcHJlY2lzZWx5IHdpdGggZm9ybXVsYXMgYW5kIHN0YW5kYXJkIHJlZmVyZW5jZSB2aXN1YWxzLiIsImNyYW0iOiJVc2UgdmlzdWFscyB0byByZWNvZ25pemUgcm9vdCBwYXR0ZXJucyBxdWlja2x5OiByZWFsIHJvb3QsIHJlcGVhdGVkIHJvb3QsIGFuZCBjb21wbGV4LWNvbmp1Z2F0ZSBwYWlyLiIsInN0YW5kYXJkIjoiVXNlIHZpc3VhbHMgdG8gY29ubmVjdCBjaGFyYWN0ZXJpc3RpYyByb290cyB0byBuYXR1cmFsIG1vZGVzIGFuZCB0byBvbmUgcmVwcmVzZW50YXRpdmUgemVyby1pbnB1dCByZXNwb25zZSBzaGFwZS4iLCJ0b3Bfc2NvcmUiOiJVc2UgdmlzdWFscyB0byBleHBvc2UgdHJhcHM6IHJlcGVhdGVkIHJvb3RzIG5lZWQgcG93ZXJzIG9mIG4sIGFuZCBjb21wbGV4IHJvb3RzIHJlcXVpcmUgY29uc2lzdGVudCByYWRpYW4gYW5nbGUgdW5pdHMuIn0=" style="display:none;"></div>%%KC_END%%
# Section 3.6 — The Zero-Input Response

> **Section Objective:** Find the part of a discrete-time system response caused only by internal initial conditions, with the external input set to zero.

---

## Concepts In This Section

- Zero-input response
- Characteristic equation
- Characteristic roots
- Natural modes
- Distinct real roots
- Repeated roots
- Complex-conjugate roots

## 1. Zero-input response means homogeneous response

This is **Eq. (3.21)**, obtained by setting \(x[n] = 0\) in the full system difference equation. Here \(E\) is the **advance operator**: \(E^k y[n] = y[n+k]\). The signal \(y_0[n]\) is the response driven entirely by stored initial conditions — no new external input contributes.

**When to use it:** Any time a problem asks for the zero-input response, natural response, internal-condition response, or the response with the input forced to zero.

**Minimal example:** For a second-order equation, the zero-input part involves only the terms \(y[n+2]\), \(y[n+1]\), and \(y[n]\) — the input \(x[n]\) does not appear.

#### Common Misuse
Do not plug the given input \(x[n]\) into this equation. The right-hand side is identically zero.

$$(E^N + a_1E^{N-1} + \cdots + a_{N-1}E + a_N)y_0[n] = 0$$

## 2. Why exponentials become natural modes

This is **Eq. (3.22)**, the single-mode trial solution. Exponentials are the natural choice because advancing \(\gamma^n\) only multiplies it by a constant:

$$E^k\{\gamma^n\} = \gamma^k \cdot \gamma^n$$

This means every shifted copy keeps the same exponential form, so all terms in the homogeneous equation can cancel cleanly.

- \(c\) — arbitrary constant, fixed later by initial conditions
- \(\gamma\) — a candidate characteristic root (unknown until the characteristic equation is solved)
- \(n\) — discrete-time index

**Use case:** Try this form whenever solving the homogeneous zero-input equation.

**Exam trigger:** A constant-coefficient difference equation with no input term.

#### Common Misuse
Do not treat \(c\) and \(\gamma\) as known before solving the characteristic equation. Both are determined by subsequent steps.

$$y_0[n] = c\gamma^n$$

## 3. Distinct real roots: write one mode per root

This is **Eq. (3.23)**, the **characteristic equation**. It is obtained by substituting \(y_0[n] = c\gamma^n\) into Eq. (3.21) and requiring a nonzero solution — the factor \(c\gamma^n\) cancels, leaving a polynomial in \(\gamma\) alone.

- \(a_1, \ldots, a_N\) — system coefficients from the difference equation
- \(\gamma\) — the unknown root value (also called an eigenvalue in this context)

Solving this degree-\(N\) polynomial gives the system's **characteristic roots**, which determine all natural modes. The compact notation is \(Q[\gamma] = 0\).

**Exam trigger:** Once the homogeneous operator polynomial is visible, replace \(E\) with \(\gamma\) to write the characteristic equation immediately.

#### Common Misuse
The exponent on the second term is \(N-1\), not \(n-1\). Do not confuse the system order \(N\) with the time index \(n\).

$$\gamma^N + a_1\gamma^{N-1} + \cdots + a_{N-1}\gamma + a_N = 0$$

## 4. Repeated roots: multiply by powers of n

When the characteristic equation has \(N\) **distinct** roots \(\gamma_1, \gamma_2, \ldots, \gamma_N\), the zero-input response is a linear combination of all \(N\) natural modes.

- \(\gamma_i\) — the \(i\)-th root of the characteristic equation
- \(c_i\) — arbitrary constant determined from \(N\) initial or auxiliary conditions

**Use case:** Write this form immediately after factoring the characteristic polynomial into \(N\) distinct linear factors.

**Exam trigger:** An \(N\)-th order LTID difference equation paired with \(N\) initial conditions.

#### Common Misuse
If the system is second-order, there must be two modes. Using only one root and one constant cannot satisfy both initial conditions.

$$y_0[n] = c_1\gamma_1^n + c_2\gamma_2^n + \cdots + c_N\gamma_N^n$$


## 5. Complex roots: use the real cosine form

This is **Eq. (3.24)**, the result of factoring the characteristic polynomial:

$$\gamma^2 - 0.6\gamma - 0.16 = (\gamma + 0.2)(\gamma - 0.8) = 0$$

The two distinct roots are \(\gamma_1 = -0.2\) and \(\gamma_2 = 0.8\), producing two independent exponential modes.

- \(c_1, c_2\) — constants found from two initial conditions

**Minimal worked example:** If \(y_0[-1]\) and \(y_0[-2]\) are given, substitute \(n = -1\) and \(n = -2\) into the formula to obtain two linear equations, then solve for \(c_1\) and \(c_2\).

**Exam trigger:** Two distinct real factors in the characteristic polynomial.

#### Common Misuse
Students often find the roots correctly but then forget to solve for the constants. Both steps are required for a complete answer.

$$y_0[n] = c_1(-0.2)^n + c_2(0.8)^n$$

## 4. Repeated roots: multiply by powers of n

If a root \(\gamma\) appears \(r\) times (multiplicity \(r\)), a single exponential \(c\gamma^n\) cannot provide enough independent modes to satisfy all initial conditions. The repeated-root contribution is a **polynomial in \(n\)** multiplied by \(\gamma^n\).

- \(r\) — multiplicity of the repeated root
- \(c_1, \ldots, c_r\) — constants fixed by \(r\) initial conditions

**Minimal example:** If \((\gamma + 3)^2 = 0\), then \(\gamma = -3\) has multiplicity 2, so:

$$y_0[n] = (c_1 + c_2 n)(-3)^n$$

**Exam trigger:** A squared or higher-power factor such as \((\gamma - a)^r\) in the characteristic polynomial.

#### Common Misuse
Writing \(c_1 \gamma^n + c_2 \gamma^n\) collapses into \((c_1 + c_2)\gamma^n\) — only one effective constant, only one mode. This cannot satisfy two independent initial conditions.

$$y_0[n] = (c_1 + c_2 n + c_3 n^2 + \cdots + c_r n^{r-1})\gamma^n$$


## 5. Complex roots: use the real cosine form

This is **Eq. (3.25)**. When a real-coefficient system has complex-conjugate characteristic roots \(\gamma = |\gamma|e^{j\beta}\) and \(\gamma^* = |\gamma|e^{-j\beta}\), the two complex exponential modes combine into a single real cosine expression via Euler's formula.

- \(|\gamma|\) — growth/decay factor (envelope base); \(|\gamma| < 1\) decays, \(|\gamma| > 1\) grows
- \(\beta\) — discrete-time angular frequency in **radians** per sample
- \(c\) — amplitude scale constant
- \(\theta\) — phase constant

Both \(c\) and \(\theta\) are determined from two initial conditions.

**Use case:** When roots appear as \(re^{\pm j\beta}\) or \(a \pm jb\), convert to polar form and apply this formula.

**Minimal example:** Roots \(0.9e^{\pm j\pi/6}\) give:

$$y_0[n] = c(0.9)^n\cos\!\left(\frac{\pi n}{6} + \theta\right)$$

#### Common Misuse
Two traps appear together: (1) mixing degrees and radians for \(\beta\) and \(\theta\), and (2) omitting the envelope \(|\gamma|^n\) and writing only \(c\cos(\beta n + \theta)\).

$$y_0[n] = \frac{c}{2}|\gamma|^n\left[e^{j(\beta n+\theta)} + e^{-j(\beta n+\theta)}\right] = c|\gamma|^n\cos(\beta n + \theta)$$

---
**📌 Key Takeaways**
- **Eq. (3.21):** \((E^N + a_1E^{N-1}+\cdots+a_N)y_0[n]=0\) — set \(x[n]=0\); solve for \(y_0[n]\) from initial conditions only.
- **Eq. (3.22) & (3.23):** Trial solution \(y_0[n]=c\gamma^n\) leads to characteristic equation \(\gamma^N+a_1\gamma^{N-1}+\cdots+a_N=0\); replace \(E\) with \(\gamma\).
- **Distinct roots:** \(y_0[n]=c_1\gamma_1^n+c_2\gamma_2^n+\cdots+c_N\gamma_N^n\) — one exponential mode per distinct root; constants from \(N\) initial conditions.
- **Repeated root (multiplicity \(r\)):** \(y_0[n]=(c_1+c_2n+\cdots+c_rn^{r-1})\gamma^n\) — powers of \(n\) provide independent modes; never collapse to one constant.
- **Eq. (3.25) — Complex-conjugate roots:** \(y_0[n]=c|\gamma|^n\cos(\beta n+\theta)\) — magnitude \(|\gamma|\) sets envelope, angle \(\beta\) (in radians) sets oscillation rate.

*Next, connect this internal response with the zero-state response to form the total system response.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6OCwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo3LCJtYXgiOjEwfSwia25vd2xlZGdlX3BvaW50cyI6W3siaWQiOiJ6ZXJvX2lucHV0X2RlZmluaXRpb24iLCJsYWJlbCI6Ilplcm8taW5wdXQgcmVzcG9uc2UgYXMgdGhlIGhvbW9nZW5lb3VzIHJlc3BvbnNlIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AxX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJUbyBmaW5kIHRoZSB6ZXJvLWlucHV0IHJlc3BvbnNlIG9mIGFuIExUSUQgZGlmZmVyZW5jZSBlcXVhdGlvbiwgd2hhdCBpcyB0aGUgZmlyc3QgcmVxdWlyZWQgbW92ZT8iLCJvcHRpb25zIjpbIkEuIFNldCBhbGwgaW5pdGlhbCBjb25kaXRpb25zIHRvIHplcm8iLCJCLiBTZXQgdGhlIGlucHV0IFxcKHhbbl1cXCkgdG8gemVybyBhbmQgc29sdmUgdGhlIGhvbW9nZW5lb3VzIGVxdWF0aW9uIiwiQy4gU3Vic3RpdHV0ZSB0aGUgZ2l2ZW4gaW5wdXQgZGlyZWN0bHkgaW50byB0aGUgZGlmZmVyZW5jZSBlcXVhdGlvbiIsIkQuIFRha2UgdGhlIEZvdXJpZXIgdHJhbnNmb3JtIG9mIHRoZSBpbnB1dCJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IlRoZSB6ZXJvLWlucHV0IHJlc3BvbnNlIGlzIGNhdXNlZCBieSBpbnRlcm5hbCBpbml0aWFsIGNvbmRpdGlvbnMgb25seSwgc28gdGhlIGV4dGVybmFsIGlucHV0IGlzIHNldCB0byB6ZXJvLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6Ilplcm8gaW5pdGlhbCBjb25kaXRpb25zIHByb2R1Y2UgdGhlIHplcm8tc3RhdGUgcmVzcG9uc2UsIG5vdCB0aGUgemVyby1pbnB1dCByZXNwb25zZS4iLCJDIjoiVXNpbmcgdGhlIGdpdmVuIGlucHV0IGJlbG9uZ3MgdG8gdG90YWwgb3IgemVyby1zdGF0ZSByZXNwb25zZSB3b3JrLCBub3QgemVyby1pbnB1dCByZXNwb25zZS4iLCJEIjoiVGhpcyBzZWN0aW9uIHNvbHZlcyB0aGUgaG9tb2dlbmVvdXMgZGlmZmVyZW5jZSBlcXVhdGlvbiBpbiB0aGUgdGltZSBkb21haW4uIn0sImhpbnQiOiJUaGUgbmFtZSBzYXlzIHdoaWNoIHNpZ25hbCBpcyB6ZXJvLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMV9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2hpY2ggZXF1YXRpb24gYmVzdCBtYXRjaGVzIHRoZSB0ZXh0Ym9vaydzIGhvbW9nZW5lb3VzIHplcm8taW5wdXQgZXF1YXRpb24gRXEuICgzLjIxKT8iLCJvcHRpb25zIjpbIkEuIFxcKChFXk4rYV8xRV57Ti0xfStcXGNkb3RzK2FfTil5XzBbbl09MFxcKSIsIkIuIFxcKChFXk4rYV8xRV57Ti0xfStcXGNkb3RzK2FfTil4W25dPTBcXCkiLCJDLiBcXCh5XzBbbl09eFtuXStjXFxnYW1tYV5uXFwpIiwiRC4gXFwoUVtFXXlfMFtuXT14W25dXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiRXEuICgzLjIxKSBpcyB0aGUgaG9tb2dlbmVvdXMgb3BlcmF0b3IgZXF1YXRpb24gYWN0aW5nIG9uIFxcKHlfMFtuXVxcKSwgd2l0aCB0aGUgaW5wdXQgcmVtb3ZlZC4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJUaGUgb3BlcmF0b3IgYWN0cyBvbiB0aGUgcmVzcG9uc2UsIG5vdCBvbiB0aGUgaW5wdXQuIiwiQyI6IlRoZSB6ZXJvLWlucHV0IHJlc3BvbnNlIGRvZXMgbm90IGluY2x1ZGUgdGhlIGV4dGVybmFsIGlucHV0LiIsIkQiOiJUaGUgcmlnaHQtaGFuZCBzaWRlIGlzIHplcm8gZm9yIHplcm8taW5wdXQgcmVzcG9uc2UuIn0sImhpbnQiOiJMb29rIGZvciBhbiBlcXVhdGlvbiBpbiBcXCh5XzBbbl1cXCkgd2l0aCByaWdodC1oYW5kIHNpZGUgemVyby4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6ImNoYXJhY3RlcmlzdGljX2VxdWF0aW9uX21vZGVzIiwibGFiZWwiOiJDaGFyYWN0ZXJpc3RpYyBlcXVhdGlvbiBhbmQgbmF0dXJhbCBtb2RlcyIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMl9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2h5IGlzIFxcKHlfMFtuXT1jXFxnYW1tYV5uXFwpIHRoZSBuYXR1cmFsIHRyaWFsIGZvcm0gZm9yIHRoZSB6ZXJvLWlucHV0IHJlc3BvbnNlPyIsIm9wdGlvbnMiOlsiQS4gQWR2YW5jaW5nIFxcKFxcZ2FtbWFeblxcKSBvbmx5IG11bHRpcGxpZXMgaXQgYnkgYSBjb25zdGFudCIsIkIuIEV2ZXJ5IGRpc2NyZXRlLXRpbWUgc2lnbmFsIGlzIHBlcmlvZGljIiwiQy4gSW5pdGlhbCBjb25kaXRpb25zIGFsd2F5cyBmb3JjZSBcXChcXGdhbW1hPTFcXCkiLCJELiBUaGUgaW5wdXQgbXVzdCBiZSBhbiBleHBvbmVudGlhbCJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IlNpbmNlIFxcKEVea1xce1xcZ2FtbWFeblxcfT1cXGdhbW1hXmtcXGdhbW1hXm5cXCksIHNoaWZ0ZWQgY29waWVzIGtlZXAgdGhlIHNhbWUgZm9ybSBhbmQgY2FuIGNhbmNlbCBpbiBhIGhvbW9nZW5lb3VzIGxpbmVhciBlcXVhdGlvbi4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJNb3N0IGV4cG9uZW50aWFscyBhcmUgbm90IHBlcmlvZGljLiIsIkMiOiJcXChcXGdhbW1hXFwpIGlzIGZvdW5kIGZyb20gdGhlIGNoYXJhY3RlcmlzdGljIGVxdWF0aW9uLCBub3QgZm9yY2VkIHRvIDEuIiwiRCI6Ilplcm8taW5wdXQgcmVzcG9uc2UgaXMgZm91bmQgd2l0aCB0aGUgaW5wdXQgc2V0IHRvIHplcm8uIn0sImhpbnQiOiJUaGluayBhYm91dCB3aGF0IHRoZSBhZHZhbmNlIG9wZXJhdG9yIGRvZXMgdG8gYW4gZXhwb25lbnRpYWwuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AyX3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJGb3IgXFwoKEVeMi0wLjZFLTAuMTYpeV8wW25dPTBcXCksIHdoYXQgaXMgdGhlIGNoYXJhY3RlcmlzdGljIGVxdWF0aW9uPyIsIm9wdGlvbnMiOlsiQS4gXFwoRV4yLTAuNkUtMC4xNj0wXFwpIiwiQi4gXFwoXFxnYW1tYV4yLTAuNlxcZ2FtbWEtMC4xNj0wXFwpIiwiQy4gXFwoeV8wW25dXjItMC42eV8wW25dLTAuMTY9MFxcKSIsIkQuIFxcKFxcZ2FtbWFeMi0wLjZcXGdhbW1hPTAuMTZ4W25dXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiUmVwbGFjZSB0aGUgb3BlcmF0b3IgXFwoRVxcKSBieSBcXChcXGdhbW1hXFwpIGluIHRoZSBob21vZ2VuZW91cyBvcGVyYXRvciBwb2x5bm9taWFsLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlxcKEVcXCkgaXMgYW4gb3BlcmF0b3IsIG5vdCB0aGUgcm9vdCB2YXJpYWJsZSBpbiB0aGUgY2hhcmFjdGVyaXN0aWMgZXF1YXRpb24uIiwiQyI6IlRoZSBjaGFyYWN0ZXJpc3RpYyBlcXVhdGlvbiBpcyBpbiBcXChcXGdhbW1hXFwpLCBub3QgaW4gdGhlIHNpZ25hbCB2YWx1ZS4iLCJEIjoiVGhlIHplcm8taW5wdXQgY2hhcmFjdGVyaXN0aWMgZXF1YXRpb24gaGFzIG5vIGlucHV0IHRlcm0uIn0sImhpbnQiOiJDaGFyYWN0ZXJpc3RpYyByb290cyBhcmUgdmFsdWVzIG9mIFxcKFxcZ2FtbWFcXCkuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJkaXN0aW5jdF9yZWFsX3Jvb3RzIiwibGFiZWwiOiJEaXN0aW5jdCByZWFsIHJvb3RzIGdpdmUgb25lIGV4cG9uZW50aWFsIG1vZGUgcGVyIHJvb3QiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDNfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkEgY2hhcmFjdGVyaXN0aWMgcG9seW5vbWlhbCBmYWN0b3JzIGFzIFxcKChcXGdhbW1hKzAuMikoXFxnYW1tYS0wLjgpPTBcXCkuIFdoaWNoIHplcm8taW5wdXQgZm9ybSBzaG91bGQgYmUgd3JpdHRlbiBiZWZvcmUgYXBwbHlpbmcgaW5pdGlhbCBjb25kaXRpb25zPyIsIm9wdGlvbnMiOlsiQS4gXFwoeV8wW25dPWNfMSgtMC4yKV5uK2NfMigwLjgpXm5cXCkiLCJCLiBcXCh5XzBbbl09YygtMC4yKzAuOCleblxcKSIsIkMuIFxcKHlfMFtuXT0oY18xK2NfMm4pKDAuOCleblxcKSIsIkQuIFxcKHlfMFtuXT1jXFxjb3MoMC44bi0wLjIpXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiRGlzdGluY3QgcmVhbCByb290cyBcXCgtMC4yXFwpIGFuZCBcXCgwLjhcXCkgcHJvZHVjZSB0d28gc2VwYXJhdGUgZXhwb25lbnRpYWwgbW9kZXMuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiWW91IGRvIG5vdCBhZGQgZGlzdGluY3Qgcm9vdHMgaW50byBvbmUgcm9vdC4iLCJDIjoiVGhlIFxcKChjXzErY18ybilcXGdhbW1hXm5cXCkgZm9ybSBpcyBmb3IgcmVwZWF0ZWQgcm9vdHMuIiwiRCI6IkNvc2luZSBmb3JtIGlzIHVzZWQgZm9yIGNvbXBsZXgtY29uanVnYXRlIHJvb3RzLiJ9LCJoaW50IjoiT25lIGRpc3RpbmN0IHJvb3QgbWVhbnMgb25lIG1vZGUuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJyZXBlYXRlZF9yb290cyIsImxhYmVsIjoiUmVwZWF0ZWQgcm9vdHMgcmVxdWlyZSBwb3dlcnMgb2YgbiIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJtZWRpdW0iLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3A0X3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJUaGUgY2hhcmFjdGVyaXN0aWMgZXF1YXRpb24gaXMgXFwoKFxcZ2FtbWErMyleMj0wXFwpLiBXaGljaCByZXNwb25zZSBmb3JtIGlzIGNvcnJlY3Q/Iiwib3B0aW9ucyI6WyJBLiBcXCh5XzBbbl09KGNfMStjXzJuKSgtMyleblxcKSIsIkIuIFxcKHlfMFtuXT1jXzEoLTMpXm4rY18yKC0zKV5uXFwpIiwiQy4gXFwoeV8wW25dPWNfMSgtMylebitjXzIoMyleblxcKSIsIkQuIFxcKHlfMFtuXT1jKC02KV5uXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiQSByZXBlYXRlZCByb290IG9mIG11bHRpcGxpY2l0eSAyIG5lZWRzIHR3byBpbmRlcGVuZGVudCBtb2RlczogXFwoKC0zKV5uXFwpIGFuZCBcXChuKC0zKV5uXFwpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IlRob3NlIHR3byB0ZXJtcyBjb2xsYXBzZSBpbnRvIFxcKChjXzErY18yKSgtMyleblxcKSwgc28gdGhleSBhcmUgbm90IGluZGVwZW5kZW50LiIsIkMiOiJUaGUgb25seSByb290IGlzIFxcKC0zXFwpLCBub3QgYm90aCBcXCgtM1xcKSBhbmQgXFwoM1xcKS4iLCJEIjoiTXVsdGlwbGljaXR5IGRvZXMgbm90IG1lYW4gZG91YmxpbmcgdGhlIHJvb3QuIn0sImhpbnQiOiJSZXBlYXRlZCByb290cyBhZGQgcG93ZXJzIG9mIFxcKG5cXCksIG5vdCBuZXcgcm9vdCB2YWx1ZXMuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6Indyb25nX3ZzX3JpZ2h0X3Zpc3VhbF9jaGVjayIsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwNF9xMiIsInR5cGUiOiJzaG9ydF9hbnN3ZXIiLCJzdGVtIjoiQSBjbGFzc21hdGUgd3JpdGVzIFxcKHlfMFtuXT1jXzFcXGdhbW1hXm4rY18yXFxnYW1tYV5uXFwpIGZvciBhIHJlcGVhdGVkIHJvb3Qgb2YgbXVsdGlwbGljaXR5IDIuIEV4cGxhaW4gcHJlY2lzZWx5IHdoeSB0aGlzIGlzIHdyb25nIGFuZCBnaXZlIHRoZSBjb3JyZWN0ZWQgZm9ybS4iLCJpZGVhbF9hbnN3ZXIiOiJUaGUgdHdvIHRlcm1zIGFyZSBub3QgaW5kZXBlbmRlbnQgYmVjYXVzZSBcXChjXzFcXGdhbW1hXm4rY18yXFxnYW1tYV5uPShjXzErY18yKVxcZ2FtbWFeblxcKSwgc28gaXQgb25seSBnaXZlcyBvbmUgbW9kZS4gRm9yIG11bHRpcGxpY2l0eSAyLCB0aGUgY29ycmVjdCBmb3JtIGlzIFxcKHlfMFtuXT0oY18xK2NfMm4pXFxnYW1tYV5uXFwpLiIsImdyYWRpbmdfcnVicmljIjpbIk11c3Qgc3RhdGUgdGhhdCB0aGUgdHdvIHdyaXR0ZW4gdGVybXMgY29sbGFwc2UgaW50byBvbmUgbW9kZSIsIk11c3QgbWVudGlvbiBpbmRlcGVuZGVuY2Ugb3IgdGhlIG5lZWQgZm9yIHR3byBjb25zdGFudHMiLCJNdXN0IGdpdmUgXFwoKGNfMStjXzJuKVxcZ2FtbWFeblxcKSBhcyB0aGUgY29ycmVjdGVkIG11bHRpcGxpY2l0eS0yIGZvcm0iXSwiZXhwbGFuYXRpb24iOiJUaGlzIGNhdGNoZXMgdGhlIG1vc3QgY29tbW9uIHJlcGVhdGVkLXJvb3QgdHJhcC4iLCJoaW50IjoiVHJ5IGZhY3RvcmluZyBvdXQgXFwoXFxnYW1tYV5uXFwpLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoiY29tcGxleF9jb25qdWdhdGVfcm9vdHMiLCJsYWJlbCI6IkNvbXBsZXgtY29uanVnYXRlIHJvb3RzIGdpdmUgYW4gZXhwb25lbnRpYWxseSBzY2FsZWQgY29zaW5lIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3A1X3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJBIHJlYWwtY29lZmZpY2llbnQgc3lzdGVtIGhhcyBjaGFyYWN0ZXJpc3RpYyByb290cyBcXCgwLjllXntcXHBtIGpcXHBpLzZ9XFwpLiBXaGljaCByZWFsLWZvcm0gemVyby1pbnB1dCByZXNwb25zZSBtYXRjaGVzIEVxLiAoMy4yNSk/Iiwib3B0aW9ucyI6WyJBLiBcXCh5XzBbbl09YygwLjkpXm5cXGNvcyhcXHBpIG4vNitcXHRoZXRhKVxcKSIsIkIuIFxcKHlfMFtuXT1jXFxjb3MoMC45bitcXHBpLzYrXFx0aGV0YSlcXCkiLCJDLiBcXCh5XzBbbl09YyhcXHBpLzYpXm5cXGNvcygwLjluK1xcdGhldGEpXFwpIiwiRC4gXFwoeV8wW25dPWMoMC45KV5uXFxzaW4oXFx0aGV0YSlcXCkiXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJGb3Igcm9vdHMgXFwofFxcZ2FtbWF8ZV57XFxwbSBqXFxiZXRhfVxcKSwgdGhlIHJlYWwgZm9ybSBpcyBcXChjfFxcZ2FtbWF8Xm5cXGNvcyhcXGJldGEgbitcXHRoZXRhKVxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJJdCBwdXRzIHRoZSBtYWduaXR1ZGUgaW5zaWRlIHRoZSBjb3NpbmUgYXJndW1lbnQgaW5zdGVhZCBvZiBhcyB0aGUgZW52ZWxvcGUuIiwiQyI6Ikl0IGluY29ycmVjdGx5IHJhaXNlcyB0aGUgYW5nbGUgdG8gdGhlIHBvd2VyIFxcKG5cXCkuIiwiRCI6IlRoZSBvc2NpbGxhdGlvbiBkZXBlbmRzIG9uIFxcKG5cXCksIHNvIHRoZSBjb3NpbmUgYXJndW1lbnQgbXVzdCBpbmNsdWRlIFxcKFxcYmV0YSBuXFwpLiJ9LCJoaW50IjoiTWFnbml0dWRlIGNvbnRyb2xzIGVudmVsb3BlOyBhbmdsZSBjb250cm9scyBvc2NpbGxhdGlvbi4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoidmlzdWFsX3BhdHRlcm5fcmVjb2duaXRpb25fY2hlY2siLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDVfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6Ik9ic2VydmUgYSBwbG90dGVkIGRpc2NyZXRlLXRpbWUgcmVzcG9uc2Ugd2hvc2Ugc2FtcGxlcyBvc2NpbGxhdGUgd2hpbGUgZml0dGluZyBpbnNpZGUgYSBkZWNheWluZyBlbnZlbG9wZS4gV2hpY2ggcm9vdCBwYXR0ZXJuIGlzIG1vc3QgY29uc2lzdGVudCB3aXRoIHRoYXQgYmVoYXZpb3I/Iiwib3B0aW9ucyI6WyJBLiBBIHBvc2l0aXZlIHJlYWwgcm9vdCB3aXRoIG1hZ25pdHVkZSBsZXNzIHRoYW4gMSIsIkIuIEEgbmVnYXRpdmUgcmVhbCByb290IHdpdGggbWFnbml0dWRlIGdyZWF0ZXIgdGhhbiAxIiwiQy4gQSBjb21wbGV4LWNvbmp1Z2F0ZSBwYWlyIHdpdGggbWFnbml0dWRlIGxlc3MgdGhhbiAxIiwiRC4gQSByZXBlYXRlZCByZWFsIHJvb3QgYXQgXFwoXFxnYW1tYT0wXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQyIsImV4cGxhbmF0aW9uIjoiQ29tcGxleC1jb25qdWdhdGUgcm9vdHMgY3JlYXRlIG9zY2lsbGF0aW9uLCBhbmQgbWFnbml0dWRlIGxlc3MgdGhhbiAxIGNyZWF0ZXMgZGVjYXkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiQSBwb3NpdGl2ZSByZWFsIHJvb3QgZ2l2ZXMgbm9uLW9zY2lsbGF0b3J5IGV4cG9uZW50aWFsIGJlaGF2aW9yLiIsIkIiOiJBIG5lZ2F0aXZlIHJlYWwgcm9vdCBhbHRlcm5hdGVzIHNpZ24sIGJ1dCBtYWduaXR1ZGUgZ3JlYXRlciB0aGFuIDEgZ3Jvd3MgcmF0aGVyIHRoYW4gZGVjYXlzLiIsIkQiOiJBIHJvb3QgYXQgemVybyBkb2VzIG5vdCBwcm9kdWNlIGEgc3VzdGFpbmVkIGRlY2F5aW5nIHNpbnVzb2lkYWwgb3NjaWxsYXRpb24uIn0sImhpbnQiOiJPc2NpbGxhdGlvbiBwb2ludHMgdG8gYW4gYW5nbGU7IGRlY2F5IHBvaW50cyB0byBtYWduaXR1ZGUgYmVsb3cgMS4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoidmlzdWFsX29yX2RlbW9fb2JzZXJ2YXRpb25fY2hlY2siLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6ImluaXRpYWxfY29uZGl0aW9uc19jb25zdGFudHMiLCJsYWJlbCI6IkluaXRpYWwgY29uZGl0aW9ucyBkZXRlcm1pbmUgYXJiaXRyYXJ5IGNvbnN0YW50cyIsImltcG9ydGFuY2UiOiJtZWRpdW0iLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3A2X3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJBIHNlY29uZC1vcmRlciB6ZXJvLWlucHV0IHJlc3BvbnNlIGhhcyBmb3JtIFxcKHlfMFtuXT1jXzFcXGdhbW1hXzFebitjXzJcXGdhbW1hXzJeblxcKS4gV2hhdCB1c3VhbGx5IGRldGVybWluZXMgXFwoY18xXFwpIGFuZCBcXChjXzJcXCk/Iiwib3B0aW9ucyI6WyJBLiBUaGUgdHdvIGNoYXJhY3RlcmlzdGljIHJvb3RzIGFsb25lIiwiQi4gVGhlIGlucHV0IHNpZ25hbCBcXCh4W25dXFwpIGZvciBcXChuXFxnZSAwXFwpIiwiQy4gVHdvIGluaXRpYWwgb3IgYXV4aWxpYXJ5IGNvbmRpdGlvbnMiLCJELiBUaGUgc2FtcGxpbmcgZnJlcXVlbmN5IG9ubHkiXSwiY29ycmVjdF9vcHRpb24iOiJDIiwiZXhwbGFuYXRpb24iOiJUaGUgcm9vdHMgZGV0ZXJtaW5lIHRoZSBtb2RlcywgYnV0IHRoZSBpbml0aWFsIGNvbmRpdGlvbnMgZGV0ZXJtaW5lIHRoZSB3ZWlnaHRzIG9mIHRob3NlIG1vZGVzLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlJvb3RzIGdpdmUgXFwoXFxnYW1tYV8xXm5cXCkgYW5kIFxcKFxcZ2FtbWFfMl5uXFwpLCBub3QgdGhlIGNvbnN0YW50cy4iLCJCIjoiVGhlIHplcm8taW5wdXQgcmVzcG9uc2UgaWdub3JlcyB0aGUgZXh0ZXJuYWwgaW5wdXQuIiwiRCI6IlNhbXBsaW5nIGZyZXF1ZW5jeSBpcyBub3Qgd2hhdCBmaXhlcyB0aGVzZSBhcmJpdHJhcnkgY29uc3RhbnRzIGluIHRoaXMgbWV0aG9kLiJ9LCJoaW50IjoiTW9kZSBzaGFwZXMgY29tZSBmcm9tIHJvb3RzOyBtb2RlIHdlaWdodHMgY29tZSBmcm9tIGNvbmRpdGlvbnMuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfV19" style="display:none;"></div>%%KC_END%%
