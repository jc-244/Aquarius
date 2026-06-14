%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6ImJvdGgiLCJyYXRpb25hbGUiOiJUaGlzIHNlY3Rpb24gaXMgYSBjaGFwdGVyIHN1bW1hcnksIHNvIHRoZSBsZXNzb24gc2hvdWxkIG5vdCBpbnRyb2R1Y2UgZGVjb3JhdGl2ZSB2aXN1YWxzLiBVc2UgYSBXaWtpbWVkaWEtc3R5bGUgcmVmZXJlbmNlIGltYWdlIGZvciB0aGUgZGlzY3JldGUtdGltZSBpbXB1bHNlIGJlY2F1c2UgaXQgaXMgYSBzdGFuZGFyZCBzdGF0aWMgb2JqZWN0LCBhbmQgdXNlIGFuIGludGVyYWN0aXZlIGNvbnZvbHV0aW9uIGRlbW8gYmVjYXVzZSB6ZXJvLXN0YXRlIHJlc3BvbnNlIGRlcGVuZHMgb24gc2VlaW5nIHNoaWZ0ZWQgaW1wdWxzZSByZXNwb25zZXMgYWRkIHVwIG92ZXIgaW5kZXggbi4iLCJjcmFtIjoiVXNlIHZpc3VhbHMgdG8gaWRlbnRpZnkgZXhhbSB0cmlnZ2VycyBxdWlja2x5OiBpbXB1bHNlIHJlc3BvbnNlIG1lYW5zIGNvbnZvbHV0aW9uOyByZXBlYXRlZCByb290IG1lYW5zIG11bHRpcGx5IGJ5IHBvd2VycyBvZiBuLiIsInN0YW5kYXJkIjoiVXNlIHRoZSBpbXB1bHNlIHZpc3VhbCBhbmQgY29udm9sdXRpb24gZGVtbyB0byBjb25uZWN0IHN5bWJvbHMgdG8gdGhlIGFjdHVhbCBzZXF1ZW5jZS1idWlsZGluZyBwcm9jZXNzLiIsInRvcF9zY29yZSI6IlVzZSB0aGUgZGVtbyBhbmQgdHJhcHMgdG8gc2VwYXJhdGUgemVyby1zdGF0ZSByZXNwb25zZSwgaW1wdWxzZSByZXNwb25zZSwgY2hhcmFjdGVyaXN0aWMgbW9kZXMsIGFuZCBleHBvbmVudGlhbC1pbnB1dCBiZWhhdmlvci4ifQ==" style="display:none;"></div>%%KC_END%%
# 3.13 Summary

> **Section Objective:** Review the main time-domain tools for linear, time-invariant, discrete-time systems.

---

## Concepts In This Section

- LTID systems and auxiliary conditions
- Characteristic modes
- Unit impulse response
- Convolution sum
- Everlasting exponential input

## 1. LTID Systems and Characteristic Modes

Discrete-time LTI (LTID) systems are described by **difference equations**. An Nth-order system requires exactly **N auxiliary conditions** to select one unique solution from the family of all possible solutions.

The **natural response** is built from characteristic modes — the system's intrinsic oscillation or decay patterns determined by the characteristic roots.

### KEY RULE

- **Unrepeated root:** the mode is a pure discrete-time exponential — the root raised to the power \(n\).
- **Repeated root:** powers of \(n\) appear as a multiplying factor in front of the exponential.

#### Example

If a root \(\gamma = 0.5\) appears once, the mode is \(0.5^n\). If it appears twice, the modes are \(0.5^n\) and \(n \cdot 0.5^n\).

## 2. Unit impulse response

This is the **characteristic mode** for an unrepeated root \(\gamma\). Here \(n\) is the integer discrete-time index, and \(\gamma\) is the characteristic root.

- If \(|\gamma| < 1\): the mode decays toward zero.
- If \(|\gamma| > 1\): the mode grows without bound.
- If \(\gamma < 0\): the mode alternates sign each step.

**Exam trigger:** When a problem gives a distinct characteristic root, write \(\gamma^n\) as the corresponding mode.

**Common misuse:** Do not write \(e^{\gamma t}\) — that is a continuous-time form. In discrete time, the root becomes the base of the exponent, not the exponent of \(e\).

$$\gamma^n$$

## 3. Zero-state response is a convolution sum

This is the **characteristic mode** for a **repeated** root \(\gamma\), where \(i = 0, 1, 2, \ldots\) indexes each mode in the repeated family.

If \(\gamma\) is a root of multiplicity \(m\), the corresponding modes are:
$$\gamma^n,\quad n\gamma^n,\quad n^2\gamma^n,\quad \ldots,\quad n^{m-1}\gamma^n$$

