%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6ImJvdGgiLCJyYXRpb25hbGUiOiJUaGlzIHNlY3Rpb24gbWl4ZXMgc3RydWN0dXJhbCBzeXN0ZW0gZGlhZ3JhbXMgd2l0aCBzeW1ib2xpYyByZXNwb25zZSBmb3JtdWxhcy4gVXNlIGEgV2lraXBlZGlhL1dpa2ltZWRpYS1zdHlsZSByZWZlcmVuY2UgYmxvY2sgZGlhZ3JhbSBmb3IgcGFyYWxsZWwgYW5kIGNhc2NhZGUgcmVjb2duaXRpb24sIHRoZW4gdXNlIGEgUmVhY3QgKyBDYW52YXMgZGVtbyBmb3IgdGhlIGxlc3MgdmlzaWJsZSBpZGVhIHRoYXQgYW4gZXZlcmxhc3RpbmcgZXhwb25lbnRpYWwgaW5wdXQga2VlcHMgdGhlIHNhbWUgc2hhcGUgYW5kIG9ubHkgZ2V0cyBtdWx0aXBsaWVkIGJ5IEhbel0uIE5vIGNyb3BwZWQgdGV4dGJvb2sgZmlndXJlcyBhcmUgYXZhaWxhYmxlLCBzbyBkbyBub3QgdXNlIGZ1bGwtcGFnZSBzY3JlZW5zaG90cy4iLCJjcmFtIjoiVXNlIHZpc3VhbHMgdG8gaW5zdGFudGx5IHJlY29nbml6ZSBwYXJhbGxlbCBtZWFucyBhZGQsIGNhc2NhZGUgbWVhbnMgY29udm9sdmUsIGludmVyc2UgbWVhbnMgY2FzY2FkZSB0byBkZWx0YSwgYW5kIGV4cG9uZW50aWFsIGlucHV0IG1lYW5zIG11bHRpcGx5IGJ5IEhbel0uIiwic3RhbmRhcmQiOiJVc2UgdmlzdWFscyB0byBjb25uZWN0IGVhY2ggZm9ybXVsYSB0byBvbmUgcmVwcmVzZW50YXRpdmUgc3lzdGVtIGxheW91dCBvciBpbnB1dC1vdXRwdXQgYmVoYXZpb3IuIiwidG9wX3Njb3JlIjoiVXNlIHZpc3VhbHMgdG8gZXhwb3NlIHRyYXBzOiBjYXNjYWRlIG9yZGVyIGNvbW11dGVzIG9ubHkgZm9yIExUSSBzeXN0ZW1zLCBpbnZlcnNlIG1lYW5zIGNvbnZvbHV0aW9uIHRvIGRlbHRhLCBhbmQgel5uIGlzIGV2ZXJsYXN0aW5nLCBub3Qgel5uIHVbbl0uIn0=" style="display:none;"></div>%%KC_END%%
# 3.8-2 Interconnected Systems

> **Section Objective:** Learn how LTID systems combine, invert, accumulate, and respond to everlasting exponential inputs.

## Concepts In This Section

- Parallel interconnection
- Cascade interconnection
- Inverse systems
- Accumulator
- Backward difference
- Unit step response
- Everlasting exponential
- Transfer function


## 1. Parallel and Cascade Interconnections

**Parallel systems** split the same input \(x[n]\) into two branches, each processed independently, and then add the outputs at a summing junction. Because the system is linear, the composite impulse response is simply the sum of the individual impulse responses.

$$h_p[n] = h_1[n] + h_2[n]$$

**Cascade systems** feed the output of one system into the input of the next. The composite impulse response is the convolution of the two individual responses:

$$h_c[n] = h_1[n] * h_2[n]$$

For LTI systems, convolution commutes, so the cascade order can be swapped:

$$h_1[n] * h_2[n] = h_2[n] * h_1[n]$$

**Symbols:** \(h_1[n]\) and \(h_2[n]\) are individual impulse responses; \(h_p[n]\) is the parallel composite; \(h_c[n]\) is the cascade composite; \(*\) denotes convolution.

**Exam trigger:** A summing junction after two branches → add. Boxes in a chain → convolve.

**Common misuse:** Writing \(h_1[n] \cdot h_2[n]\) (pointwise product) for cascade instead of convolving.

**Minimal example:** If \(h_1[n] = \delta[n]\) and \(h_2[n] = u[n]\), then the parallel response is \(\delta[n] + u[n]\), while the cascade response is \(\delta[n] * u[n] = u[n]\).

$$h_p[n] = h_1[n] + h_2[n]$$

## 2. Inverse Systems

Two LTID systems are **inverses** of each other when cascading them produces the identity system — a system whose output equals its input. The defining condition is:

$$h[n] * h_i[n] = \delta[n]$$

**Symbols:** \(h[n]\) is the original system's impulse response; \(h_i[n]\) is the inverse system's impulse response; \(*\) is convolution; \(\delta[n]\) is the impulse response of the identity system.

**Use case:** Apply this test when a problem asks whether one system undoes another, or when you need to design a system that recovers the original input.

**Exam trigger:** Phrases like "inverse system," "identity output," or "cascade gives the original input" all point to this condition.

**Common misuse:** Thinking the inverse means \(h_i[n] = 1/h[n]\) (pointwise reciprocal). For LTI systems, the inverse condition is convolution to \(\delta[n]\), not pointwise division.

**Near-miss:** If \(h[n] * h_i[n] = u[n]\), the cascade output is a running sum of the input — not the identity system.

$$h[n] * h_i[n] = \delta[n]$$

## 3. Accumulator System

The **accumulator** is the discrete-time system that outputs the running sum of all input samples up to and including time \(n\). Eq. (3.35):

$$y[n] = \sum_{k=-\infty}^{n} x[k]$$

