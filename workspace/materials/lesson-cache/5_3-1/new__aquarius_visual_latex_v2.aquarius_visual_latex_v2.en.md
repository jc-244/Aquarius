%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6InJlYWN0X2RlbW8iLCJyYXRpb25hbGUiOiJUaGlzIHNlY3Rpb24gaXMgbW9zdGx5IHN5bWJvbGljLCBidXQgc3R1ZGVudHMgb2Z0ZW4gZmFpbCB0byBjb25uZWN0IHRoZSBhbGdlYnJhaWMgZm9ybXVsYSBIW3pdID0gUFt6XS9RW3pdIHdpdGggdGhlIHRyYW5zZm9ybWVkLXN5c3RlbSBmbG93IFhbel0gLT4gSFt6XSAtPiBZW3pdLiBBIFJlYWN0ICsgQ2FudmFzIGJsb2NrIGRpYWdyYW0gZGVtbyBpcyB0aGUgc3Ryb25nZXN0IHZpc3VhbCBiZWNhdXNlIHRoZSBzdHVkZW50IGNhbiBjaGFuZ2UgSFt6XSBhbmQgWFt6XSwgdGhlbiBpbW1lZGlhdGVseSBzZWUgWVt6XSA9IEhbel1YW3pdLiBUZXh0Ym9vayBmaWd1cmVzIGV4aXN0IGluIHRoZSBwYWdlIE9DUiwgYnV0IG5vIHByZWNpc2lvbi1jcm9wcGVkIGZpZ3VyZSBhc3NldCBpcyBhdmFpbGFibGUsIGFuZCBmdWxsLXBhZ2Ugc2NyZWVuc2hvdHMgbXVzdCBub3QgYmUgdXNlZC4iLCJjcmFtIjoiVXNlIHRoZSBkZW1vIHRvIHJlY29nbml6ZSB0aGUgZXhhbSB3b3JrZmxvdyBxdWlja2x5OiBkaWZmZXJlbmNlIGVxdWF0aW9uIC0+IEhbel0gLT4gbXVsdGlwbHkgYnkgWFt6XSAtPiBpbnZlcnNlIHRyYW5zZm9ybS4iLCJzdGFuZGFyZCI6IlVzZSB0aGUgZGVtbyB0byBjb25uZWN0IGVhY2ggYWxnZWJyYWljIHBpZWNlIHRvIHRoZSBibG9jayBkaWFncmFtIGFuZCBvbmUgcmVwcmVzZW50YXRpdmUgcmVzcG9uc2UgY2FsY3VsYXRpb24uIiwidG9wX3Njb3JlIjoiVXNlIHRoZSBkZW1vIHRvIGV4cG9zZSB0cmFwczogd3JvbmcgbnVtZXJhdG9yL2Rlbm9taW5hdG9yIGV4dHJhY3Rpb24sIGZvcmdldHRpbmcgemVyby1zdGF0ZSBhc3N1bXB0aW9ucywgYW5kIGNvbmZ1c2luZyBkZWxheSB3aXRoIGFkdmFuY2UuIn0=" style="display:none;"></div>%%KC_END%%
# Zero-State Response of LTID Systems: The Transfer Function

> **Section Objective:** Learn how a zero-state LTID system response is found by converting a difference equation into a transfer function \(H[z]\).

---

## Concepts In This Section

- LTID difference equation
- Zero-state assumption
- Transfer function \(H[z]\)
- Transformed-system representation
- Inverse z-transform interpretation
- Unit-delay transfer function

## 1. The LTID Difference Equation Model

An Nth-order linear time-invariant discrete-time (LTID) system is modeled by a difference equation written in **advance form** — using terms like \(y[n+N]\) and \(x[n+N]\).

The equation has two sides:
- **Left side (output terms):** coefficients \(a_k\) multiply past and present output values \(y[n+k]\).
- **Right side (input terms):** coefficients \(b_k\) multiply past and present input values \(x[n+k]\).

#### Minimal Example

For \(N = 2\), the model contains output terms \(y[n+2]\), \(y[n+1]\), \(y[n]\) on the left, and matching input terms \(x[n+2]\), \(x[n+1]\), \(x[n]\) on the right. The coefficients \(a_1, a_2\) and \(b_0, b_1, b_2\) are constants determined by the system design.

## 2. Zero-state response uses the delay form

**Eq. (5.24) — Advance-form LTID difference equation.**

- This is the system model: it defines how output \(y[n]\) relates to input \(x[n]\) for all \(n\).
- \(y[n]\) is the system output; \(x[n]\) is the system input; \(N\) is the system order.
- Coefficients \(a_k\) belong to the **output (feedback) side**; coefficients \(b_k\) belong to the **input-driving side**.
- **Exam trigger:** Given a difference equation, your first task is to form \(H[z]\) — this equation is your starting point.
- **Common misuse:** Swapping — putting output coefficients \(a_k\) into the numerator or input coefficients \(b_k\) into the denominator of \(H[z]\). Output side → denominator; input side → numerator.

$$y[n+N]+a_1y[n+N-1]+\cdots+a_{N-1}y[n+1]+a_Ny[n]=b_0x[n+N]+\cdots+b_{N-1}x[n+1]+b_Nx[n]$$

## 3. Transfer function from the difference equation

**Zero-state response** means all stored past output values are zero before the input begins: \(y[-r] = 0\) for \(r = 1, \ldots, N\). The input is also assumed **causal**, so past input samples are zero: \(x[-r] = 0\) for the same range.

### WHY THIS MATTERS