**Exam trigger:** When the same root appears more than once, include all \(n^i\gamma^n\) terms up to \(i = m-1\).

**Common misuse:** Writing only \(\gamma^n\) for every repeated-root term — this misses the required \(n^i\) factors and gives an incomplete natural response.

$$n^i \gamma^n$$

## 4. Everlasting exponentials are special inputs

The **discrete-time unit impulse** \(\delta[n]\) is the simplest possible input: a single sample equal to 1 at \(n = 0\), and 0 at every other integer.

The **impulse response** \(h[n]\) is the system's zero-state output when the input is exactly \(\delta[n]\). Once \(h[n]\) is known, it becomes a reusable building block.

### WHY THIS MATTERS

Any input \(x[n]\) can be decomposed into weighted, shifted impulses. Because the system is linear and time-invariant, the output is the corresponding weighted sum of shifted copies of \(h[n]\).

> **Key fact:** If an input is made of shifted impulses, the system output is made of shifted copies of \(h[n]\).

#### Note on special cases

In certain systems, the impulse response may include an impulse term \(\delta[n]\) in addition to the characteristic modes — this occurs when the system has direct feed-through or when numerator and denominator orders are equal.

$$\delta[n] = \begin{cases} 1, & n = 0 \\ 0, & n \ne 0 \end{cases}$$
*This piecewise definition states that the discrete-time unit impulse is **exactly one nonzero sample**, located at the origin \(n = 0\), with value 1. Every other integer index gives zero.

- \(n\) is the integer time index (\(\ldots, -2, -1, 0, 1, 2, \ldots\)).
- The sequence has **finite energy** — it is just one sample.

**Exam trigger:** Use this when a problem asks for impulse decomposition, impulse response computation, or convolution setup.

**Common misuse:** Drawing \(\delta[n]\) as a continuous-time spike with infinite height. In discrete time it is simply a single sample of height 1 — no infinite amplitude involved.*


## 3. Zero-State Response Is a Convolution Sum

Any discrete-time input \(x[n]\) can be written as a sum of weighted, shifted impulses:
$$x[n] = \sum_{k=-\infty}^{\infty} x[k]\,\delta[n-k]$$

Because the system is **linear**, each weighted impulse produces a weighted output. Because it is **time-invariant**, a shifted impulse produces a shifted copy of \(h[n]\). Adding all those copies gives the **zero-state response**.

### EXAM TRIGGER

> When you see: LTID system + input \(x[n]\) + impulse response \(h[n]\) — the answer method is **convolution**.

### COMMON MISTAKE

Do **not** multiply \(x[n]\) and \(h[n]\) sample-by-sample and stop. Convolution requires **shifting** \(h\) by each index \(k\), **multiplying** by \(x[k]\), and **summing** over all \(k\). Pointwise multiplication is a different operation entirely.

$$y_{zs}[n] = \sum_{k=-\infty}^{\infty} x[k]\, h[n-k]$$
*This is the **convolution sum** for zero-state response.

- \(y_{zs}[n]\): the output due only to the external input (zero initial conditions).
- \(x[k]\): the input sample at index \(k\) — this is the weight.
- \(h[n-k]\): the impulse response shifted by \(k\) — this is the shifted copy.
- The summation index \(k\) disappears after summing; the result depends only on \(n\).

**Exam trigger:** Given an LTID system's impulse response and an input, apply this formula to find the output.