**Symbols:** \(x[k]\) is the input sample at time \(k\); \(y[n]\) is the accumulated output at time \(n\); the upper limit \(n\) means the sum grows as time moves forward.

**Use case:** Use this when the output is described as a cumulative total or running sum of the input.

**Exam trigger:** A summation from \(-\infty\) to \(n\) in the system equation immediately identifies the accumulator.

**Common misuse:** Summing only \(x[n]\) alone, or starting the sum from \(0\) instead of \(-\infty\), changes the system entirely.

**Minimal example:** If \(x[n] = \delta[n]\), then \(y[n] = \sum_{k=-\infty}^{n} \delta[k] = u[n]\). The accumulator turns an impulse into a unit step.

$$y[n] = \sum_{k=-\infty}^{n} x[k]$$

## 4. Backward Difference System

The **backward difference** system measures the change from the previous sample to the current sample. Eq. (3.36):

$$y[n] = x[n] - x[n-1]$$

**Symbols:** \(x[n]\) is the current input sample; \(x[n-1]\) is the input one sample earlier; \(y[n]\) is their difference.

**Use case:** Use this when a problem asks for a discrete-time difference operator or a system that highlights sample-to-sample changes.

**Exam trigger:** "Current sample minus one-sample-delayed input" is the backward difference.

**Common misuse:** Writing \(x[n+1] - x[n]\) is a *forward* difference, not the backward difference defined here. The sign and index direction matter.

**Minimal example:** If \(x[n] = u[n]\), then \(y[n] = u[n] - u[n-1] = \delta[n]\). The backward difference turns a unit step back into an impulse — confirming it is the inverse of the accumulator.

> **Key insight:** The accumulator (Eq. 3.35) and the backward difference (Eq. 3.36) are inverse systems of each other.

$$y[n] = x[n] - x[n-1]$$

## 5. Unit Step Response and Impulse Response

The **unit step response** \(g[n]\) is the system output when the input is \(u[n]\). Because \(u[n]\) is the accumulated impulse, the step response is the accumulated impulse response. Eq. (3.37):

$$g[n] = \sum_{k=-\infty}^{n} h[k]$$

To recover the impulse response from the step response, apply the backward difference:

$$h[n] = g[n] - g[n-1]$$

**Symbols:** \(h[n]\) is the impulse response; \(g[n]\) is the unit step response; the summation accumulates \(h[k]\) up to time \(n\).

**Use case:** Use Eq. (3.37) to compute the step response when \(h[n]\) is known. Use the backward difference to recover \(h[n]\) when only \(g[n]\) is given.

**Exam trigger:** "Unit step response" → sum \(h[k]\). "Recover \(h[n]\)" → difference \(g[n] - g[n-1]\).

**Common misuse:** Confusing \(g[n]\) with \(h[n]\) directly — they are equal only in special cases.

**Minimal example:** If \(h[n] = \delta[n]\), then \(g[n] = \sum_{k=-\infty}^{n} \delta[k] = u[n]\).

$$g[n] = \sum_{k=-\infty}^{n} h[k]$$

## 6. Everlasting Exponential and Transfer Function

An **everlasting exponential** \(z^n\) (defined for all \(n\), not just \(n \geq 0\)) is an **eigenfunction** of any LTID system: the output keeps the same \(z^n\) shape and is only multiplied by a complex constant \(H[z]\). Eq. (3.38):

$$y[n] = H[z]z^n$$

The multiplier \(H[z]\) is the **transfer function**, defined by Eq. (3.39) when \(h[n]\) is known:

$$H[z] = \sum_{m=-\infty}^{\infty} h[m]z^{-m}$$

Equivalently, as a ratio of output to input for input \(z^n\), Eq. (3.40):

$$H[z] = \left.\frac{\text{output signal}}{\text{input signal}}\right|_{\text{input}=z^n}$$

When the system is described by operator polynomials \(P[z]\) and \(Q[z]\), Eq. (3.41):

$$H[z] = \frac{P[z]}{Q[z]}$$

**Symbols:** \(z\) is a complex variable; \(H[z]\) is the transfer function (a scalar for each \(z\)); \(h[m]\) is the impulse response; \(P[z]\) and \(Q[z]\) are operator-polynomial evaluations at \(z\).

**Use case:** Use Eq. (3.39) when \(h[n]\) is known. Use Eq. (3.41) when the system difference equation is given in operator form.

**Exam trigger:** Input is \(z^n\) (everlasting), not \(z^n u[n]\) (causal). This distinction is critical.

**Common misuse:** Applying this transfer-function definition to nonlinear or time-varying systems, or forgetting that the sum in Eq. (3.39) must converge for the chosen \(z\).