When you apply the z-transform to a delayed term like \(y[n-m]\), the general formula produces extra initial-condition terms. Under zero-state conditions, those extra terms vanish — because every needed past value is zero. The transform then maps \(y[n-m]\) cleanly to \(z^{-m}Y[z]\) with no remainder.

This is why the **delay form** (Eq. 5.25) is the practical starting point for deriving \(H[z]\).

#### Minimal Example

For \(N = 2\): zero state means \(y[-1] = y[-2] = 0\), and causal input gives \(x[-1] = x[-2] = 0\). No initial-condition terms appear in the transform.

## 4. Finding the zero-state response

**Eq. (5.25) — Delay-form LTID difference equation.**

- \(y[n-m]\): output delayed by \(m\) samples; \(x[n-m]\): input delayed by \(m\) samples.
- \(a_k\): output-side coefficients (denominator of \(H[z]\)); \(b_k\): input-side coefficients (numerator of \(H[z]\)).
- **When to use:** This is the form you z-transform to derive \(H[z]\) under zero-state conditions.
- **Exam trigger:** Each delayed sample \(y[n-m]\) or \(x[n-m]\) becomes a \(z^{-m}\) factor after the transform.
- **Common misuse:** Applying the zero-state transfer-function shortcut \(H[z] = Y[z]/X[z]\) when nonzero initial conditions are present — that shortcut is only valid under zero-state assumptions.

$$y[n]+a_1y[n-1]+\cdots+a_Ny[n-N]=b_0x[n]+b_1x[n-1]+\cdots+b_Nx[n-N]$$

## 5. Unit delay has transfer function 1/z

To derive \(H[z]\), take the z-transform of Eq. (5.25) under zero-state conditions. Each delayed term \(y[n-m]\) becomes \(z^{-m}Y[z]\) and each \(x[n-m]\) becomes \(z^{-m}X[z]\).

Collect all output terms on the left:

$$\left(1 + a_1 z^{-1} + \cdots + a_N z^{-N}\right)Y[z] = Q'[z]\,Y[z]$$

Collect all input terms on the right:

$$\left(b_0 + b_1 z^{-1} + \cdots + b_N z^{-N}\right)X[z] = P'[z]\,X[z]$$

Divide both sides by \(X[z]\) and multiply through by \(z^N\) to clear negative powers. The result is \(H[z] = P[z]/Q[z]\), where:
- **Numerator \(P[z]\)** comes from the **input-side** coefficients \(b_k\).
- **Denominator \(Q[z]\)** comes from the **output-side** coefficients \(a_k\) plus the leading \(z^N\) term.

### COMMON MISTAKE

Students often write \(z^N + a_1 z^{N-1} + \cdots\) in the numerator because it appears first in the equation. That is wrong — it multiplies \(Y[z]\), so it belongs in the **denominator**.

$$H[z]=\frac{P[z]}{Q[z]}=\frac{b_0z^N+b_1z^{N-1}+\cdots+b_{N-1}z+b_N}{z^N+a_1z^{N-1}+\cdots+a_{N-1}z+a_N}$$
***Eq. (5.26) — Zero-state transfer function of an LTID system.**

