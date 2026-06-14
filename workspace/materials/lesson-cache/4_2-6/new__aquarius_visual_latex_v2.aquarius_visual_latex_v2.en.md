%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6Indpa2lfYW5pbWF0ZWQiLCJyYXRpb25hbGUiOiJUaGlzIHNlY3Rpb24gaXMgbWFpbmx5IGFib3V0IHRyYW5zZm9ybS1kb21haW4gY29uc2VxdWVuY2VzIG9mIGNvbnZvbHV0aW9uLiBBIG1vdmluZyBjb252b2x1dGlvbiBhbmltYXRpb24gaXMgdGhlIGNsZWFyZXN0IHdheSB0byBzaG93IHdoeSB0aW1lIGNvbnZvbHV0aW9uIGlzIG5vdCBvcmRpbmFyeSBtdWx0aXBsaWNhdGlvbiwgd2hpbGUgYSBzaW1wbGUgTFRJQyBpbnB1dC1zeXN0ZW0tb3V0cHV0IHJlZmVyZW5jZSB2aXN1YWwgc3VwcG9ydHMgdGhlIHRyYW5zZmVyLWZ1bmN0aW9uIGZvcm11bGFzLiBObyB0ZXh0Ym9vayBmaWd1cmVzIGFyZSBhdmFpbGFibGUsIHNvIFdpa2lwZWRpYS9XaWtpbWVkaWEgdmlzdWFscyBzaG91bGQgYmUgc2VhcmNoZWQgZmlyc3QuIEdlbmVyYXRlZCBpbWFnZXMgc2hvdWxkIG5vdCBiZSB1c2VkIHVubGVzcyB0aG9zZSBzZWFyY2hlcyBmYWlsLiIsImNyYW0iOiJVc2UgdGhlIHZpc3VhbHMgdG8gbWVtb3JpemUgdGhlIGV4YW0gdHJpZ2dlcjogY29udm9sdXRpb24gaW4gdGltZSBiZWNvbWVzIG11bHRpcGxpY2F0aW9uIGluIHMuIiwic3RhbmRhcmQiOiJVc2UgdGhlIGFuaW1hdGlvbiB0byBjb25uZWN0IHNsaWRpbmctb3ZlcmxhcCBpbnR1aXRpb24gdG8gdGhlIGNvbXBhY3QgZm9ybXVsYS4iLCJ0b3Bfc2NvcmUiOiJVc2UgdmlzdWFscyB0byBzZXBhcmF0ZSB0aW1lIGNvbnZvbHV0aW9uLCBmcmVxdWVuY3kgY29udm9sdXRpb24sIGFuZCBMVElDIHRyYW5zZmVyLWZ1bmN0aW9uIHJhdGlvcyB3aXRob3V0IG1peGluZyB0aGVpciBkb21haW5zLiJ9" style="display:none;"></div>%%KC_END%%
# Time Convolution and Frequency Convolution

> **Section Objective:** Learn how convolution and multiplication trade places under the Laplace transform, and how this gives the s-domain input-output rule for LTIC systems.

## Concepts In This Section