$$y[n] = H[z]z^n$$

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="interactive_demo" data-teaching-role="concept_anchor" data-visual-use-b64="eyJjcmFtIjoiVXNlIHRoZSBkZW1vIHRvIG1lbW9yaXplIHRoZSBleGFtIHBhdHRlcm46IGlucHV0IHpebiBwcm9kdWNlcyBvdXRwdXQgSFt6XXpebi4iLCJzdGFuZGFyZCI6IlVzZSB0aGUgZGVtbyB0byBzZWUgdGhhdCB0aGUgb3V0cHV0IHNhbXBsZXMga2VlcCB0aGUgc2FtZSBleHBvbmVudGlhbCBzaGFwZSB3aGlsZSBzY2FsZSBhbmQgcGhhc2UgY2hhbmdlLiIsInRvcF9zY29yZSI6IlVzZSB0aGUgZGVtbyB0byB0ZXN0IGVkZ2UgY2FzZXM6IHVuaXQgZGVsYXksIGJhY2t3YXJkIGRpZmZlcmVuY2UsIGFjY3VtdWxhdG9yLCBhbmQgdmFsdWVzIG9mIHogd2hlcmUgY29udmVyZ2VuY2UgbWF5IGZhaWwuIn0=" style="display:none;"></div><div class="kc-interactive-demo" data-demo-b64="eyJ0eXBlIjoiaW50ZXJhY3RpdmVfZGVtbyIsInBhZ2VfdGl0bGUiOiIjIyA3LiBTZWUgV2h5IHpebiBJcyBTcGVjaWFsIiwidGVhY2hpbmdfcm9sZSI6ImNvbmNlcHRfYW5jaG9yIiwibW9kZV9zcGVjaWZpY192aXN1YWxfdXNlIjp7ImNyYW0iOiJVc2UgdGhlIGRlbW8gdG8gbWVtb3JpemUgdGhlIGV4YW0gcGF0dGVybjogaW5wdXQgel5uIHByb2R1Y2VzIG91dHB1dCBIW3pdel5uLiIsInN0YW5kYXJkIjoiVXNlIHRoZSBkZW1vIHRvIHNlZSB0aGF0IHRoZSBvdXRwdXQgc2FtcGxlcyBrZWVwIHRoZSBzYW1lIGV4cG9uZW50aWFsIHNoYXBlIHdoaWxlIHNjYWxlIGFuZCBwaGFzZSBjaGFuZ2UuIiwidG9wX3Njb3JlIjoiVXNlIHRoZSBkZW1vIHRvIHRlc3QgZWRnZSBjYXNlczogdW5pdCBkZWxheSwgYmFja3dhcmQgZGlmZmVyZW5jZSwgYWNjdW11bGF0b3IsIGFuZCB2YWx1ZXMgb2YgeiB3aGVyZSBjb252ZXJnZW5jZSBtYXkgZmFpbC4ifSwiZGVtb19zcGVjIjp7InRlY2hub2xvZ3kiOiJSZWFjdCArIENhbnZhcyIsImxheW91dCI6IlR3byBzdGFja2VkIHN0ZW0gcGxvdHMgd2l0aCBtYXRjaGluZyBuLWF4aXM6IHRvcCBwbG90IHNob3dzIGlucHV0IHhbbl0gPSB6Xm4gKGxhYmVsZWQgJ2V2ZXJsYXN0aW5nIHpebicpLCBib3R0b20gcGxvdCBzaG93cyBvdXRwdXQgeVtuXSA9IEhbel16Xm4uIEEgY29tcGFjdCBmb3JtdWxhIHBhbmVsIG9uIHRoZSByaWdodCBkaXNwbGF5cyB0aGUgY3VycmVudCB6IHZhbHVlLCB0aGUgY29tcHV0ZWQgSFt6XSwgYW5kIHRoZSBhY3RpdmUgc3lzdGVtIGVxdWF0aW9uLiIsImNvbnRyb2xzIjpbeyJ0eXBlIjoic2xpZGVyIiwibGFiZWwiOiJNYWduaXR1ZGUgciAod2hlcmUgeiA9IHJlXntqXFx0aGV0YX0pIiwicmFuZ2UiOlswLjIsMS44XSwiZGVmYXVsdCI6MC44fSx7InR5cGUiOiJzbGlkZXIiLCJsYWJlbCI6IkFuZ2xlIFxcdGhldGEgKHJhZGlhbnMpIiwicmFuZ2UiOlstMy4xNDE1OSwzLjE0MTU5XSwiZGVmYXVsdCI6MH0seyJ0eXBlIjoiZHJvcGRvd24iLCJsYWJlbCI6IlN5c3RlbSIsIm9wdGlvbnMiOlt7ImxhYmVsIjoiVW5pdCBkZWxheTogSFt6XSA9IHpeey0xfSIsImVxdWF0aW9uIjoieVtuXSA9IHhbbi0xXSJ9LHsibGFiZWwiOiJCYWNrd2FyZCBkaWZmZXJlbmNlOiBIW3pdID0gMSAtIHpeey0xfSIsImVxdWF0aW9uIjoieVtuXSA9IHhbbl0gLSB4W24tMV0ifSx7ImxhYmVsIjoiU2ltcGxlIEZJUjogSFt6XSA9IDEgKyAwLjV6XnstMX0iLCJlcXVhdGlvbiI6Inlbbl0gPSB4W25dICsgMC41eFtuLTFdIn1dfSx7InR5cGUiOiJ0b2dnbGUiLCJsYWJlbCI6IlZpZXcgbW9kZSIsIm9wdGlvbnMiOlsiUmVhbCBwYXJ0IiwiTWFnbml0dWRlIC8gUGhhc2UiXX1dLCJyZXF1aXJlZF9vYnNlcnZhdGlvbnMiOlsiQ2hhbmdpbmcgeiBjaGFuZ2VzIHRoZSBzYW1wbGUgcGF0dGVybiBvZiB6Xm4gb24gdGhlIHRvcCBwbG90LiIsIkZvciBhIGZpeGVkIHogYW5kIGNob3NlbiBMVElEIHN5c3RlbSwgdGhlIG91dHB1dCBvbiB0aGUgYm90dG9tIHBsb3QgcmVtYWlucyB0aGUgc2FtZSBleHBvbmVudGlhbCBzZXF1ZW5jZSBtdWx0aXBsaWVkIGJ5IG9uZSBjb25zdGFudCBIW3pdLiIsIkZvciB1bml0IGRlbGF5LCB0aGUgbXVsdGlwbGllciBzaG93biBpbiB0aGUgZm9ybXVsYSBwYW5lbCBpcyB6XnstMX0uIiwiRm9yIGJhY2t3YXJkIGRpZmZlcmVuY2UsIHRoZSBtdWx0aXBsaWVyIHNob3duIGlzIDEgLSB6XnstMX0uIiwiVGhlIGlucHV0IGlzIGFsd2F5cyBsYWJlbGVkICdldmVybGFzdGluZyB6Xm4nLCBub3Qgel5uIHVbbl0uIl0sImF2b2lkIjpbIkRvIG5vdCBpbXBseSB0aGUgcmVzdWx0IHdvcmtzIGZvciBub25saW5lYXIgc3lzdGVtcy4iLCJEbyBub3QgaGlkZSB0aGUgY29tcGxleCBuYXR1cmUgb2YgejsgYWxsb3cgbWFnbml0dWRlIGFuZCBwaGFzZSBjb250cm9scy4iLCJEbyBub3QgYW5pbWF0ZSBkZWNvcmF0aXZlIHBhcnRpY2xlcyBvciB1bnJlbGF0ZWQgc2lnbmFscy4iXX0sImNhcHRpb24iOiJUaGUgZGVtbyBzaG93cyB0aGF0IGFuIExUSUQgc3lzdGVtIHR1cm5zIGFuIGV2ZXJsYXN0aW5nIGV4cG9uZW50aWFsIGlucHV0IFxcKHpeblxcKSBpbnRvIHRoZSBzYW1lIGV4cG9uZW50aWFsIG11bHRpcGxpZWQgYnkgXFwoSFt6XVxcKS4iLCJleHBsYW5hdGlvbiI6IioqV2hhdCBzdGF5cyB0aGUgc2FtZToqKiBUaGUgZXhwb25lbnRpYWwgc2hhcGUgXFwoel5uXFwpIGlzIHByZXNlcnZlZCBpbiB0aGUgb3V0cHV0IOKAlCBvbmx5IHRoZSBhbXBsaXR1ZGUgYW5kIHBoYXNlIGFyZSBzY2FsZWQgYnkgXFwoSFt6XVxcKS5cblxuKipXaGF0IGNoYW5nZXM6KiogVGhlIG11bHRpcGxpZXIgXFwoSFt6XVxcKSBkZXBlbmRzIG9uIGJvdGggdGhlIGNob3NlbiBcXCh6XFwpIGFuZCB0aGUgc3lzdGVtLiBDaGFuZ2luZyBcXChyXFwpLCBcXChcXHRoZXRhXFwpLCBvciB0aGUgc3lzdGVtIHNlbGVjdGlvbiBjaGFuZ2VzIFxcKEhbel1cXCkgYnV0IG5vdCB0aGUgZWlnZW5mdW5jdGlvbiBzdHJ1Y3R1cmUuXG5cbioqV2h5IHRoZSBpbnB1dCBtdXN0IGJlIGV2ZXJsYXN0aW5nIFxcKHpeblxcKSwgbm90IGNhdXNhbCBcXCh6Xm4gdVtuXVxcKToqKiBUaGUgZWlnZW5mdW5jdGlvbiBkZXJpdmF0aW9uIHJlcXVpcmVzIHRoZSBjb252b2x1dGlvbiBzdW0gXFwoXFxzdW1fbSBoW21dIHpee24tbX1cXCkgdG8gZmFjdG9yIGNsZWFubHkgYXMgXFwoel5uIFxcc3VtX20gaFttXSB6XnstbX1cXCkuIFRoaXMgZmFjdG9yaW5nIG9ubHkgd29ya3Mgd2hlbiBcXCh6Xm5cXCkgaXMgZGVmaW5lZCBmb3IgYWxsIFxcKG4gXFxpbiAoLVxcaW5mdHksIFxcaW5mdHkpXFwpLiBBIGNhdXNhbCBpbnB1dCBcXCh6Xm4gdVtuXVxcKSBpbnRyb2R1Y2VzIGEgYm91bmRhcnkgYXQgXFwobj0wXFwpIHRoYXQgYnJlYWtzIHRoZSBmYWN0b3JpbmcgYW5kIHByb2R1Y2VzIHRyYW5zaWVudCB0ZXJtcy4ifQ=="></div>%%KC_END%%