- \(H[z]\) is the ratio of the output z-transform to the input z-transform under zero-state conditions.
- \(P[z]\): input-side polynomial with coefficients \(b_0, b_1, \ldots, b_N\).
- \(Q[z]\): output-side polynomial with leading coefficient 1 and coefficients \(a_1, \ldots, a_N\).
- **When to use:** Whenever a problem gives a linear constant-coefficient difference equation and asks for the zero-state response, transfer function, or system response via z-transforms.
- **Common misuse:** Forgetting to multiply through by \(z^N\) before reading the polynomial ratio — leaving the result in \(z^{-k}\) form is valid but can cause sign or ordering errors when factoring.*

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="interactive_demo" data-teaching-role="concept_anchor" data-visual-use-b64="eyJjcmFtIjoiTGV0IHN0dWRlbnRzIHByYWN0aWNlIHRoZSBmYXN0ZXN0IHdvcmtmbG93OiBlbnRlciBjb2VmZmljaWVudHMsIHJlYWQgSFt6XSwgbXVsdGlwbHkgYnkgWFt6XS4iLCJzdGFuZGFyZCI6IlNob3cgaG93IHRoZSBibG9jayBkaWFncmFtIFhbel0gLT4gSFt6XSAtPiBZW3pdIGNvcnJlc3BvbmRzIHRvIHRoZSBmb3JtdWxhIFlbel0gPSBIW3pdWFt6XS4iLCJ0b3Bfc2NvcmUiOiJBZGQgYSB0b2dnbGUgdGhhdCBoaWdobGlnaHRzIG51bWVyYXRvciBwb2xlcy96ZXJvcyBhbmQgZGVub21pbmF0b3IgZmFjdG9ycyBzbyBzdHVkZW50cyBjYXRjaCBleHRyYWN0aW9uIGFuZCBmYWN0b3JpbmcgbWlzdGFrZXMuIn0=" style="display:none;"></div><div class="kc-interactive-demo" data-demo-b64="eyJ0eXBlIjoiaW50ZXJhY3RpdmVfZGVtbyIsInRlYWNoaW5nX3JvbGUiOiJjb25jZXB0X2FuY2hvciIsIm1vZGVfc3BlY2lmaWNfdmlzdWFsX3VzZSI6eyJjcmFtIjoiTGV0IHN0dWRlbnRzIHByYWN0aWNlIHRoZSBmYXN0ZXN0IHdvcmtmbG93OiBlbnRlciBjb2VmZmljaWVudHMsIHJlYWQgSFt6XSwgbXVsdGlwbHkgYnkgWFt6XS4iLCJzdGFuZGFyZCI6IlNob3cgaG93IHRoZSBibG9jayBkaWFncmFtIFhbel0gLT4gSFt6XSAtPiBZW3pdIGNvcnJlc3BvbmRzIHRvIHRoZSBmb3JtdWxhIFlbel0gPSBIW3pdWFt6XS4iLCJ0b3Bfc2NvcmUiOiJBZGQgYSB0b2dnbGUgdGhhdCBoaWdobGlnaHRzIG51bWVyYXRvciBwb2xlcy96ZXJvcyBhbmQgZGVub21pbmF0b3IgZmFjdG9ycyBzbyBzdHVkZW50cyBjYXRjaCBleHRyYWN0aW9uIGFuZCBmYWN0b3JpbmcgbWlzdGFrZXMuIn0sImRlbW9fc3BlYyI6eyJ0aXRsZSI6IlRyYW5zZmVyIEZ1bmN0aW9uIGFzIGEgei1Eb21haW4gU3lzdGVtIEJsb2NrIiwiZnJhbWV3b3JrIjoicmVhY3QiLCJjYW52YXNfbGF5b3V0IjoibGVmdF90b19yaWdodF9ibG9ja19kaWFncmFtIiwiYmxvY2tzIjpbeyJpZCI6ImlucHV0IiwibGFiZWwiOiJYW3pdIiwidHlwZSI6InNvdXJjZSJ9LHsiaWQiOiJzeXN0ZW0iLCJsYWJlbCI6Ikhbel0iLCJ0eXBlIjoic3lzdGVtX2JveCJ9LHsiaWQiOiJvdXRwdXQiLCJsYWJlbCI6Illbel0iLCJ0eXBlIjoic2luayJ9XSwiZWRpdGFibGVfZmllbGRzIjp7Im51bWVyYXRvciI6eyJsYWJlbCI6Ik51bWVyYXRvciBQW3pdOiBiMMK3esKyICsgYjHCt3ogKyBiMiIsImRlZmF1bHRzIjp7ImIwIjowLCJiMSI6MSwiYjIiOjAuMzJ9LCJub3RlIjoiSW5wdXQtc2lkZSBjb2VmZmljaWVudHMg4oaSIG51bWVyYXRvciJ9LCJkZW5vbWluYXRvciI6eyJsYWJlbCI6IkRlbm9taW5hdG9yIFFbel06IHrCsiArIGExwrd6ICsgYTIiLCJkZWZhdWx0cyI6eyJhMSI6MSwiYTIiOjAuMTZ9LCJub3RlIjoiT3V0cHV0LXNpZGUgY29lZmZpY2llbnRzIOKGkiBkZW5vbWluYXRvciJ9LCJpbnB1dF90cmFuc2Zvcm0iOnsibGFiZWwiOiJJbnB1dCBYW3pdIiwiZGVmYXVsdCI6InogLyAoeiArIDAuNSkiLCJub3RlIjoiQ29ycmVzcG9uZHMgdG8geFtuXSA9ICgtMC41KV5uIHVbbl0ifX0sImxpdmVfZGlzcGxheSI6WyJIW3pdID0gUFt6XSAvIFFbel0gKHNob3duIHN5bWJvbGljYWxseSkiLCJZW3pdID0gSFt6XSDCtyBYW3pdIChzaG93biBzeW1ib2xpY2FsbHkpIl0sInRyYXBfdG9nZ2xlIjp7ImxhYmVsIjoiU2hvdyBDb21tb24gVHJhcDogU3dhcHBlZCBOdW1lcmF0b3IvRGVub21pbmF0b3IiLCJiZWhhdmlvciI6IlN3YXBzIFBbel0gYW5kIFFbel0gaW4gdGhlIGRpc3BsYXksIGhpZ2hsaWdodHMgaW4gcmVkLCBzaG93cyBhbm5vdGF0aW9uOiAnT3V0cHV0LXNpZGUgY29lZmZpY2llbnRzIGJlbG9uZyBpbiBRW3pdIChkZW5vbWluYXRvcikuIElucHV0LXNpZGUgY29lZmZpY2llbnRzIGJlbG9uZyBpbiBQW3pdIChudW1lcmF0b3IpLiBUaGlzIHN3YXAgaXMgd3JvbmcuJyJ9LCJzdHlsZSI6Im1pbmltYWwgYWNhZGVtaWMsIG5vIGRlY29yYXRpdmUgZ3JhcGhpY3MsIHNob3J0IG1hdGhlbWF0aWNhbCBsYWJlbHMgb25seSJ9fQ=="></div>%%KC_END%%

## 4. Finding the Zero-State Response

The transfer function method replaces direct recurrence solving with an algebraic workflow. Using **Example 5.6** as a guide:

**Step 1 — Read \(H[z]\):** From the difference equation, extract \(H[z] = \dfrac{z + 0.32}{z^2 + z + 0.16}\).

**Step 2 — Find \(X[z]\):** For input \(x[n] = (-0.5)^n u[n]\), the z-transform table gives \(X[z] = \dfrac{z}{z + 0.5}\).

**Step 3 — Multiply:** Compute \(Y[z] = H[z]\,X[z]\).

**Step 4 — Inverse transform:** Apply partial fractions to \(Y[z]/z\), then use transform tables to recover \(y[n]\).

The final zero-state response for this example is:

$$y[n] = \left(\frac{2}{3}(-0.2)^n - \frac{8}{3}(-0.8)^n + 2(-0.5)^n\right)u[n]$$

### EXAM TIP