**Common misuse:** Writing \(h[k-n]\) instead of \(h[n-k]\) — these differ by a time-reversal. Also, forgetting that \(k\) is the dummy summation variable and does not appear in the final answer \(y_{zs}[n]\).*

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="interactive_demo" data-teaching-role="concept_anchor" data-visual-use-b64="eyJjcmFtIjoiTGV0IHN0dWRlbnRzIGRyYWcgYSBzaGlmdCBhbmQgaW1tZWRpYXRlbHkgc2VlIHRoYXQgY29udm9sdXRpb24gbWVhbnMgc2hpZnRlZC1jb3B5IGFkZGl0aW9uLiIsInN0YW5kYXJkIjoiVXNlIHRoZSBkZW1vIHRvIGNvbm5lY3QgaW1wdWxzZSBkZWNvbXBvc2l0aW9uIHRvIHRoZSBzdW1tYXRpb24gZm9ybXVsYSBzdGVwIGJ5IHN0ZXAuIiwidG9wX3Njb3JlIjoiVXNlIGVkZ2UgY2FzZXMgc3VjaCBhcyBmaW5pdGUtc3VwcG9ydCBvdmVybGFwIGFuZCBuby1vdmVybGFwIHBvc2l0aW9ucyB0byBwcmV2ZW50IGluZGV4LW9yZGVyIG1pc3Rha2VzLiJ9" style="display:none;"></div><div class="kc-interactive-demo" data-demo-b64="eyJ0eXBlIjoiaW50ZXJhY3RpdmVfZGVtbyIsInRlYWNoaW5nX3JvbGUiOiJjb25jZXB0X2FuY2hvciIsIm1vZGVfc3BlY2lmaWNfdmlzdWFsX3VzZSI6eyJjcmFtIjoiTGV0IHN0dWRlbnRzIGRyYWcgYSBzaGlmdCBhbmQgaW1tZWRpYXRlbHkgc2VlIHRoYXQgY29udm9sdXRpb24gbWVhbnMgc2hpZnRlZC1jb3B5IGFkZGl0aW9uLiIsInN0YW5kYXJkIjoiVXNlIHRoZSBkZW1vIHRvIGNvbm5lY3QgaW1wdWxzZSBkZWNvbXBvc2l0aW9uIHRvIHRoZSBzdW1tYXRpb24gZm9ybXVsYSBzdGVwIGJ5IHN0ZXAuIiwidG9wX3Njb3JlIjoiVXNlIGVkZ2UgY2FzZXMgc3VjaCBhcyBmaW5pdGUtc3VwcG9ydCBvdmVybGFwIGFuZCBuby1vdmVybGFwIHBvc2l0aW9ucyB0byBwcmV2ZW50IGluZGV4LW9yZGVyIG1pc3Rha2VzLiJ9LCJkZW1vX3NwZWMiOnsidGl0bGUiOiJCdWlsZCBaZXJvLVN0YXRlIFJlc3BvbnNlIGZyb20gU2hpZnRlZCBJbXB1bHNlIFJlc3BvbnNlcyIsInRlY2hub2xvZ3kiOiJSZWFjdCArIENhbnZhcyIsImxheW91dCI6IlRocmVlIHN0YWNrZWQgc3RlbSBwbG90cyBvbiBhIHdoaXRlIGJhY2tncm91bmQ6IGlucHV0IHNhbXBsZXMgXFwoeFtrXVxcKSwgc2hpZnRlZCByZXNwb25zZSBjb3B5IFxcKGhbbi1rXVxcKSwgYW5kIGFjY3VtdWxhdGVkIG91dHB1dCBcXCh5X3t6c31bbl1cXCkuIiwiY29udHJvbHMiOlsiU2xpZGVyIGZvciBvdXRwdXQgaW5kZXggbiBmcm9tIC01IHRvIDgiLCJUb2dnbGUgYmV0d2VlbiB0d28gc21hbGwgcHJlc2V0IGlucHV0czogc2luZ2xlIGltcHVsc2UgYW5kIHR3by1zYW1wbGUgaW5wdXQiLCJUb2dnbGUgYmV0d2VlbiB0d28gaW1wdWxzZSByZXNwb25zZXM6IHNob3J0IGRlY2F5aW5nIHNlcXVlbmNlIGFuZCB0d28tdGFwIHNlcXVlbmNlIl0sInN0dWRlbnRfYWN0aW9ucyI6WyJNb3ZlIG4gYW5kIHdhdGNoIHdoaWNoIHNhbXBsZXMgb3ZlcmxhcC4iLCJPYnNlcnZlIHRoYXQgZWFjaCBvdXRwdXQgc2FtcGxlIGlzIGEgc3VtIG9mIHByb2R1Y3RzIG92ZXIgay4iLCJDb21wYXJlIHRoZSBzaW5nbGUtaW1wdWxzZSBjYXNlIHdpdGggdGhlIG11bHRpLXNhbXBsZSBpbnB1dCBjYXNlLiJdLCJ3aGF0X3RvX25vdGljZSI6WyJDb252b2x1dGlvbiBpcyAqKm5vdCoqIHBvaW50d2lzZSBtdWx0aXBsaWNhdGlvbiDigJQgdGhlIGltcHVsc2UgcmVzcG9uc2UgbXVzdCBiZSBzaGlmdGVkIGFuZCBmbGlwcGVkIGJlZm9yZSBtdWx0aXBseWluZy4iLCJPbmx5IHRoZSAqKm92ZXJsYXBwaW5nKiogc2FtcGxlcyBvZiBcXCh4W2tdXFwpIGFuZCBcXChoW24ta11cXCkgY29udHJpYnV0ZSBub256ZXJvIHByb2R1Y3RzIHRvIHRoZSBzdW0uIiwiVGhlIGZpbmFsIG91dHB1dCBpbmRleCBpcyBcXChuXFwpLCBub3QgXFwoa1xcKSDigJQgXFwoa1xcKSBpcyB0aGUgZHVtbXkgc3VtbWF0aW9uIHZhcmlhYmxlIHRoYXQgZGlzYXBwZWFycy4iXX19"></div>%%KC_END%%