---
**📌 Key Takeaways**
- **Parallel interconnection:** impulse responses add — \(h_p[n] = h_1[n] + h_2[n]\). A summing junction after two branches is the visual trigger.
- **Cascade interconnection:** impulse responses convolve — \(h_c[n] = h_1[n] * h_2[n] = h_2[n] * h_1[n]\). Order can be swapped for LTI systems because convolution commutes.
- **Inverse systems:** two LTID systems are inverses when their cascade is the identity — \(h[n] * h_i[n] = \delta[n]\). The inverse condition is convolution to \(\delta[n]\), not pointwise reciprocal.
- **Accumulator** Eq. (3.35): \(y[n] = \sum_{k=-\infty}^{n} x[k]\). **Backward difference** Eq. (3.36): \(y[n] = x[n] - x[n-1]\). These two systems are inverses of each other.
- **Step response from impulse response** Eq. (3.37): \(g[n] = \sum_{k=-\infty}^{n} h[k]\). **Recover impulse response:** \(h[n] = g[n] - g[n-1]\). Accumulate to get \(g[n]\); difference to recover \(h[n]\).
- **Everlasting exponential eigenfunction** Eq. (3.38): \(y[n] = H[z]z^n\). Input \(z^n\) (everlasting, not causal) produces output scaled by \(H[z]\). Transfer function definitions: Eq. (3.39) \(H[z] = \sum_{m=-\infty}^{\infty} h[m]z^{-m}\); Eq. (3.40) \(H[z] = \text{output}/\text{input}\big|_{\text{input}=z^n}\); Eq. (3.41) \(H[z] = P[z]/Q[z]\).
- Next, use these transfer-function ideas to analyze more complicated discrete-time systems efficiently.