Each pole (root of the denominator of \(Y[z]\)) typically produces one exponential term in \(y[n]\). Count the poles to anticipate how many terms appear in the partial-fraction expansion.

$$x[n]=\frac{1}{2\pi j}\oint X[z]z^{n-1}\,dz$$
***Eq. (5.28) — Inverse z-transform as a superposition of exponentials.**

- \(X[z]\): the z-transform of the signal, acting as a weighting function over exponential components.
- \(z\): a complex variable; each value of \(z\) corresponds to one exponential component \(z^n\).
- The contour integral sums all weighted exponential contributions around a closed path in the complex plane.
- \(j = \sqrt{-1}\): the imaginary unit.
- **Conceptual use:** This formula explains *why* multiplying by \(H[z]\) gives the output — the system scales each exponential component \(z^n\) by the factor \(H[z]\), so the total output transform is \(H[z]X[z]\).
- **Common misuse:** Treating this contour integral as the standard exam computation method. In practice, use z-transform tables and partial fractions — not direct contour integration.*

$$Y[z]=H[z]X[z]$$
***The transformed-system product rule.**

Each exponential component of \(X[z]\) is scaled by the system's response \(H[z]\) at that frequency. The total output transform is therefore the product \(H[z]X[z]\).

- **Exam trigger:** If all initial conditions are zero and both \(H[z]\) and \(X[z]\) are known, multiply them first, then inverse-transform the result.
- **Common misuse 1:** Writing \(Y[z] = H[z] + X[z]\) — system response in the z-domain is a product, not a sum.
- **Common misuse 2:** Using this formula when the problem asks for the **total response** with nonzero initial conditions — this formula gives only the zero-state component.*

## 5. Unit Delay Has Transfer Function \(1/z\)

A **unit delay** is a system whose output is the input shifted one sample later: \(y[n] = x[n-1]\).

Under causal zero-state conditions, the z-transform delay property gives:

$$\mathcal{Z}\{x[n-1]\} = z^{-1}X[z]$$

Therefore \(Y[z] = z^{-1}X[z]\), and the transfer function is:

$$H[z] = \frac{Y[z]}{X[z]} = z^{-1} = \frac{1}{z}$$

This is why block diagrams label a unit-delay element as \(1/z\).

#### Minimal Example

If the input has a unit pulse at \(n = 0\) (i.e., \(x[n] = \delta[n]\)), the delayed output has that pulse at \(n = 1\) (i.e., \(y[n] = \delta[n-1]\)). The signal is shifted exactly one sample to the right.

#### Note

This is a **one-sample discrete-time delay** — not a continuous-time delay. The shift is by one index step, not by a time duration.

$$H[z]=\frac{1}{z}$$
***Transfer function of an ideal one-sample (unit) delay.**

- \(H[z] = Y[z]/X[z]\): the ratio of output to input transforms under zero-state conditions.
- **When to use:** Whenever a system block delays a discrete-time signal by exactly one sample.
- **Exam trigger:** Words like 'unit delay', 'one-sample delay', or a system equation \(y[n] = x[n-1]\) all point to \(H[z] = 1/z\).
- **Common misuse:** Writing \(H[z] = z\) instead of \(1/z\). Under the z-transform convention used here, \(z\) corresponds to an **advance** (shifting the signal earlier), not a delay. A delay is always a negative power of \(z\).*

---
**📌 Key Takeaways**
- **Delay-form difference equation (Eq. 5.25):** \(y[n] + a_1 y[n-1] + \cdots + a_N y[n-N] = b_0 x[n] + \cdots + b_N x[n-N]\) — z-transform this under zero-state conditions to derive \(H[z]\).
- **Transfer function (Eq. 5.26):** \(H[z] = P[z]/Q[z]\) where \(P[z]\) uses input coefficients \(b_k\) (numerator) and \(Q[z]\) uses output coefficients \(a_k\) (denominator) — never swap them.
- **Zero-state output (product rule):** \(Y[z] = H[z]X[z]\) — multiply transforms first, then inverse-transform using partial fractions or tables.
- **Inverse z-transform interpretation (Eq. 5.28):** \(x[n] = \frac{1}{2\pi j}\oint X[z]z^{n-1}\,dz\) — signals are weighted sums of exponentials \(z^n\); \(H[z]\) scales each component.
- **Unit-delay transfer function:** \(H[z] = 1/z\) — one-sample discrete-time delay; \(H[z] = z\) would be an advance, not a delay.