- Time-convolution property
- Frequency-convolution property
- LTIC zero-state response
- Transfer function ratio

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="web_reference_image" data-teaching-role="concept_anchor" data-visual-use-b64="eyJjcmFtIjoiVmlzdWFsIHRyaWdnZXI6IHNsaWRpbmcgb3ZlcmxhcCBpbiB0aW1lIG1lYW5zIG11bHRpcGx5IHRyYW5zZm9ybXMgaW4gcyDigJQgdGhhdCBpcyB0aGUgZW50aXJlIHRpbWUtY29udm9sdXRpb24gcHJvcGVydHkuIiwic3RhbmRhcmQiOiJXYXRjaCBob3cgdGhlIG92ZXJsYXAgYXJlYSBjaGFuZ2VzIGFzIG9uZSBzaWduYWwgc2xpZGVzLiBUaGUgZm9ybXVsYSBcXChYXzEocylYXzIocylcXCkgaXMgdGhlIGNvbXBhY3Qgc2hvcnRjdXQgZm9yIHRoaXMgZW50aXJlIHNsaWRpbmcgcHJvY2Vzcy4iLCJ0b3Bfc2NvcmUiOiJDb252b2x1dGlvbiBpcyBub3QgcG9pbnR3aXNlIG11bHRpcGxpY2F0aW9uLiBUaGUgc2xpZGluZyBvcGVyYXRpb24gaW50ZWdyYXRlcyBhbGwgc2hpZnRlZCBwcm9kdWN0cywgd2hpY2ggaXMgd2h5IHRoZSB0cmFuc2Zvcm0tZG9tYWluIHJ1bGUgaXMgc28gcG93ZXJmdWwg4oCUIGl0IGNvbGxhcHNlcyB0aGF0IGludGVncmFsIGludG8gYSBzaW5nbGUgcHJvZHVjdC4ifQ==" style="display:none;"></div>%%KC_END%%
![Convolution](https://upload.wikimedia.org/wikipedia/commons/2/21/Comparison_convolution_correlation.svg)
*Convolution as a sliding overlap: one function moves across the other, and the shaded area at each position gives the output value. This sliding operation in time becomes simple multiplication in the s-domain.*
%%KC_BLOCK%%<div class="kc-reference-source"><a href="https://upload.wikimedia.org/wikipedia/commons/2/21/Comparison_convolution_correlation.svg" target="_blank" rel="noopener noreferrer">Reference image from Wikipedia</a></div>%%KC_END%%

## 1. Time-Convolution Property

**Formula (4.17)** — the time-convolution property of the Laplace transform.

If \(x_1(t)\Longleftrightarrow X_1(s)\) and \(x_2(t)\Longleftrightarrow X_2(s)\), then convolution in time becomes ordinary multiplication in the s-domain.

**Symbol guide:**
- \(*\) denotes convolution (the sliding-overlap integral), not multiplication
- \(X_1(s)\), \(X_2(s)\) are the Laplace transforms of \(x_1(t)\) and \(x_2(t)\)
- \(s\) is the complex frequency variable

**Exam trigger:** Whenever a problem asks for \(x_1(t)*x_2(t)\), transform both factors, multiply the transforms, then inverse-transform the product.

**Minimal example:** \(e^{at}u(t)*e^{bt}u(t)\) is found by multiplying \(\frac{1}{s-a}\) and \(\frac{1}{s-b}\) in the s-domain.

#### COMMON MISUSE
Do not multiply \(x_1(t)\cdot x_2(t)\) in time and call it convolution — pointwise multiplication and convolution are completely different operations.

$$x_1(t)*x_2(t)\Longleftrightarrow X_1(s)X_2(s)$$

## 2. Frequency-Convolution Property

This is the **dual partner** of the time-convolution property: multiplication in time becomes convolution in the s-domain, scaled by \(\frac{1}{2\pi j}\).

**Symbol guide:**
- \(x_1(t)x_2(t)\) is pointwise multiplication of two time-domain signals
- \(X_1(s)*X_2(s)\) is convolution performed in the transform (frequency) variable \(s\)
- \(j\) is the imaginary unit appearing in the complex contour scale factor \(\frac{1}{2\pi j}\)

**When to use it:** When the time-domain signal of interest is expressed as a product of two simpler signals.

**Exam trigger:** Look for a product \(x_1(t)x_2(t)\) in time — that is the signal for this property, not a convolution.

#### COMMON MISUSE
Forgetting the \(\frac{1}{2\pi j}\) scale factor, or incorrectly replacing the s-domain convolution \(X_1(s)*X_2(s)\) with ordinary multiplication \(X_1(s)X_2(s)\).

$$x_1(t)x_2(t)\Longleftrightarrow \frac{1}{2\pi j}\,[X_1(s)*X_2(s)]$$

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="web_reference_image" data-teaching-role="concept_anchor" data-visual-use-b64="eyJjcmFtIjoiTWVtb3JpemUgdGhlIGlucHV0LXRpbWVzLXN5c3RlbSBydWxlOiBcXChZKHMpPVgocylIKHMpXFwpLiBUaGUgZGlhZ3JhbSBzaG93cyB3aGVyZSBlYWNoIHRyYW5zZm9ybSBsaXZlcy4iLCJzdGFuZGFyZCI6IkNvbm5lY3QgdGhlIHRpbWUtZG9tYWluIGJsb2NrIFxcKHk9eCpoXFwpIHRvIHRoZSBzLWRvbWFpbiBtdWx0aXBsaWNhdGlvbiBmb3JtdWxhIGJ5IGFwcGx5aW5nIHRoZSB0aW1lLWNvbnZvbHV0aW9uIHByb3BlcnR5IHRvIHRoZSBkaWFncmFtLiIsInRvcF9zY29yZSI6IlxcKEgocylcXCkgaXMgYSBwcm9wZXJ0eSBvZiB0aGUgc3lzdGVtIGFsb25lLiBcXChYKHMpXFwpIGFuZCBcXChZKHMpXFwpIGNoYW5nZSB3aXRoIGV2ZXJ5IGRpZmZlcmVudCBpbnB1dC4gVGhlIGRpYWdyYW0gbWFrZXMgdGhpcyBzZXBhcmF0aW9uIGV4cGxpY2l0LiJ9" style="display:none;"></div>%%KC_END%%
![Linear time-invariant system](https://upload.wikimedia.org/wikipedia/commons/8/84/Superposition_principle_and_time_invariance_block_diagram_for_a_SISO_system.png)
*An LTIC system block diagram: input \(x(t)\) enters the system characterized by impulse response \(h(t)\) (or transfer function \(H(s)\)), and the zero-state output \(y(t)\) emerges. In the s-domain, the convolution \(y=x*h\) becomes the product \(Y(s)=X(s)H(s)\).*
%%KC_BLOCK%%<div class="kc-reference-source"><a href="https://upload.wikimedia.org/wikipedia/commons/8/84/Superposition_principle_and_time_invariance_block_diagram_for_a_SISO_system.png" target="_blank" rel="noopener noreferrer">Reference image from Wikipedia</a></div>%%KC_END%%

## 3. LTIC Zero-State Response in the s-Domain

**Formula (4.18)** — the s-domain zero-state response of an LTIC system.

For any LTIC system, the zero-state response satisfies \(y(t)=x(t)*h(t)\) in the time domain. Applying the time-convolution property (4.17) immediately gives \(Y(s)=X(s)H(s)\) — the convolution integral collapses into a single multiplication.

**Symbol guide:**
- \(X(s)\) — Laplace transform of the input signal \(x(t)\)
- \(H(s)\) — transfer function, equal to the Laplace transform of the impulse response \(h(t)\)
- \(Y(s)\) — Laplace transform of the zero-state output \(y(t)\)

**When to use it:** Any causal or noncausal LTIC input-output problem where the impulse response or transfer function is known.

**Exam trigger:** The phrase *zero-state response* combined with \(x(t)\), \(h(t)\), or \(H(s)\).

#### COMMON MISUSE
Using \(Y(s)=X(s)H(s)\) for the **total** response when nonzero initial conditions are present. Initial-condition terms must be added separately; this formula covers only the zero-state part.

$$Y(s)=X(s)H(s)$$

## 4. Transfer Function as a Response/Input Ratio

**Formula (4.19)** — the LTIC transfer function defined as an output-to-input transform ratio.

Rearranging \(Y(s)=X(s)H(s)\) gives this alternate definition of \(H(s)\). It says the transfer function is a property of the system that can be read off directly from any zero-state input-output pair.

**Symbol guide:**
- \(H(s)\) — the transfer function, a property of the system itself
- \(Y(s)\) — Laplace transform of the **zero-state** response
- \(X(s)\) — Laplace transform of the applied input

**When to use it:** When a problem gives an input and the corresponding zero-state output, and asks for the system transfer function.

**Minimal example:** If \(Y(s)=\frac{3X(s)}{s+2}\), then \(H(s)=\frac{Y(s)}{X(s)}=\frac{3}{s+2}\).

#### COMMON MISUSE
Taking the ratio \(Y(s)/X(s)\) when \(Y(s)\) includes initial-condition response terms. The ratio \(H(s)\) is only valid when \(Y(s)\) is the **zero-state** output transform.

$$H(s)=\frac{Y(s)}{X(s)}=\frac{\mathcal{L}[\text{zero-state response}]}{\mathcal{L}[\text{input}]}$$

---
**📌 Key Takeaways**
- (4.17) \(x_1(t)*x_2(t)\Longleftrightarrow X_1(s)X_2(s)\): convolution in time becomes multiplication in s.
- \(x_1(t)x_2(t)\Longleftrightarrow \frac{1}{2\pi j}[X_1(s)*X_2(s)]\): multiplication in time becomes frequency convolution.
- (4.18) \(Y(s)=X(s)H(s)\): LTIC zero-state response becomes multiplication in the s-domain.
- (4.19) \(H(s)=Y(s)/X(s)\): transfer function is the zero-state output/input transform ratio.

*Next, these properties support faster system analysis and response calculations.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InRpbWVfY29udm9sdXRpb25fcHJvcGVydHkiLCJsYWJlbCI6IlRpbWUgY29udm9sdXRpb24gYmVjb21lcyBtdWx0aXBsaWNhdGlvbiBpbiB0aGUgcy1kb21haW4iLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJ0aW1lX2NvbnZfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IklmIFxcKHhfMSh0KVxcTG9uZ2xlZnRyaWdodGFycm93IFhfMShzKVxcKSBhbmQgXFwoeF8yKHQpXFxMb25nbGVmdHJpZ2h0YXJyb3cgWF8yKHMpXFwpLCB3aGF0IGlzIHRoZSBMYXBsYWNlLXRyYW5zZm9ybSBwYWlyIGZvciBcXCh4XzEodCkqeF8yKHQpXFwpPyIsIm9wdGlvbnMiOlsiQS4gXFwoeF8xKHQpKnhfMih0KVxcTG9uZ2xlZnRyaWdodGFycm93IFhfMShzKStYXzIocylcXCkiLCJCLiBcXCh4XzEodCkqeF8yKHQpXFxMb25nbGVmdHJpZ2h0YXJyb3cgWF8xKHMpWF8yKHMpXFwpIiwiQy4gXFwoeF8xKHQpKnhfMih0KVxcTG9uZ2xlZnRyaWdodGFycm93IFhfMShzKSpYXzIocylcXCkiLCJELiBcXCh4XzEodCkqeF8yKHQpXFxMb25nbGVmdHJpZ2h0YXJyb3cgXFxmcmFjezF9ezJcXHBpIGp9WF8xKHMpWF8yKHMpXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiVGhlIHRpbWUtY29udm9sdXRpb24gcHJvcGVydHkgc2F5cyBjb252b2x1dGlvbiBpbiB0aW1lIGJlY29tZXMgb3JkaW5hcnkgbXVsdGlwbGljYXRpb24gaW4gdGhlIHMtZG9tYWluLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IkFkZGl0aW9uIGluIHRpbWUgY29ycmVzcG9uZHMgdG8gYWRkaXRpb24gb2YgdHJhbnNmb3Jtcywgbm90IGNvbnZvbHV0aW9uLiIsIkMiOiJUaGF0IGNvbmZ1c2VzIHRpbWUgY29udm9sdXRpb24gd2l0aCBmcmVxdWVuY3ktZG9tYWluIGNvbnZvbHV0aW9uLiIsIkQiOiJUaGUgXFwoMS8oMlxccGkgailcXCkgZmFjdG9yIGJlbG9uZ3MgdG8gdGhlIGZyZXF1ZW5jeS1jb252b2x1dGlvbiBwcm9wZXJ0eSwgbm90IHRoZSB0aW1lLWNvbnZvbHV0aW9uIHByb3BlcnR5LiJ9LCJoaW50IjoiQ29udm9sdXRpb24gaW4gb25lIGRvbWFpbiB1c3VhbGx5IGJlY29tZXMgbXVsdGlwbGljYXRpb24gaW4gdGhlIG90aGVyLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6InRpbWVfY29udl9xMl92aXN1YWwiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkluIHRoZSBjb252b2x1dGlvbiBhbmltYXRpb24sIG9uZSBzaWduYWwgc2xpZGVzIGFjcm9zcyBhbm90aGVyIGFuZCB0aGUgb3ZlcmxhcCBjaGFuZ2VzLiBXaGljaCB0cmFuc2Zvcm0tZG9tYWluIG9wZXJhdGlvbiBkb2VzIHRoaXMgc2xpZGluZyB0aW1lLWRvbWFpbiBjb252b2x1dGlvbiBiZWNvbWU/Iiwib3B0aW9ucyI6WyJBLiBNdWx0aXBsaWNhdGlvbiBvZiBcXChYXzEocylcXCkgYW5kIFxcKFhfMihzKVxcKSIsIkIuIEFkZGl0aW9uIG9mIFxcKFhfMShzKVxcKSBhbmQgXFwoWF8yKHMpXFwpIiwiQy4gRGlmZmVyZW50aWF0aW9uIG9mIFxcKFhfMShzKVxcKSIsIkQuIERpdmlzaW9uIG9mIFxcKFhfMShzKVxcKSBieSBcXChYXzIocylcXCkiXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJUaGUgc2xpZGluZy1vdmVybGFwIG9wZXJhdGlvbiBpcyB0aW1lIGNvbnZvbHV0aW9uLCBhbmQgaXRzIExhcGxhY2UtZG9tYWluIHNob3J0Y3V0IGlzIG11bHRpcGxpY2F0aW9uLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IkFkZGl0aW9uIHdvdWxkIHJlcHJlc2VudCBhZGRpbmcgc2lnbmFscywgbm90IGNvbnZvbHZpbmcgdGhlbS4iLCJDIjoiRGlmZmVyZW50aWF0aW9uIGluIHRoZSBzLWRvbWFpbiBpcyB0aWVkIHRvIG11bHRpcGxpY2F0aW9uIGJ5IHRpbWUsIG5vdCB0aGlzIHNsaWRpbmcgb3BlcmF0aW9uLiIsIkQiOiJEaXZpc2lvbiBhcHBlYXJzIGluIHRyYW5zZmVyLWZ1bmN0aW9uIHJhdGlvcywgbm90IGluIHRoZSBiYXNpYyBjb252b2x1dGlvbiBwcm9wZXJ0eS4ifSwiaGludCI6IldhdGNoIGZvciB0aGUgc3ltYm9sIFxcKCpcXCkgaW4gdGltZS4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoiYW5pbWF0ZWRfY29udm9sdXRpb25fb2JzZXJ2YXRpb24iLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6ImZyZXF1ZW5jeV9jb252b2x1dGlvbl9wcm9wZXJ0eSIsImxhYmVsIjoiVGltZSBtdWx0aXBsaWNhdGlvbiBiZWNvbWVzIGZyZXF1ZW5jeSBjb252b2x1dGlvbiIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJtZWRpdW0iLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoiZnJlcV9jb252X3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGljaCBmb3JtdWxhIG1hdGNoZXMgdGhlIGZyZXF1ZW5jeS1jb252b2x1dGlvbiBwcm9wZXJ0eSBmcm9tIHRoaXMgc2VjdGlvbj8iLCJvcHRpb25zIjpbIkEuIFxcKHhfMSh0KXhfMih0KVxcTG9uZ2xlZnRyaWdodGFycm93IFhfMShzKVhfMihzKVxcKSIsIkIuIFxcKHhfMSh0KXhfMih0KVxcTG9uZ2xlZnRyaWdodGFycm93IFxcZnJhY3sxfXsyXFxwaSBqfVtYXzEocykqWF8yKHMpXVxcKSIsIkMuIFxcKHhfMSh0KSp4XzIodClcXExvbmdsZWZ0cmlnaHRhcnJvdyBcXGZyYWN7MX17MlxccGkgan1bWF8xKHMpWF8yKHMpXVxcKSIsIkQuIFxcKHhfMSh0KSt4XzIodClcXExvbmdsZWZ0cmlnaHRhcnJvdyBYXzEocykqWF8yKHMpXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiTXVsdGlwbGljYXRpb24gaW4gdGltZSBiZWNvbWVzIGNvbnZvbHV0aW9uIGluIHRoZSBzLWRvbWFpbiwgd2l0aCB0aGUgZmFjdG9yIFxcKDEvKDJcXHBpIGopXFwpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoaXMgd3JvbmdseSB0cmVhdHMgdGltZSBtdWx0aXBsaWNhdGlvbiBsaWtlIHRpbWUgY29udm9sdXRpb24uIiwiQyI6IlRoaXMgbWl4ZXMgdGhlIHRpbWUtY29udm9sdXRpb24gcHJvcGVydHkgd2l0aCB0aGUgZnJlcXVlbmN5LWNvbnZvbHV0aW9uIHNjYWxlIGZhY3Rvci4iLCJEIjoiQWRkaXRpb24gaW4gdGltZSBjb3JyZXNwb25kcyB0byBhZGRpdGlvbiBvZiB0cmFuc2Zvcm1zLCBub3QgY29udm9sdXRpb24uIn0sImhpbnQiOiJUaGUgcHJvcGVydHkgd2l0aCBhIHByb2R1Y3QgXFwoeF8xKHQpeF8yKHQpXFwpIGlzIHRoZSBvbmUgd2l0aCBcXCgxLygyXFxwaSBqKVxcKS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6Imx0aWNfemVyb19zdGF0ZV9yZXNwb25zZSIsImxhYmVsIjoiTFRJQyB6ZXJvLXN0YXRlIHJlc3BvbnNlIGZvcm11bGEiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJsdGljX3Jlc3BvbnNlX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJGb3IgYW4gTFRJQyBzeXN0ZW0gd2l0aCBpbnB1dCB0cmFuc2Zvcm0gXFwoWChzKVxcKSBhbmQgdHJhbnNmZXIgZnVuY3Rpb24gXFwoSChzKVxcKSwgd2hhdCBpcyB0aGUgemVyby1zdGF0ZSBvdXRwdXQgdHJhbnNmb3JtPyIsIm9wdGlvbnMiOlsiQS4gXFwoWShzKT1YKHMpK0gocylcXCkiLCJCLiBcXChZKHMpPVgocylIKHMpXFwpIiwiQy4gXFwoWShzKT1IKHMpL1gocylcXCkiLCJELiBcXChZKHMpPVgocykqSChzKVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IkJlY2F1c2UgXFwoeSh0KT14KHQpKmgodClcXCksIHRoZSB0aW1lLWNvbnZvbHV0aW9uIHByb3BlcnR5IGdpdmVzIFxcKFkocyk9WChzKUgocylcXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhlIHN5c3RlbSByZXNwb25zZSBpcyBub3QgZm91bmQgYnkgYWRkaW5nIGlucHV0IGFuZCBzeXN0ZW0gdHJhbnNmb3Jtcy4iLCJDIjoiVGhhdCByZXZlcnNlcyB0aGUgdHJhbnNmZXItZnVuY3Rpb24gcmF0aW8gaWRlYS4iLCJEIjoiVGltZSBjb252b2x1dGlvbiBiZWNvbWVzIG11bHRpcGxpY2F0aW9uIGluIHRoZSBzLWRvbWFpbiwgbm90IHMtZG9tYWluIGNvbnZvbHV0aW9uLiJ9LCJoaW50IjoiU3RhcnQgZnJvbSBcXCh5KHQpPXgodCkqaCh0KVxcKS4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoibHRpY19pbnB1dF9zeXN0ZW1fb3V0cHV0X2RpYWdyYW0iLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJsdGljX3Jlc3BvbnNlX3EyX3RyYXAiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkEgY2xhc3NtYXRlIHVzZXMgXFwoWShzKT1YKHMpSChzKVxcKSBmb3IgYSByZXNwb25zZSB0aGF0IGluY2x1ZGVzIG5vbnplcm8gaW5pdGlhbC1jb25kaXRpb24gZWZmZWN0cy4gV2hhdCBpcyB0aGUgcHJvYmxlbT8iLCJvcHRpb25zIjpbIkEuIFxcKFkocyk9WChzKUgocylcXCkgYXBwbGllcyB0byB6ZXJvLXN0YXRlIHJlc3BvbnNlLCBub3QgdGhlIHRvdGFsIHJlc3BvbnNlIHdpdGggaW5pdGlhbC1jb25kaXRpb24gdGVybXMuIiwiQi4gXFwoWShzKT1YKHMpSChzKVxcKSBvbmx5IHdvcmtzIGZvciBub25jYXVzYWwgc3lzdGVtcy4iLCJDLiBcXChZKHMpPVgocylIKHMpXFwpIG9ubHkgd29ya3Mgd2hlbiBcXChYKHMpPTFcXCkuIiwiRC4gXFwoWShzKT1YKHMpSChzKVxcKSBpcyBuZXZlciB2YWxpZCBmb3IgTFRJQyBzeXN0ZW1zLiJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IlRoZSB0ZXh0Ym9vayBleHBsaWNpdGx5IGlkZW50aWZpZXMgXFwoWShzKT1YKHMpSChzKVxcKSBhcyB0aGUgemVyby1zdGF0ZSByZXNwb25zZSByZWxhdGlvbnNoaXAuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiVGhlIGZvcm11bGEgaXMgdXNlZCBmb3IgTFRJQyBzeXN0ZW1zIGdlbmVyYWxseTsgY2F1c2FsaXR5IGNoYW5nZXMgdW5pbGF0ZXJhbCB2ZXJzdXMgYmlsYXRlcmFsIGRldGFpbHMsIG5vdCB0aGUgY29yZSB6ZXJvLXN0YXRlIHJlbGF0aW9uc2hpcC4iLCJDIjoiVGhlIGlucHV0IGNhbiBiZSBnZW5lcmFsOyBcXChYKHMpPTFcXCkgaXMgbm90IHJlcXVpcmVkLiIsIkQiOiJUaGUgZm9ybXVsYSBpcyBvbmUgb2YgdGhlIG1haW4gdmFsaWQgTFRJQyB0cmFuc2Zvcm0tZG9tYWluIHJ1bGVzLiJ9LCJoaW50IjoiTG9vayBmb3IgdGhlIHBocmFzZSAnemVyby1zdGF0ZScuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJ0cmFuc2Zlcl9mdW5jdGlvbl9yYXRpbyIsImxhYmVsIjoiVHJhbnNmZXIgZnVuY3Rpb24gYXMgb3V0cHV0L2lucHV0IHRyYW5zZm9ybSByYXRpbyIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoxfSwicXVlc3Rpb25zIjpbeyJpZCI6InRyYW5zZmVyX3JhdGlvX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJBIHplcm8tc3RhdGUgTFRJQyBzeXN0ZW0gaGFzIFxcKFgocyk9XFxmcmFjezF9e3MrMX1cXCkgYW5kIFxcKFkocyk9XFxmcmFjezV9eyhzKzEpKHMrMyl9XFwpLiBXaGF0IGlzIFxcKEgocylcXCk/Iiwib3B0aW9ucyI6WyJBLiBcXChcXGZyYWN7NX17cyszfVxcKSIsIkIuIFxcKFxcZnJhY3sxfXs1KHMrMyl9XFwpIiwiQy4gXFwoXFxmcmFjezV9eyhzKzEpXjIocyszKX1cXCkiLCJELiBcXChcXGZyYWN7cyszfXs1fVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IlVzZSBcXChIKHMpPVkocykvWChzKVxcKS4gRGl2aWRpbmcgXFwoXFxmcmFjezV9eyhzKzEpKHMrMyl9XFwpIGJ5IFxcKFxcZnJhY3sxfXtzKzF9XFwpIGNhbmNlbHMgdGhlIFxcKChzKzEpXFwpIGZhY3RvciwgbGVhdmluZyBcXChcXGZyYWN7NX17cyszfVxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJUaGlzIGludmVydHMgdGhlIGNvcnJlY3QgcmF0aW8uIiwiQyI6IlRoaXMgbXVsdGlwbGllcyBieSBcXChYKHMpXFwpIGluc3RlYWQgb2YgZGl2aWRpbmcgYnkgaXQuIiwiRCI6IlRoaXMgaXMgdGhlIHJlY2lwcm9jYWwgb2YgdGhlIGNvcnJlY3QgdHJhbnNmZXIgZnVuY3Rpb24uIn0sImhpbnQiOiJUcmFuc2ZlciBmdW5jdGlvbiBlcXVhbHMgb3V0cHV0IHRyYW5zZm9ybSBkaXZpZGVkIGJ5IGlucHV0IHRyYW5zZm9ybS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19XX0=" style="display:none;"></div>%%KC_END%%