## 4. Everlasting Exponentials Are Special Inputs

For an LTID system, inputs of the form \(z^n\) — called **everlasting exponentials** — have a remarkable property: the system's output keeps the **same exponential shape** and changes only by a **multiplicative scale factor** determined by the system.

This is fundamentally different from arbitrary inputs, where the output shape can differ significantly from the input shape.

> **Core intuition:** Same signal shape, different scale factor.

### EXAM TRIGGER

If an exam problem gives an LTID system driven by an everlasting exponential input \(z^n\), look for a **multiplicative response factor** rather than solving the entire difference equation from scratch. The output will be that same \(z^n\) multiplied by a system-dependent constant.

#### Note

This property is the foundation for frequency-domain and Z-transform analysis covered in later chapters.

$$z^n \longrightarrow \text{constant} \times z^n$$
*This symbolic statement captures the key property of everlasting exponential inputs for LTID systems.

- \(z\): the exponential base (may be real or complex).
- \(n\): the integer discrete-time index.
- The arrow represents the system's input-output mapping.
- The **constant** is a system-dependent multiplier — it depends on \(z\) and the system's difference equation, but not on \(n\).

**Exam trigger:** When the input is an everlasting exponential \(z^n\), the output is the same \(z^n\) scaled by a constant. Find that constant rather than solving the full difference equation.

**Common misuse:** Assuming every finite-duration or one-sided signal keeps its shape this way. This property holds specifically for **everlasting** exponentials (defined for all \(n\)), not for causal or finite-support signals.*

---
**📌 Key Takeaways**
- **LTID systems** are described by difference equations; an Nth-order system needs N auxiliary conditions. Natural response = sum of characteristic modes.
- **Unrepeated root** \(\gamma\): mode is \(\gamma^n\). **Repeated root** \(\gamma\) of multiplicity \(m\): modes are \(n^i\gamma^n\) for \(i = 0, 1, \ldots, m-1\).
- **Unit impulse:** \(\delta[n] = \begin{cases}1, & n=0 \\ 0, & n\ne 0\end{cases}\). The impulse response \(h[n]\) is the zero-state output to \(\delta[n]\) and determines the response to any input.
- **Zero-state response by convolution:** \(y_{zs}[n] = \sum_{k=-\infty}^{\infty} x[k]\,h[n-k]\). Not pointwise multiplication — requires shifting, multiplying, and summing.
- **Everlasting exponential:** \(z^n \longrightarrow \text{constant} \times z^n\). Same shape, scaled by a system-dependent factor. Look for the multiplier, not a full difference-equation solution.