*Next, we use transfer functions to test stability and connect pole locations to system behavior.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6OCwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo3LCJtYXgiOjl9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6Inplcm9fc3RhdGVfZGVsYXlfZm9ybSIsImxhYmVsIjoiWmVyby1zdGF0ZSBhc3N1bXB0aW9ucyBhbmQgZGVsYXktZm9ybSBkaWZmZXJlbmNlIGVxdWF0aW9uIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoienNfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoeSBkb2VzIHRoZSB6ZXJvLXN0YXRlIGRlcml2YXRpb24gYXZvaWQgZXh0cmEgaW5pdGlhbC1jb25kaXRpb24gdGVybXMgd2hlbiB0cmFuc2Zvcm1pbmcgXFwoeVtuLW1dXFwpIGFuZCBcXCh4W24tbV1cXCk/Iiwib3B0aW9ucyI6WyJBLiBCZWNhdXNlIGFsbCBcXChhX2tcXCkgYW5kIFxcKGJfa1xcKSBjb2VmZmljaWVudHMgYXJlIHplcm8iLCJCLiBCZWNhdXNlIFxcKHlbLXJdID0gMFxcKSBhbmQgY2F1c2FsIGlucHV0IGdpdmVzIFxcKHhbLXJdID0gMFxcKSBmb3IgdGhlIG5lZWRlZCBwYXN0IHNhbXBsZXMiLCJDLiBCZWNhdXNlIHRoZSB6LXRyYW5zZm9ybSBjYW5ub3QgcmVwcmVzZW50IGluaXRpYWwgY29uZGl0aW9ucyIsIkQuIEJlY2F1c2UgZXZlcnkgTFRJRCBzeXN0ZW0gaXMgYXV0b21hdGljYWxseSBzdGFibGUiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJaZXJvIHN0YXRlIG1lYW5zIHRoZSBzdG9yZWQgcGFzdCBvdXRwdXQgdmFsdWVzIGFyZSB6ZXJvLCBhbmQgY2F1c2FsIGlucHV0IG1ha2VzIHRoZSBuZWVkZWQgcGFzdCBpbnB1dCB2YWx1ZXMgemVyby4gVGhhdCBpcyB3aHkgZGVsYXllZCB0ZXJtcyB0cmFuc2Zvcm0gY2xlYW5seSBpbnRvIHBvd2VycyBvZiBcXCh6XnstMX1cXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhlIHN5c3RlbSBjb2VmZmljaWVudHMgYXJlIGdlbmVyYWxseSBub3QgemVyby4iLCJDIjoiVGhlIHotdHJhbnNmb3JtIGNhbiBpbmNsdWRlIGluaXRpYWwtY29uZGl0aW9uIHRlcm1zOyB6ZXJvIHN0YXRlIGlzIHdoYXQgcmVtb3ZlcyB0aGVtIGhlcmUuIiwiRCI6IlN0YWJpbGl0eSBpcyBhIHNlcGFyYXRlIHByb3BlcnR5IGFuZCBpcyBub3QgYXNzdW1lZCBpbiB0aGlzIGRlcml2YXRpb24uIn0sImhpbnQiOiJBc2sgd2hhdCBoYXBwZW5zIHRvIFxcKHlbLTFdXFwpLCBcXCh5Wy0yXVxcKSwgYW5kIHBhc3QgaW5wdXQgc2FtcGxlcy4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJ6c19xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiRm9yIGEgc2Vjb25kLW9yZGVyIHplcm8tc3RhdGUgc3lzdGVtLCB3aGljaCBjb25kaXRpb24gaXMgcmVxdWlyZWQgYmVmb3JlIHVzaW5nIFxcKEhbel0gPSBZW3pdL1hbel1cXCkgZGlyZWN0bHk/Iiwib3B0aW9ucyI6WyJBLiBcXCh5Wy0xXSA9IHlbLTJdID0gMFxcKSwgYW5kIHRoZSBpbnB1dCBwYXN0IHNhbXBsZXMgbmVlZGVkIGJ5IHRoZSBlcXVhdGlvbiBhcmUgemVybyIsIkIuIFxcKHlbMF0gPSB5WzFdID0gMFxcKSBvbmx5IiwiQy4gXFwoeFtuXVxcKSBtdXN0IGJlIHNpbnVzb2lkYWwiLCJELiBcXChIW3pdXFwpIG11c3QgZXF1YWwgMSJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IkZvciBcXChOID0gMlxcKSwgemVyby1zdGF0ZSBjb25kaXRpb25zIHJlcXVpcmUgdGhlIHJlbGV2YW50IHBhc3Qgb3V0cHV0IHZhbHVlcyB0byBiZSB6ZXJvLCBhbmQgdGhlIGNhdXNhbCBpbnB1dCBhc3N1bXB0aW9uIGNsZWFycyBwYXN0IGlucHV0IHNhbXBsZXMuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiWmVyby1zdGF0ZSBjb25kaXRpb25zIHJlZmVyIHRvIHByZS1pbnB1dCBwYXN0IHZhbHVlcyBzdWNoIGFzIFxcKHlbLTFdXFwpIGFuZCBcXCh5Wy0yXVxcKSwgbm90IG1lcmVseSBcXCh5WzBdXFwpIGFuZCBcXCh5WzFdXFwpLiIsIkMiOiJUaGUgaW5wdXQgY2FuIGJlIG1hbnkgY2F1c2FsIHNpZ25hbHMsIG5vdCBvbmx5IHNpbnVzb2lkcy4iLCJEIjoiXFwoSFt6XSA9IDFcXCkgd291bGQgbWVhbiBhbiBpZGVudGl0eSBzeXN0ZW0sIG5vdCBhIGdlbmVyYWwgemVyby1zdGF0ZSBjb25kaXRpb24uIn0sImhpbnQiOiJaZXJvIHN0YXRlIGlzIGFib3V0IHN0b3JlZCBwYXN0IHZhbHVlcyBiZWZvcmUgXFwobiA9IDBcXCkuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJ0cmFuc2Zlcl9mdW5jdGlvbl9leHRyYWN0aW9uIiwibGFiZWwiOiJFeHRyYWN0aW5nIEhbel0gZnJvbSB0aGUgZGlmZmVyZW5jZSBlcXVhdGlvbiIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6InRmX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJHaXZlbiBcXCh5W25dICsgMC40eVtuLTFdID0gMnhbbl0gLSAzeFtuLTFdXFwpLCB3aGF0IGlzIFxcKEhbel1cXCkgdW5kZXIgemVyby1zdGF0ZSBjb25kaXRpb25zPyIsIm9wdGlvbnMiOlsiQS4gXFwoSFt6XSA9ICgxICsgMC40el57LTF9KS8oMiAtIDN6XnstMX0pXFwpIiwiQi4gXFwoSFt6XSA9ICgyIC0gM3peey0xfSkvKDEgKyAwLjR6XnstMX0pXFwpIiwiQy4gXFwoSFt6XSA9ICgyICsgMC40el57LTF9KS8oMSAtIDN6XnstMX0pXFwpIiwiRC4gXFwoSFt6XSA9IDIgLSAzel57LTF9ICsgMSArIDAuNHpeey0xfVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6Ik91dHB1dC1zaWRlIHRlcm1zIGZvcm0gdGhlIGRlbm9taW5hdG9yIFxcKFFbel1cXCksIGFuZCBpbnB1dC1zaWRlIHRlcm1zIGZvcm0gdGhlIG51bWVyYXRvciBcXChQW3pdXFwpLiBUaGVyZWZvcmUgXFwoSFt6XSA9IFlbel0vWFt6XSA9ICgyIC0gM3peey0xfSkvKDEgKyAwLjR6XnstMX0pXFwpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoaXMgc3dhcHMgbnVtZXJhdG9yIGFuZCBkZW5vbWluYXRvci4iLCJDIjoiVGhpcyBtaXhlcyBvdXRwdXQgYW5kIGlucHV0IGNvZWZmaWNpZW50cyBpbmNvcnJlY3RseS4iLCJEIjoiVGhlIHRyYW5zZmVyIGZ1bmN0aW9uIGlzIGEgcmF0aW8sIG5vdCBhIHN1bSBvZiBib3RoIHNpZGVzLiJ9LCJoaW50IjoiTW92ZSBmcm9tIFxcKFFbel1ZW3pdID0gUFt6XVhbel1cXCkgdG8gXFwoSFt6XSA9IFBbel0vUVt6XVxcKS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJ0Zl9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiSW4gRXEuICg1LjI2KSwgd2hpY2ggY29lZmZpY2llbnRzIGFwcGVhciBpbiB0aGUgbnVtZXJhdG9yIHBvbHlub21pYWwgXFwoUFt6XVxcKT8iLCJvcHRpb25zIjpbIkEuIFRoZSBvdXRwdXQgY29lZmZpY2llbnRzIFxcKGFfMSwgXFxsZG90cywgYV9OXFwpIiwiQi4gVGhlIGlucHV0IGNvZWZmaWNpZW50cyBcXChiXzAsIFxcbGRvdHMsIGJfTlxcKSIsIkMuIE9ubHkgdGhlIGluaXRpYWwgY29uZGl0aW9ucyIsIkQuIE9ubHkgdGhlIHJvb3RzIG9mIFxcKFFbel1cXCkiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJUaGUgbnVtZXJhdG9yIFxcKFBbel1cXCkgaXMgYnVpbHQgZnJvbSB0aGUgaW5wdXQtc2lkZSBjb2VmZmljaWVudHMgXFwoYl8wXFwpIHRocm91Z2ggXFwoYl9OXFwpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoZSBcXChhX2tcXCkgY29lZmZpY2llbnRzIGJlbG9uZyB0byB0aGUgZGVub21pbmF0b3IgXFwoUVt6XVxcKS4iLCJDIjoiSW5pdGlhbCBjb25kaXRpb25zIGFyZSB6ZXJvIGluIHRoaXMgdHJhbnNmZXItZnVuY3Rpb24gZGVyaXZhdGlvbi4iLCJEIjoiUm9vdHMgb2YgXFwoUVt6XVxcKSBhcmUgcG9sZXM7IHRoZXkgYXJlIG5vdCB0aGUgbnVtZXJhdG9yIGNvZWZmaWNpZW50cy4ifSwiaGludCI6IklucHV0IHNpZGUgZHJpdmVzIHRoZSBudW1lcmF0b3IuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJ0cmFuc2Zvcm1lZF9zeXN0ZW1fcHJvZHVjdCIsImxhYmVsIjoiVXNpbmcgWVt6XSA9IEhbel1YW3pdIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoicHJvZF9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiQSB6ZXJvLXN0YXRlIHN5c3RlbSBoYXMgXFwoSFt6XSA9ICh6KzEpLyh6LTAuNSlcXCksIGFuZCB0aGUgaW5wdXQgaGFzIFxcKFhbel0gPSB6Lyh6KzIpXFwpLiBXaGF0IHNob3VsZCB5b3UgY29tcHV0ZSBmaXJzdCB0byBmaW5kIHRoZSByZXNwb25zZT8iLCJvcHRpb25zIjpbIkEuIFxcKFlbel0gPSBIW3pdICsgWFt6XVxcKSIsIkIuIFxcKFlbel0gPSBIW3pdWFt6XVxcKSIsIkMuIFxcKFlbel0gPSBYW3pdL0hbel1cXCkiLCJELiBcXCh5W25dID0gSFt6XVxcKSBkaXJlY3RseSJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IkZvciB6ZXJvLXN0YXRlIHJlc3BvbnNlIGluIHRoZSB0cmFuc2Zvcm1lZCBkb21haW4sIHRoZSBvdXRwdXQgdHJhbnNmb3JtIGlzIHRoZSBwcm9kdWN0IFxcKFlbel0gPSBIW3pdWFt6XVxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJTeXN0ZW0gcmVzcG9uc2UgaW4gdGhlIHotZG9tYWluIG11bHRpcGxpZXMsIG5vdCBhZGRzLiIsIkMiOiJEaXZpZGluZyBieSBcXChIW3pdXFwpIHdvdWxkIHNvbHZlIGEgZGlmZmVyZW50IGludmVyc2Utc3lzdGVtIHByb2JsZW0uIiwiRCI6IlxcKEhbel1cXCkgaXMgYSBzeXN0ZW0gZnVuY3Rpb24sIG5vdCB0aGUgdGltZS1kb21haW4gb3V0cHV0LiJ9LCJoaW50IjoiVGhpbmsgb2YgdGhlIGJsb2NrIGRpYWdyYW06IGlucHV0IGVudGVycyB0aGUgc3lzdGVtIGJsb2NrIGFuZCBpcyBtdWx0aXBsaWVkIGJ5IFxcKEhbel1cXCkuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6ImludGVyYWN0aXZlX2RlbW9fb2JzZXJ2YXRpb24iLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19LHsiaWQiOiJpbnZlcnNlX3RyYW5zZm9ybV9pbnRlcnByZXRhdGlvbiIsImxhYmVsIjoiSW52ZXJzZSB6LXRyYW5zZm9ybSBhbmQgZXhwb25lbnRpYWwgY29tcG9uZW50cyIsImltcG9ydGFuY2UiOiJtZWRpdW0iLCJleGFtX3dlaWdodCI6Im1lZGl1bSIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJpbnZfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoYXQgaXMgdGhlIG1haW4gY29uY2VwdHVhbCBtZWFuaW5nIG9mIEVxLiAoNS4yOCksIFxcKHhbbl0gPSBcXGZyYWN7MX17MlxccGkgan1cXG9pbnQgWFt6XXpee24tMX1cXCxkelxcKT8iLCJvcHRpb25zIjpbIkEuIEV2ZXJ5IHByYWN0aWNhbCBzaWduYWwgY2FuIGJlIGludGVycHJldGVkIGFzIGEgd2VpZ2h0ZWQgY29tYmluYXRpb24gb2YgZXhwb25lbnRpYWwgY29tcG9uZW50cyBcXCh6Xm5cXCkiLCJCLiBFdmVyeSBzaWduYWwgbXVzdCBiZSBzb2x2ZWQgb25seSBieSBjb250b3VyIGludGVncmF0aW9uIGluIGV4YW1zIiwiQy4gVGhlIHotdHJhbnNmb3JtIGFwcGxpZXMgb25seSB0byBmaW5pdGUtbGVuZ3RoIHNpZ25hbHMiLCJELiBcXChIW3pdXFwpIGFuZCBcXChYW3pdXFwpIHNob3VsZCBiZSBhZGRlZCB0byBvYnRhaW4gdGhlIG91dHB1dCJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IlRoZSBmb3JtdWxhIGdpdmVzIHRoZSBpbnR1aXRpb24gdGhhdCBcXChYW3pdXFwpIHdlaWdodHMgZXhwb25lbnRpYWwgY29tcG9uZW50cywgYW5kIHRoZSBzeXN0ZW0gc2NhbGVzIHRob3NlIGNvbXBvbmVudHMgdGhyb3VnaCBcXChIW3pdXFwpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6Ik1vc3QgZXhhbSBjb21wdXRhdGlvbnMgdXNlIHRyYW5zZm9ybSBwYWlycyBhbmQgcGFydGlhbCBmcmFjdGlvbnMsIG5vdCBkaXJlY3QgY29udG91ciBpbnRlZ3JhdGlvbi4iLCJDIjoiVGhlIHotdHJhbnNmb3JtIGFwcGxpZXMgdG8gbWFueSBpbmZpbml0ZS1kdXJhdGlvbiBzaWduYWxzIGFzIHdlbGwuIiwiRCI6IlRoZSBvdXRwdXQgdHJhbnNmb3JtIGlzIFxcKFlbel0gPSBIW3pdWFt6XVxcKSwgbm90IGEgc3VtLiJ9LCJoaW50IjoiRm9jdXMgb24gaW50ZXJwcmV0YXRpb24sIG5vdCBjb21wdXRhdGlvbi4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19LHsiaWQiOiJ3b3JrZWRfcmVzcG9uc2Vfd29ya2Zsb3ciLCJsYWJlbCI6Ilplcm8tc3RhdGUgcmVzcG9uc2Ugd29ya2Zsb3ciLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJ3b3JrX3ExIiwidHlwZSI6InNob3J0X2Fuc3dlciIsInN0ZW0iOiJMaXN0IHRoZSBmb3VyIG1haW4gc3RlcHMgZm9yIGZpbmRpbmcgdGhlIHplcm8tc3RhdGUgcmVzcG9uc2UgdXNpbmcgdGhlIHRyYW5zZmVyIGZ1bmN0aW9uIG1ldGhvZC4iLCJpZGVhbF9hbnN3ZXIiOiJSZWFkIFxcKEhbel1cXCkgZnJvbSB0aGUgZGlmZmVyZW5jZSBlcXVhdGlvbiwgZmluZCBcXChYW3pdXFwpIGZvciB0aGUgaW5wdXQsIG11bHRpcGx5IHRvIGdldCBcXChZW3pdID0gSFt6XVhbel1cXCksIHRoZW4gaW52ZXJzZS10cmFuc2Zvcm0gXFwoWVt6XVxcKSB1c2luZyBwYXJ0aWFsIGZyYWN0aW9ucyBvciB0cmFuc2Zvcm0gdGFibGVzLiIsImdyYWRpbmdfcnVicmljIjpbIk11c3QgbWVudGlvbiBmaW5kaW5nIFxcKEhbel1cXCkgZnJvbSB0aGUgZGlmZmVyZW5jZSBlcXVhdGlvbiIsIk11c3QgbWVudGlvbiBmaW5kaW5nIFxcKFhbel1cXCkiLCJNdXN0IHN0YXRlIFxcKFlbel0gPSBIW3pdWFt6XVxcKSIsIk11c3QgbWVudGlvbiBpbnZlcnNlIHotdHJhbnNmb3JtLCBwYXJ0aWFsIGZyYWN0aW9ucywgb3IgdHJhbnNmb3JtIHRhYmxlcyJdLCJleHBsYW5hdGlvbiI6IlRoaXMgY2hlY2tzIHdoZXRoZXIgdGhlIHN0dWRlbnQgdW5kZXJzdGFuZHMgdGhlIGZ1bGwgZXhhbSB3b3JrZmxvdyByYXRoZXIgdGhhbiBvbmx5IG1lbW9yaXppbmcgdGhlIHRyYW5zZmVyLWZ1bmN0aW9uIGZvcm11bGEuIiwiaGludCI6IlRoaW5rOiBzeXN0ZW0sIGlucHV0LCBwcm9kdWN0LCByZXR1cm4gdG8gdGltZSBkb21haW4uIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfSx7ImlkIjoidW5pdF9kZWxheV90cmFuc2Zlcl9mdW5jdGlvbiIsImxhYmVsIjoiVW5pdC1kZWxheSB0cmFuc2ZlciBmdW5jdGlvbiIsImltcG9ydGFuY2UiOiJtZWRpdW0iLCJleGFtX3dlaWdodCI6Im1lZGl1bSIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJkZWxheV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2hhdCBpcyB0aGUgdHJhbnNmZXIgZnVuY3Rpb24gb2YgYSBvbmUtc2FtcGxlIHVuaXQgZGVsYXk/Iiwib3B0aW9ucyI6WyJBLiBcXChIW3pdID0gelxcKSIsIkIuIFxcKEhbel0gPSAxL3pcXCkiLCJDLiBcXChIW3pdID0gMVxcKSIsIkQuIFxcKEhbel0gPSB6IC0gMVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IkEgb25lLXNhbXBsZSBkZWxheSBcXCh4W24tMV1cXCkgY29ycmVzcG9uZHMgdG8gbXVsdGlwbGljYXRpb24gYnkgXFwoel57LTF9XFwpLCBzbyBcXChIW3pdID0gMS96XFwpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlxcKHpcXCkgY29ycmVzcG9uZHMgdG8gYW4gYWR2YW5jZSB1bmRlciB0aGlzIGNvbnZlbnRpb24sIG5vdCBhIGRlbGF5LiIsIkMiOiJcXChIW3pdID0gMVxcKSBtZWFucyBubyBjaGFuZ2UgdG8gdGhlIHNpZ25hbC4iLCJEIjoiXFwoeiAtIDFcXCkgaXMgbm90IHRoZSB0cmFuc2ZlciBmdW5jdGlvbiBvZiBhIHB1cmUgb25lLXNhbXBsZSBkZWxheS4ifSwiaGludCI6IkRlbGF5IG1lYW5zIGEgbmVnYXRpdmUgcG93ZXIgb2YgXFwoelxcKS4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoic2ltcGxlX2RlbGF5X2Jsb2NrX2RpYWdyYW0iLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJkZWxheV9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiQSBzeXN0ZW0gb3V0cHV0IGlzIFxcKHlbbl0gPSB4W24tMV1cXCkuIFdoaWNoIHN0YXRlbWVudCBpcyBjb3JyZWN0PyIsIm9wdGlvbnMiOlsiQS4gVGhlIG91dHB1dCBpcyBhZHZhbmNlZCBieSBvbmUgc2FtcGxlLCBzbyBcXChIW3pdID0gelxcKSIsIkIuIFRoZSBvdXRwdXQgaXMgZGVsYXllZCBieSBvbmUgc2FtcGxlLCBzbyBcXChIW3pdID0gMS96XFwpIiwiQy4gVGhlIG91dHB1dCBpcyB1bmNoYW5nZWQsIHNvIFxcKEhbel0gPSAxXFwpIiwiRC4gVGhlIHN5c3RlbSBjYW5ub3QgYmUgcmVwcmVzZW50ZWQgYnkgYSB0cmFuc2ZlciBmdW5jdGlvbiJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IlRoZSBvdXRwdXQgY29waWVzIHRoZSBpbnB1dCBvbmUgc2FtcGxlIGxhdGVyLCBzbyBpdCBpcyBhIGRpc2NyZXRlLXRpbWUgZGVsYXkgd2l0aCBcXChIW3pdID0gel57LTF9XFwpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlxcKHhbbi0xXVxcKSBpcyBkZWxheWVkLCBub3QgYWR2YW5jZWQuIiwiQyI6IlRoZSBzYW1wbGUgcG9zaXRpb25zIGNoYW5nZSwgc28gdGhlIHNpZ25hbCBpcyBub3QgdW5jaGFuZ2VkLiIsIkQiOiJBIHVuaXQgZGVsYXkgaXMgYSBzdGFuZGFyZCBMVElEIHN5c3RlbSB3aXRoIHRyYW5zZmVyIGZ1bmN0aW9uIFxcKDEvelxcKS4ifSwiaGludCI6IkNvbXBhcmUgd2hlcmUgYSBwdWxzZSBhdCBcXChuID0gMFxcKSBhcHBlYXJzIGF0IHRoZSBvdXRwdXQuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6InZpc3VhbF9wYXR0ZXJuX3JlY29nbml0aW9uX2NoZWNrIiwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19XX0=" style="display:none;"></div>%%KC_END%%