*Next, use these transfer-function ideas to analyze more complicated discrete-time systems efficiently.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6OSwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo3LCJtYXgiOjEwfSwia25vd2xlZGdlX3BvaW50cyI6W3siaWQiOiJwYXJhbGxlbF9jYXNjYWRlX3J1bGVzIiwibGFiZWwiOiJQYXJhbGxlbCBhbmQgY2FzY2FkZSBpbXB1bHNlLXJlc3BvbnNlIHJ1bGVzIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AxX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInF1ZXN0aW9uX3N1YnR5cGUiOiJ2aXN1YWxfcGF0dGVybl9yZWNvZ25pdGlvbl9jaGVjayIsInN0ZW0iOiJBIGRpYWdyYW0gc2hvd3MgdGhlIHNhbWUgaW5wdXQgXFwoeFtuXVxcKSBzcGxpdCBpbnRvIHR3byBMVElEIHN5c3RlbXMgd2l0aCBpbXB1bHNlIHJlc3BvbnNlcyBcXChoXzFbbl1cXCkgYW5kIFxcKGhfMltuXVxcKSwgYW5kIHRoZSB0d28gb3V0cHV0cyBhcmUgYWRkZWQuIFdoYXQgaXMgdGhlIGNvbXBvc2l0ZSBpbXB1bHNlIHJlc3BvbnNlPyIsIm9wdGlvbnMiOlsiQS4gXFwoaF8xW25dXFwsaF8yW25dXFwpIiwiQi4gXFwoaF8xW25dICsgaF8yW25dXFwpIiwiQy4gXFwoaF8xW25dICogaF8yW25dXFwpIiwiRC4gXFwoaF8xW25dIC0gaF8yW25dXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiUGFyYWxsZWwgTFRJRCBicmFuY2hlcyBhZGQgdGhlaXIgb3V0cHV0cywgc28gdGhlIGltcHVsc2UgcmVzcG9uc2VzIGFkZDogXFwoaF9wW25dID0gaF8xW25dICsgaF8yW25dXFwpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlBvaW50d2lzZSBtdWx0aXBsaWNhdGlvbiBpcyBub3QgdGhlIHBhcmFsbGVsIGludGVyY29ubmVjdGlvbiBydWxlLiIsIkMiOiJDb252b2x1dGlvbiBpcyB0aGUgY2FzY2FkZSBydWxlLCBub3QgdGhlIHBhcmFsbGVsIHJ1bGUuIiwiRCI6IlN1YnRyYWN0aW9uIHdvdWxkIHJlcXVpcmUgYSBzdWJ0cmFjdGluZyBqdW5jdGlvbiwgbm90IGEgc3RhbmRhcmQgYWRkZXIuIn0sImhpbnQiOiJQYXJhbGxlbCBicmFuY2hlcyBtZWV0IGF0IGFuIGFkZGVyLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJibG9ja19kaWFncmFtIiwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AxX3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInF1ZXN0aW9uX3N1YnR5cGUiOiJjb21tb25fdHJhcF9jaGVjayIsInN0ZW0iOiJUd28gTFRJRCBzeXN0ZW1zIGFyZSBjb25uZWN0ZWQgaW4gY2FzY2FkZTogXFwoU18xXFwpIGZvbGxvd2VkIGJ5IFxcKFNfMlxcKS4gV2hpY2ggc3RhdGVtZW50IGlzIGNvcnJlY3Q/Iiwib3B0aW9ucyI6WyJBLiBUaGUgcmVzcG9uc2UgaXMgXFwoaF8xW25dICsgaF8yW25dXFwpLCBhbmQgdGhlIG9yZGVyIGNhbm5vdCBiZSBjaGFuZ2VkLiIsIkIuIFRoZSByZXNwb25zZSBpcyBcXChoXzFbbl1cXCxoXzJbbl1cXCksIGFuZCB0aGUgb3JkZXIgY2FuIGJlIGNoYW5nZWQuIiwiQy4gVGhlIHJlc3BvbnNlIGlzIFxcKGhfMVtuXSAqIGhfMltuXVxcKSwgYW5kIHRoZSBvcmRlciBjYW4gYmUgY2hhbmdlZCBmb3IgTFRJIHN5c3RlbXMuIiwiRC4gVGhlIHJlc3BvbnNlIGlzIFxcKGhfMVtuXSAtIGhfMltuXVxcKSwgYW5kIHRoZSBvcmRlciBjYW4gYmUgY2hhbmdlZCBmb3IgYW55IHN5c3RlbS4iXSwiY29ycmVjdF9vcHRpb24iOiJDIiwiZXhwbGFuYXRpb24iOiJDYXNjYWRlIExUSUQgc3lzdGVtcyBjb252b2x2ZSwgYW5kIFxcKGhfMVtuXSAqIGhfMltuXSA9IGhfMltuXSAqIGhfMVtuXVxcKSwgc28gdGhlIGNhc2NhZGUgb3JkZXIgY2FuIGJlIGludGVyY2hhbmdlZCBmb3IgTFRJIHN5c3RlbXMuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiQWRkaXRpb24gaXMgZm9yIHBhcmFsbGVsIHN5c3RlbXMsIG5vdCBjYXNjYWRlIHN5c3RlbXMuIiwiQiI6IkNhc2NhZGUgdXNlcyBjb252b2x1dGlvbiwgbm90IHBvaW50d2lzZSBtdWx0aXBsaWNhdGlvbi4iLCJEIjoiU3VidHJhY3Rpb24gaXMgbm90IHRoZSBjYXNjYWRlIHJ1bGUsIGFuZCBvcmRlciBpbnRlcmNoYW5nZSBpcyBub3QgZ3VhcmFudGVlZCBmb3IgYXJiaXRyYXJ5IG5vbmxpbmVhciBvciB0aW1lLXZhcnlpbmcgc3lzdGVtcy4ifSwiaGludCI6IlNlcmllcyBjb25uZWN0aW9uIG1lYW5zIGNvbnZvbHV0aW9uLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoiaW52ZXJzZV9hY2N1bXVsYXRvcl9kaWZmZXJlbmNlIiwibGFiZWwiOiJJbnZlcnNlIHN5c3RlbXMsIGFjY3VtdWxhdG9yLCBhbmQgYmFja3dhcmQgZGlmZmVyZW5jZSIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMl9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJxdWVzdGlvbl9zdWJ0eXBlIjoiZm9ybXVsYV90cmlnZ2VyX2NoZWNrIiwic3RlbSI6IldoaWNoIGVxdWF0aW9uIGNvcnJlY3RseSBzdGF0ZXMgdGhhdCBhbiBMVElEIHN5c3RlbSB3aXRoIGltcHVsc2UgcmVzcG9uc2UgXFwoaFtuXVxcKSBhbmQgYW5vdGhlciBzeXN0ZW0gd2l0aCBpbXB1bHNlIHJlc3BvbnNlIFxcKGhfaVtuXVxcKSBhcmUgaW52ZXJzZXM/Iiwib3B0aW9ucyI6WyJBLiBcXChoW25dICsgaF9pW25dID0gXFxkZWx0YVtuXVxcKSIsIkIuIFxcKGhbbl1cXCxoX2lbbl0gPSAxXFwpIiwiQy4gXFwoaFtuXSAqIGhfaVtuXSA9IFxcZGVsdGFbbl1cXCkiLCJELiBcXChoW25dIC0gaF9pW25dID0gdVtuXVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkMiLCJleHBsYW5hdGlvbiI6IkludmVyc2UgTFRJRCBzeXN0ZW1zIGNhc2NhZGUgdG8gdGhlIGlkZW50aXR5IHN5c3RlbSwgd2hvc2UgaW1wdWxzZSByZXNwb25zZSBpcyBcXChcXGRlbHRhW25dXFwpLiBDYXNjYWRlIG1lYW5zIGNvbnZvbHV0aW9uLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IkFkZGl0aW9uIGRlc2NyaWJlcyBhIHBhcmFsbGVsIGNvbWJpbmF0aW9uLCBub3QgY2FzY2FkZSBpbnZlcnNpb24uIiwiQiI6IlBvaW50d2lzZSBtdWx0aXBsaWNhdGlvbiBpcyBub3QgdGhlIExUSSBpbnZlcnNlIGNvbmRpdGlvbi4iLCJEIjoiVGhpcyBkb2VzIG5vdCBkZXNjcmliZSBhbiBpZGVudGl0eSBzeXN0ZW0uIn0sImhpbnQiOiJJbnZlcnNlIHN5c3RlbXMgYXJlIHRlc3RlZCB0aHJvdWdoIGNhc2NhZGUuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AyX3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInF1ZXN0aW9uX3N1YnR5cGUiOiJzdHJ1Y3R1cmVfY29tcGFyaXNvbl9jaGVjayIsInN0ZW0iOiJXaGljaCBwYWlyaW5nIGNvcnJlY3RseSBpZGVudGlmaWVzIHRoZSBhY2N1bXVsYXRvciBhbmQgYmFja3dhcmQgZGlmZmVyZW5jZSBzeXN0ZW1zPyIsIm9wdGlvbnMiOlsiQS4gQWNjdW11bGF0b3I6IFxcKHlbbl0gPSB4W25dIC0geFtuLTFdXFwpOyBiYWNrd2FyZCBkaWZmZXJlbmNlOiBcXCh5W25dID0gXFxzdW1fe2s9LVxcaW5mdHl9XntufSB4W2tdXFwpIiwiQi4gQWNjdW11bGF0b3I6IFxcKHlbbl0gPSBcXHN1bV97az0tXFxpbmZ0eX1ee259IHhba11cXCk7IGJhY2t3YXJkIGRpZmZlcmVuY2U6IFxcKHlbbl0gPSB4W25dIC0geFtuLTFdXFwpIiwiQy4gQWNjdW11bGF0b3I6IFxcKHlbbl0gPSB4W24rMV0gLSB4W25dXFwpOyBiYWNrd2FyZCBkaWZmZXJlbmNlOiBcXCh5W25dID0gXFxzdW1fe2s9bn1ee1xcaW5mdHl9IHhba11cXCkiLCJELiBBY2N1bXVsYXRvcjogXFwoeVtuXSA9IHhbbl1cXCk7IGJhY2t3YXJkIGRpZmZlcmVuY2U6IFxcKHlbbl0gPSB1W25dXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiVGhlIGFjY3VtdWxhdG9yIGZvcm1zIGEgcnVubmluZyBzdW0uIFRoZSBiYWNrd2FyZCBkaWZmZXJlbmNlIHN1YnRyYWN0cyB0aGUgcHJldmlvdXMgaW5wdXQgc2FtcGxlIGZyb20gdGhlIGN1cnJlbnQgc2FtcGxlLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoaXMgcmV2ZXJzZXMgdGhlIHR3byBkZWZpbml0aW9ucy4iLCJDIjoiXFwoeFtuKzFdIC0geFtuXVxcKSBpcyBhIGZvcndhcmQgZGlmZmVyZW5jZSwgYW5kIHRoZSBzdW1tYXRpb24gbGltaXQgaXMgbm90IHRoZSBhY2N1bXVsYXRvciBpbiB0aGlzIHNlY3Rpb24uIiwiRCI6IlRoZXNlIGFyZSBub3QgdGhlIHN5c3RlbSBkZWZpbml0aW9ucy4ifSwiaGludCI6IkFjY3VtdWxhdG9yIG1lYW5zIGN1bXVsYXRpdmUgc3VtOyBkaWZmZXJlbmNlIG1lYW5zIGN1cnJlbnQgbWludXMgcHJldmlvdXMuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6Indyb25nX3ZzX3JpZ2h0X2VxdWF0aW9uX2NvbXBhcmlzb24iLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6InN0ZXBfaW1wdWxzZV9yZWxhdGlvbiIsImxhYmVsIjoiVW5pdCBzdGVwIHJlc3BvbnNlIGFuZCBpbXB1bHNlIHJlc3BvbnNlIGNvbnZlcnNpb24iLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoibWVkaXVtIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwM19xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJxdWVzdGlvbl9zdWJ0eXBlIjoiZm9ybXVsYV90cmlnZ2VyX2NoZWNrIiwic3RlbSI6IkFuIExUSUQgc3lzdGVtIGhhcyBpbXB1bHNlIHJlc3BvbnNlIFxcKGhbbl1cXCkuIFdoaWNoIGZvcm11bGEgZ2l2ZXMgaXRzIHVuaXQgc3RlcCByZXNwb25zZSBcXChnW25dXFwpPyIsIm9wdGlvbnMiOlsiQS4gXFwoZ1tuXSA9IGhbbl0gLSBoW24tMV1cXCkiLCJCLiBcXChnW25dID0gXFxzdW1fe2s9LVxcaW5mdHl9XntufSBoW2tdXFwpIiwiQy4gXFwoZ1tuXSA9IGhbbl0gKiBoW25dXFwpIiwiRC4gXFwoZ1tuXSA9IFxcZGVsdGFbbl0gLSBcXGRlbHRhW24tMV1cXCkiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJUaGUgdW5pdCBzdGVwIHJlc3BvbnNlIGlzIHRoZSBjdW11bGF0aXZlIHN1bSBvZiB0aGUgaW1wdWxzZSByZXNwb25zZTogXFwoZ1tuXSA9IFxcc3VtX3trPS1cXGluZnR5fV57bn0gaFtrXVxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGlzIGlzIGEgYmFja3dhcmQgZGlmZmVyZW5jZSBvZiBcXChoW25dXFwpLCBub3QgdGhlIHN0ZXAgcmVzcG9uc2UuIiwiQyI6IlRoZXJlIGlzIG5vIHNlbGYtY29udm9sdXRpb24gcnVsZSBmb3IgdGhlIHVuaXQgc3RlcCByZXNwb25zZS4iLCJEIjoiVGhhdCBleHByZXNzaW9uIGlzIHRoZSBpbXB1bHNlIHJlc3BvbnNlIG9mIGEgYmFja3dhcmQgZGlmZmVyZW5jZSBzeXN0ZW0uIn0sImhpbnQiOiJBIHN0ZXAgaW5wdXQgaXMgdGhlIGFjY3VtdWxhdGVkIGltcHVsc2UgaW5wdXQuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AzX3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInF1ZXN0aW9uX3N1YnR5cGUiOiJtaW5pX3RyYW5zZmVyX2NoZWNrIiwic3RlbSI6IklmIGEgc3lzdGVtJ3MgdW5pdCBzdGVwIHJlc3BvbnNlIGlzIFxcKGdbbl1cXCksIGhvdyBkbyB5b3UgcmVjb3ZlciBpdHMgaW1wdWxzZSByZXNwb25zZSBcXChoW25dXFwpPyIsIm9wdGlvbnMiOlsiQS4gXFwoaFtuXSA9IGdbbl0gKyBnW24tMV1cXCkiLCJCLiBcXChoW25dID0gXFxzdW1fe2s9LVxcaW5mdHl9XntufSBnW2tdXFwpIiwiQy4gXFwoaFtuXSA9IGdbbl0gLSBnW24tMV1cXCkiLCJELiBcXChoW25dID0gZ1tuXSAqIHVbbl1cXCkiXSwiY29ycmVjdF9vcHRpb24iOiJDIiwiZXhwbGFuYXRpb24iOiJUaGUgaW1wdWxzZSByZXNwb25zZSBpcyB0aGUgYmFja3dhcmQgZGlmZmVyZW5jZSBvZiB0aGUgdW5pdCBzdGVwIHJlc3BvbnNlOiBcXChoW25dID0gZ1tuXSAtIGdbbi0xXVxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJBZGRpbmcgYWRqYWNlbnQgc3RlcC1yZXNwb25zZSBzYW1wbGVzIGRvZXMgbm90IHVuZG8gYWNjdW11bGF0aW9uLiIsIkIiOiJUaGF0IGFjY3VtdWxhdGVzIFxcKGdbbl1cXCkgYWdhaW4gaW5zdGVhZCBvZiByZXZlcnNpbmcgdGhlIGFjY3VtdWxhdGlvbi4iLCJEIjoiQ29udm9sdmluZyB3aXRoIFxcKHVbbl1cXCkgd291bGQgYWNjdW11bGF0ZSwgbm90IHJlY292ZXIgXFwoaFtuXVxcKS4ifSwiaGludCI6IlVuZG8gYSBydW5uaW5nIHN1bSB3aXRoIGEgYmFja3dhcmQgZGlmZmVyZW5jZS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6InRyYW5zZmVyX2Z1bmN0aW9uX2V4cG9uZW50aWFsIiwibGFiZWwiOiJFdmVybGFzdGluZyBleHBvbmVudGlhbCBhbmQgdHJhbnNmZXIgZnVuY3Rpb24iLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDRfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwicXVlc3Rpb25fc3VidHlwZSI6ImNvcmVfY29uY2VwdF9jaGVjayIsInN0ZW0iOiJGb3IgYW4gTFRJRCBzeXN0ZW0sIHdoeSBpcyB0aGUgZXZlcmxhc3RpbmcgZXhwb25lbnRpYWwgXFwoel5uXFwpIHNwZWNpYWw/Iiwib3B0aW9ucyI6WyJBLiBJdHMgb3V0cHV0IGlzIGFsd2F5cyB6ZXJvLiIsIkIuIEl0cyBvdXRwdXQgaGFzIHRoZSBzYW1lIFxcKHpeblxcKSBmb3JtIG11bHRpcGxpZWQgYnkgXFwoSFt6XVxcKS4iLCJDLiBJdCB0dXJucyBldmVyeSBzeXN0ZW0gaW50byBhbiBhY2N1bXVsYXRvci4iLCJELiBJdCB3b3JrcyBvbmx5IGZvciBub25saW5lYXIgc3lzdGVtcy4iXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJGb3IgYW4gTFRJRCBzeXN0ZW0sIGlucHV0IFxcKHpeblxcKSBwcm9kdWNlcyBvdXRwdXQgXFwoeVtuXSA9IEhbel16Xm5cXCksIHdoZXJlIFxcKEhbel1cXCkgaXMgYSBjb25zdGFudCBmb3IgdGhhdCBjaG9zZW4gXFwoelxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGVyZSBpcyBubyBnZW5lcmFsIHJlYXNvbiB0aGUgb3V0cHV0IG11c3QgYmUgemVyby4iLCJDIjoiVGhlIGV4cG9uZW50aWFsIGlucHV0IGRvZXMgbm90IGNoYW5nZSB0aGUgc3lzdGVtIHR5cGUuIiwiRCI6IlRoZSB0cmFuc2Zlci1mdW5jdGlvbiByZXN1bHQgaXMgZm9yIExUSUQgc3lzdGVtcywgbm90IG5vbmxpbmVhciBzeXN0ZW1zIGluIGdlbmVyYWwuIn0sImhpbnQiOiJMb29rIGZvciB0aGUgZWlnZW5mdW5jdGlvbiBwcm9wZXJ0eS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDRfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwicXVlc3Rpb25fc3VidHlwZSI6ImZvcm11bGFfdHJpZ2dlcl9jaGVjayIsInN0ZW0iOiJJZiB0aGUgaW1wdWxzZSByZXNwb25zZSBcXChoW25dXFwpIGlzIGtub3duLCB3aGljaCBmb3JtdWxhIGRlZmluZXMgdGhlIHRyYW5zZmVyIGZ1bmN0aW9uIFxcKEhbel1cXCkgaW4gdGhpcyBzZWN0aW9uPyIsIm9wdGlvbnMiOlsiQS4gXFwoSFt6XSA9IFxcc3VtX3ttPS1cXGluZnR5fV57XFxpbmZ0eX0gaFttXXpeey1tfVxcKSIsIkIuIFxcKEhbel0gPSBcXHN1bV97bT0tXFxpbmZ0eX1ee1xcaW5mdHl9IGhbbV16XnttfVxcKSIsIkMuIFxcKEhbel0gPSBoW25del5uXFwpIiwiRC4gXFwoSFt6XSA9IHhbbl0veVtuXVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IlRoZSB0cmFuc2ZlciBmdW5jdGlvbiBpcyBcXChIW3pdID0gXFxzdW1fe209LVxcaW5mdHl9XntcXGluZnR5fSBoW21del57LW19XFwpLCBhc3N1bWluZyB0aGUgc3VtIGNvbnZlcmdlcy4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJUaGUgZXhwb25lbnQgc2lnbiBpcyB3cm9uZyBmb3IgdGhlIGZvcm11bGEgZGVyaXZlZCBmcm9tIGNvbnZvbHV0aW9uIHdpdGggXFwoel5uXFwpLiIsIkMiOiJcXChIW3pdXFwpIGlzIGEgZnVuY3Rpb24gb2YgXFwoelxcKSwgbm90IHRoZSBwcm9kdWN0IFxcKGhbbl16Xm5cXCkuIiwiRCI6IlRoZSByYXRpbyBkZWZpbml0aW9uIGlzIG91dHB1dCBvdmVyIGlucHV0IGZvciBpbnB1dCBcXCh6Xm5cXCksIG5vdCBpbnB1dCBvdmVyIG91dHB1dC4ifSwiaGludCI6IlRoZSBjb252b2x1dGlvbiBkZXJpdmF0aW9uIHByb2R1Y2VzIFxcKHpee24tbX0gPSB6Xm4gel57LW19XFwpLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwNF9xMyIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJxdWVzdGlvbl9zdWJ0eXBlIjoiZGVtb19vYnNlcnZhdGlvbl9jaGVjayIsInN0ZW0iOiJJbiB0aGUgaW50ZXJhY3RpdmUgZGVtbywgdGhlIHNlbGVjdGVkIExUSUQgc3lzdGVtIGlzIGEgdW5pdCBkZWxheSBcXCh5W25dID0geFtuLTFdXFwpLiBGb3IgaW5wdXQgXFwoeFtuXSA9IHpeblxcKSwgd2hhdCBtdWx0aXBsaWVyIHNob3VsZCB0aGUgb3V0cHV0IGhhdmU/Iiwib3B0aW9ucyI6WyJBLiBcXChIW3pdID0gelxcKSIsIkIuIFxcKEhbel0gPSB6XnstMX1cXCkiLCJDLiBcXChIW3pdID0gMSAtIHpeey0xfVxcKSIsIkQuIFxcKEhbel0gPSAwXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiRm9yIGEgdW5pdCBkZWxheSwgXFwoeVtuXSA9IHhbbi0xXSA9IHpee24tMX0gPSB6XnstMX0gXFxjZG90IHpeblxcKSwgc28gXFwoSFt6XSA9IHpeey0xfVxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJcXCh6XFwpIHdvdWxkIGNvcnJlc3BvbmQgdG8gYW4gYWR2YW5jZSwgbm90IGEgZGVsYXkuIiwiQyI6IlxcKDEgLSB6XnstMX1cXCkgaXMgdGhlIGJhY2t3YXJkIGRpZmZlcmVuY2UgbXVsdGlwbGllci4iLCJEIjoiQSB1bml0IGRlbGF5IGRvZXMgbm90IHByb2R1Y2UgemVybyBvdXRwdXQuIn0sImhpbnQiOiJSZXdyaXRlIFxcKHpee24tMX1cXCkgYXMgYSBjb25zdGFudCB0aW1lcyBcXCh6Xm5cXCkuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6ImludGVyYWN0aXZlX2RlbW9fb2JzZXJ2YXRpb24iLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX1dfQ==" style="display:none;"></div>%%KC_END%%