*Next, use these summary formulas as the checklist for solving LTID time-domain problems.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NywicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo2LCJtYXgiOjh9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6Imx0aWRfbW9kZXMiLCJsYWJlbCI6IkNoYXJhY3RlcmlzdGljIG1vZGVzIGFuZCByZXBlYXRlZCByb290cyIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6Im1vZGVzX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJBbiB1bnJlcGVhdGVkIGNoYXJhY3RlcmlzdGljIHJvb3QgaXMgXFwoXFxnYW1tYVxcKS4gV2hpY2ggbW9kZSBzaG91bGQgYXBwZWFyIGluIHRoZSBuYXR1cmFsIHJlc3BvbnNlPyIsIm9wdGlvbnMiOlsiQS4gXFwoXFxnYW1tYV5uXFwpIiwiQi4gXFwoblxcZ2FtbWFcXCkiLCJDLiBcXChlXntcXGdhbW1hIG59XFwpIiwiRC4gXFwoXFxnYW1tYStuXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiRm9yIGFuIHVucmVwZWF0ZWQgZGlzY3JldGUtdGltZSBjaGFyYWN0ZXJpc3RpYyByb290IFxcKFxcZ2FtbWFcXCksIHRoZSBtb2RlIGlzIFxcKFxcZ2FtbWFeblxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJUaGlzIGRvZXMgbm90IHBsYWNlIHRoZSByb290IGFzIHRoZSBiYXNlIG9mIGEgZGlzY3JldGUtdGltZSBleHBvbmVudGlhbC4iLCJDIjoiVGhpcyBpcyBhIGNvbnRpbnVvdXMtZXhwb25lbnRpYWwtbG9va2luZyBmb3JtLCBub3QgdGhlIG1vZGUgc3RhdGVkIGluIHRoZSBzZWN0aW9uIHN1bW1hcnkuIiwiRCI6IkEgY2hhcmFjdGVyaXN0aWMgbW9kZSBpcyBub3Qgcm9vdCBwbHVzIHRpbWUgaW5kZXguIn0sImhpbnQiOiJEaXNjcmV0ZS10aW1lIGNoYXJhY3RlcmlzdGljIG1vZGVzIHVzZSB0aGUgdGltZSBpbmRleCBhcyBhbiBleHBvbmVudC4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJtb2Rlc19xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiQSByb290IFxcKFxcZ2FtbWFcXCkgaXMgcmVwZWF0ZWQuIFdoaWNoIGV4dHJhIGZlYXR1cmUgYXBwZWFycyBpbiB0aGUgY29ycmVzcG9uZGluZyBtb2RlIGZhbWlseT8iLCJvcHRpb25zIjpbIkEuIFBvd2VycyBvZiBcXChuXFwpLCBhcyBpbiBcXChuXmlcXGdhbW1hXm5cXCkiLCJCLiBQb3dlcnMgb2YgXFwoXFxnYW1tYVxcKSwgYXMgaW4gXFwoXFxnYW1tYV5pIG5cXCkiLCJDLiBBIHNoaWZ0ZWQgaW1wdWxzZSBvbmx5IiwiRC4gVGhlIGlucHV0IFxcKHhbbl1cXCkgZGlzYXBwZWFycyJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IlJlcGVhdGVkIHJvb3RzIGludHJvZHVjZSBmYWN0b3JzIFxcKG5eaVxcKSBtdWx0aXBseWluZyBcXChcXGdhbW1hXm5cXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiVGhlIHJlcGVhdGVkLXJvb3QgZmFjdG9yIGlzIGEgcG93ZXIgb2YgdGhlIHRpbWUgaW5kZXgsIG5vdCBhIHBvd2VyIG9mIHRoZSByb290IGFsb25lLiIsIkMiOiJUaGUgZm9vdG5vdGUgbWVudGlvbnMgaW1wdWxzZSB0ZXJtcyBpbiBzcGVjaWFsIGltcHVsc2UtcmVzcG9uc2UgY2FzZXMsIG5vdCBhcyB0aGUgZ2VuZXJhbCByZXBlYXRlZC1yb290IG1vZGUgcnVsZS4iLCJEIjoiUmVwZWF0ZWQgcm9vdHMgYWZmZWN0IHRoZSBuYXR1cmFsLXJlc3BvbnNlIG1vZGUgc3RydWN0dXJlLCBub3QgdGhlIGV4aXN0ZW5jZSBvZiB0aGUgaW5wdXQuIn0sImhpbnQiOiJBc2sgd2hhdCBnZXRzIG11bHRpcGxpZWQgaW4gZnJvbnQgb2YgXFwoXFxnYW1tYV5uXFwpLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoidW5pdF9pbXB1bHNlX3Jlc3BvbnNlIiwibGFiZWwiOiJVbml0IGltcHVsc2UgYW5kIGltcHVsc2UgcmVzcG9uc2UiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJpbXB1bHNlX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGljaCBzdGF0ZW1lbnQgY29ycmVjdGx5IGRlc2NyaWJlcyBcXChcXGRlbHRhW25dXFwpPyIsIm9wdGlvbnMiOlsiQS4gSXQgZXF1YWxzIDEgYXQgXFwobj0wXFwpIGFuZCAwIGVsc2V3aGVyZS4iLCJCLiBJdCBlcXVhbHMgMCBhdCBcXChuPTBcXCkgYW5kIDEgZWxzZXdoZXJlLiIsIkMuIEl0IGlzIGEgY29udGludW91cy10aW1lIHNwaWtlIHdpdGggaW5maW5pdGUgaGVpZ2h0LiIsIkQuIEl0IGlzIGFueSBzZXF1ZW5jZSB3aXRoIHRvdGFsIHN1bSAxLiJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IlRoZSBkaXNjcmV0ZS10aW1lIHVuaXQgaW1wdWxzZSBpcyBvbmUgdW5pdC12YWx1ZWQgc2FtcGxlIGF0IFxcKG49MFxcKSBhbmQgemVybyBldmVyeXdoZXJlIGVsc2UuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiVGhpcyByZXZlcnNlcyB0aGUgZGVmaW5pdGlvbi4iLCJDIjoiVGhhdCBjb25mdXNlcyBkaXNjcmV0ZS10aW1lIGltcHVsc2Ugbm90YXRpb24gd2l0aCBjb250aW51b3VzLXRpbWUgaW1wdWxzZSBpbnR1aXRpb24uIiwiRCI6Ik1hbnkgc2VxdWVuY2VzIGNhbiBzdW0gdG8gMTsgXFwoXFxkZWx0YVtuXVxcKSBoYXMgYSBzcGVjaWZpYyBzaW5nbGUtc2FtcGxlIGxvY2F0aW9uLiJ9LCJoaW50IjoiTG9vayBmb3Igb25lIG5vbnplcm8gc2FtcGxlIGF0IHRoZSBvcmlnaW4uIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6InZpc3VhbF9wYXR0ZXJuX3JlY29nbml0aW9uX2NoZWNrIiwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX0seyJpZCI6ImltcHVsc2VfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoeSBpcyBcXChoW25dXFwpIHNvIGltcG9ydGFudCBmb3IgYW4gTFRJRCBzeXN0ZW0/Iiwib3B0aW9ucyI6WyJBLiBJdCBkZXRlcm1pbmVzIHRoZSB6ZXJvLXN0YXRlIHJlc3BvbnNlIHRvIGFueSBpbnB1dCB0aHJvdWdoIGNvbnZvbHV0aW9uLiIsIkIuIEl0IHJlcGxhY2VzIHRoZSBuZWVkIGZvciBhdXhpbGlhcnkgY29uZGl0aW9ucyBpbiBldmVyeSBwcm9ibGVtLiIsIkMuIEl0IGlzIGFsd2F5cyBlcXVhbCB0byB0aGUgaW5wdXQgXFwoeFtuXVxcKS4iLCJELiBJdCBpcyBvbmx5IHVzZWZ1bCBmb3IgY29udGludW91cy10aW1lIHN5c3RlbXMuIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiT25jZSBcXChoW25dXFwpIGlzIGtub3duLCB0aGUgemVyby1zdGF0ZSByZXNwb25zZSB0byBhcmJpdHJhcnkgXFwoeFtuXVxcKSBpcyBmb3VuZCBieSBjb252b2x1dGlvbi4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJBdXhpbGlhcnkgY29uZGl0aW9ucyBhcmUgc3RpbGwgbmVlZGVkIGZvciB1bmlxdWUgdG90YWwgc29sdXRpb25zIGludm9sdmluZyBuYXR1cmFsIHJlc3BvbnNlLiIsIkMiOiJUaGUgaW1wdWxzZSByZXNwb25zZSBpcyB0aGUgb3V0cHV0IHRvIFxcKFxcZGVsdGFbbl1cXCksIG5vdCBnZW5lcmFsbHkgdGhlIHNhbWUgYXMgdGhlIGlucHV0LiIsIkQiOiJUaGlzIHNlY3Rpb24gaXMgc3BlY2lmaWNhbGx5IGFib3V0IGRpc2NyZXRlLXRpbWUgTFRJRCBzeXN0ZW1zLiJ9LCJoaW50IjoiVGhlIGltcHVsc2UgcmVzcG9uc2UgaXMgdGhlIHN5c3RlbSdzIHJldXNhYmxlIHJlc3BvbnNlIGJ1aWxkaW5nIGJsb2NrLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9XX0seyJpZCI6ImNvbnZvbHV0aW9uX3N1bSIsImxhYmVsIjoiWmVyby1zdGF0ZSByZXNwb25zZSBieSBjb252b2x1dGlvbiIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImNvbnZfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkZvciBhbiBMVElEIHN5c3RlbSB3aXRoIGlucHV0IFxcKHhbbl1cXCkgYW5kIGltcHVsc2UgcmVzcG9uc2UgXFwoaFtuXVxcKSwgd2hpY2ggZm9ybXVsYSBnaXZlcyB0aGUgemVyby1zdGF0ZSByZXNwb25zZT8iLCJvcHRpb25zIjpbIkEuIFxcKHlfe3pzfVtuXT1cXHN1bV97az0tXFxpbmZ0eX1ee1xcaW5mdHl9eFtrXWhbbi1rXVxcKSIsIkIuIFxcKHlfe3pzfVtuXT14W25daFtuXVxcKSIsIkMuIFxcKHlfe3pzfVtuXT14W25dK2hbbl1cXCkiLCJELiBcXCh5X3t6c31bbl09XFxnYW1tYV5uXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiVGhlIHplcm8tc3RhdGUgcmVzcG9uc2UgaXMgdGhlIGNvbnZvbHV0aW9uIHN1bSBvZiB0aGUgaW5wdXQgd2l0aCB0aGUgaW1wdWxzZSByZXNwb25zZS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJUaGF0IGlzIHBvaW50d2lzZSBtdWx0aXBsaWNhdGlvbiwgbm90IGNvbnZvbHV0aW9uLiIsIkMiOiJBZGRpbmcgdGhlIHR3byBzZXF1ZW5jZXMgZGlyZWN0bHkgZG9lcyBub3QgcmVwcmVzZW50IHRoZSBMVElEIHN5c3RlbSByZXNwb25zZS4iLCJEIjoiXFwoXFxnYW1tYV5uXFwpIGlzIGEgY2hhcmFjdGVyaXN0aWMgbW9kZSwgbm90IHRoZSBnZW5lcmFsIHplcm8tc3RhdGUgY29udm9sdXRpb24gZm9ybXVsYS4ifSwiaGludCI6Ikxvb2sgZm9yIHNoaWZ0aW5nLCBtdWx0aXBseWluZywgYW5kIHN1bW1pbmcgb3ZlciBhbiBpbmRleC4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJjb252X3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJJbiB0aGUgY29udm9sdXRpb24gZGVtbywgYXQgYSBjZXJ0YWluIG91dHB1dCBpbmRleCBcXChuXFwpLCB0aGUgc2hpZnRlZCBcXChoW24ta11cXCkgc2VxdWVuY2UgaGFzIG5vIG92ZXJsYXAgd2l0aCB0aGUgbm9uemVybyBzYW1wbGVzIG9mIFxcKHhba11cXCkuIFdoYXQgc2hvdWxkIHRoZSBvdXRwdXQgc2FtcGxlIGJlPyIsIm9wdGlvbnMiOlsiQS4gMCIsIkIuIDEiLCJDLiBcXChoW25dXFwpIiwiRC4gVGhlIGxhcmdlc3QgdmFsdWUgb2YgXFwoeFtrXVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IklmIHRoZXJlIGlzIG5vIG92ZXJsYXAsIGV2ZXJ5IHByb2R1Y3QgXFwoeFtrXWhbbi1rXVxcKSBpcyB6ZXJvLCBzbyB0aGUgc3VtIGlzIHplcm8uIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiVGhlcmUgaXMgbm8gYXV0b21hdGljIHVuaXQgb3V0cHV0IHdpdGhvdXQgb3ZlcmxhcC4iLCJDIjoiVGhlIG91dHB1dCBpcyBhIHN1bSBvZiBwcm9kdWN0cywgbm90IHNpbXBseSB0aGUgdW5zaGlmdGVkIGltcHVsc2UgcmVzcG9uc2UuIiwiRCI6IlRoZSBsYXJnZXN0IGlucHV0IHZhbHVlIGRvZXMgbm90IGRldGVybWluZSB0aGUgb3V0cHV0IHVubGVzcyBpdCBvdmVybGFwcyB3aXRoIG5vbnplcm8gaW1wdWxzZS1yZXNwb25zZSBzYW1wbGVzLiJ9LCJoaW50IjoiTm8gb3ZlcmxhcCBtZWFucyBubyBub256ZXJvIHByb2R1Y3RzLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJkZW1vX29ic2VydmF0aW9uX2NoZWNrIiwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJldmVybGFzdGluZ19leHBvbmVudGlhbCIsImxhYmVsIjoiRXZlcmxhc3RpbmcgZXhwb25lbnRpYWwgaW5wdXQiLCJpbXBvcnRhbmNlIjoibWVkaXVtIiwiZXhhbV93ZWlnaHQiOiJtZWRpdW0iLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoiZXhwX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJBbiBMVElEIHN5c3RlbSBpcyBkcml2ZW4gYnkgYW4gZXZlcmxhc3RpbmcgZXhwb25lbnRpYWwgaW5wdXQgXFwoel5uXFwpLiBXaGF0IGlzIHRoZSBrZXkgcmVzcG9uc2UgcGF0dGVybiBzdW1tYXJpemVkIGluIHRoaXMgc2VjdGlvbj8iLCJvcHRpb25zIjpbIkEuIFRoZSBvdXRwdXQga2VlcHMgdGhlIGZvcm0gXFwoel5uXFwpIGFuZCBpcyBtdWx0aXBsaWVkIGJ5IGEgY29uc3RhbnQgZmFjdG9yLiIsIkIuIFRoZSBvdXRwdXQgbXVzdCBiZWNvbWUgXFwoXFxkZWx0YVtuXVxcKS4iLCJDLiBUaGUgb3V0cHV0IG11c3QgYmUgcG9pbnR3aXNlIGVxdWFsIHRvIFxcKHhbbl1oW25dXFwpLiIsIkQuIFRoZSBvdXRwdXQgaXMgYWx3YXlzIHplcm8gdW5sZXNzIFxcKHo9MVxcKS4iXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJFdmVybGFzdGluZyBleHBvbmVudGlhbHMgYXJlIHNwZWNpYWwgZm9yIExUSUQgc3lzdGVtczogdGhlIHJlc3BvbnNlIGtlZXBzIHRoZSBzYW1lIGV4cG9uZW50aWFsIHNoYXBlIGFuZCBjaGFuZ2VzIGJ5IGEgbXVsdGlwbGljYXRpdmUgZmFjdG9yLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IkFuIGltcHVsc2UgaXMgYSBkaWZmZXJlbnQgdHlwZSBvZiBpbnB1dCBzaWduYWwuIiwiQyI6IlRoaXMgcmVwZWF0cyB0aGUgcG9pbnR3aXNlIG11bHRpcGxpY2F0aW9uIHRyYXA7IExUSUQgcmVzcG9uc2UgaXMgbm90IGdlbmVyYWxseSBwb2ludHdpc2UgbXVsdGlwbGljYXRpb24uIiwiRCI6IlRoZSBzdW1tYXJ5IGRvZXMgbm90IHN0YXRlIHRoYXQgdGhlIHJlc3BvbnNlIHZhbmlzaGVzIGV4Y2VwdCBhdCBcXCh6PTFcXCkuIn0sImhpbnQiOiJUaGluazogc2FtZSBzaWduYWwgc2hhcGUsIGRpZmZlcmVudCBzY2FsZSBmYWN0b3IuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfSx7ImlkIjoiY29tbW9uX3RyYXBzIiwibGFiZWwiOiJDb21tb24gc3VtbWFyeS1sZXZlbCBjb25mdXNpb25zIiwiaW1wb3J0YW5jZSI6Im1lZGl1bSIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJ0cmFwX3ExIiwidHlwZSI6InNob3J0X2Fuc3dlciIsInN0ZW0iOiJBIGNsYXNzbWF0ZSBzYXlzOiAnVG8gZ2V0IHRoZSB6ZXJvLXN0YXRlIHJlc3BvbnNlLCBqdXN0IG11bHRpcGx5IFxcKHhbbl1cXCkgYW5kIFxcKGhbbl1cXCkgYXQgZWFjaCBcXChuXFwpLicgRXhwbGFpbiB3aHkgdGhpcyBpcyB3cm9uZy4iLCJpZGVhbF9hbnN3ZXIiOiJaZXJvLXN0YXRlIHJlc3BvbnNlIGZvciBhbiBMVElEIHN5c3RlbSBpcyBmb3VuZCBieSBjb252b2x1dGlvbiwgbm90IHBvaW50d2lzZSBtdWx0aXBsaWNhdGlvbi4gVGhlIGlucHV0IGlzIGRlY29tcG9zZWQgaW50byBzaGlmdGVkIGltcHVsc2VzLCBlYWNoIHByb2R1Y2VzIGEgc2hpZnRlZCBjb3B5IG9mIFxcKGhbbl1cXCksIGFuZCB0aGUgb3V0cHV0IHNhbXBsZSBpcyBhIHN1bSBvdmVyIG92ZXJsYXBwaW5nIHByb2R1Y3RzIFxcKHhba11oW24ta11cXCkuIiwiZ3JhZGluZ19ydWJyaWMiOlsiTXVzdCBzdGF0ZSB0aGF0IHBvaW50d2lzZSBtdWx0aXBsaWNhdGlvbiBpcyBub3QgY29udm9sdXRpb24uIiwiTXVzdCBtZW50aW9uIHNoaWZ0aW5nIG9yIHNoaWZ0ZWQgaW1wdWxzZSByZXNwb25zZXMuIiwiTXVzdCBtZW50aW9uIHN1bW1pbmcgb3ZlciBhbiBpbmRleCBzdWNoIGFzIFxcKGtcXCkuIl0sImV4cGxhbmF0aW9uIjoiVGhpcyBjaGVja3Mgd2hldGhlciB0aGUgc3R1ZGVudCB1bmRlcnN0YW5kcyB0aGUgc3RydWN0dXJlIG9mIGNvbnZvbHV0aW9uIGluc3RlYWQgb2YgbWVtb3JpemluZyBhIGZvcm11bGEgc2hhcGUuIiwiaGludCI6IlVzZSB0aGUgd29yZHMgc2hpZnRlZCBjb3BpZXMgYW5kIHN1bS4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoid3JvbmdfdnNfcmlnaHRfdmlzdWFsX2NoZWNrIiwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfV19" style="display:none;"></div>%%KC_END%%
