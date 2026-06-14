%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6InJlYWN0X2RlbW8iLCJyYXRpb25hbGUiOiJUaGlzIHNlY3Rpb24gaXMgbW9zdGx5IHN5bWJvbGljLCBidXQgdGhlIGtleSBpZGVhIGlzIGEgcHJvY2VzczogY29udmVydCB4KHQpIHRvIFgocyksIG11bHRpcGx5IGJ5IEgocyksIHRoZW4gaW52ZXJ0IHRvIHkodCkuIEEgc3R1ZGVudC1jb250cm9sbGVkIFJlYWN0ICsgQ2FudmFzIGZsb3cgZGlhZ3JhbSBpcyBzdHJvbmdlciB0aGFuIGEgc3RhdGljIGltYWdlIGJlY2F1c2UgaXQgc2hvd3MgaG93IGNoYW5naW5nIHRoZSBpbnB1dCBvciB0cmFuc2ZlciBmdW5jdGlvbiBjaGFuZ2VzIHRoZSBhbGdlYnJhaWMgcHJvZHVjdCBhbmQgdGhlIGZpbmFsIHRpbWUtZG9tYWluIHJlc3BvbnNlLiBUaGUgdGV4dGJvb2sgaW5jbHVkZXMgYSBjb25jZXB0dWFsIEZpZy4gNC44LCBidXQgbm8gY3JvcHBlZCBmaWd1cmUgYXNzZXQgaXMgYXZhaWxhYmxlLCBhbmQgZnVsbC1wYWdlIHNjcmVlbnNob3RzIGFyZSBmb3JiaWRkZW4uIiwiY3JhbSI6IlVzZSB0aGUgZGVtbyBhcyBhIHRocmVlLXN0ZXAgZXhhbSByZWNpcGU6IGZpbmQgSChzKSwgbXVsdGlwbHkgYnkgWChzKSwgaW52ZXJzZS10cmFuc2Zvcm0gWShzKS4iLCJzdGFuZGFyZCI6IlVzZSB0aGUgZGVtbyB0byBjb25uZWN0IHRoZSB0aW1lLWRvbWFpbiBzeXN0ZW0sIExhcGxhY2UtZG9tYWluIG11bHRpcGxpY2F0aW9uLCBhbmQgZmluYWwgemVyby1zdGF0ZSByZXNwb25zZS4iLCJ0b3Bfc2NvcmUiOiJVc2UgdGhlIGRlbW8gdG8gdGVzdCBlZGdlIGNhc2VzOiB6ZXJvIGluaXRpYWwgY29uZGl0aW9ucywgY2F1c2FsIGlucHV0LCBkZWxheSB2ZXJzdXMgZGlmZmVyZW50aWF0aW9uIHZlcnN1cyBpbnRlZ3JhdGlvbi4ifQ==" style="display:none;"></div>%%KC_END%%
# Zero-State Response

> **Section Objective:** Learn how Laplace transforms give the zero-state response of an LTIC system by turning a differential equation into \(Y(s) = X(s)H(s)\).

## Concepts In This Section

- Zero-state response
- Zero initial conditions
- Transfer function
- Laplace-domain multiplication
- Inverse Laplace superposition
- Ideal delay
- Ideal differentiator
- Ideal integrator

## 1. LTIC differential equation model

This is the general LTIC differential equation, labeled **(4.26)** in the textbook. The operator \(D\) means differentiation with respect to time: \(D^r f(t) = d^r f / dt^r\).

- The left side, \(Q(D)\), acts on the **output** \(y(t)\).
- The right side, \(P(D)\), acts on the **input** \(x(t)\).

**Zero-state response** means the system starts fully relaxed:

$$y(0^-) = y'(0^-) = \cdots = y^{(N-1)}(0^-) = 0$$

The causal input also contributes zero pre-start derivative values.

**Minimal example:** For \(N = 2\), the left side may look like \(y''(t) + 5y'(t) + 6y(t)\).

### EXAM TRIGGER
A differential equation with all initial conditions stated as zero — apply the zero-state transfer-function method directly.

### COMMON MISUSE
Do not use this zero-state method alone when nonzero initial conditions are present. In that case, you must also add the zero-input response.

$$(D^N+a_1D^{N-1}+\cdots+a_{N-1}D+a_N)y(t)=(b_0D^N+b_1D^{N-1}+\cdots+b_{N-1}D+b_N)x(t)$$

## 2. Transfer function from the differential equation

This is the transfer function formula **(4.27)**. Under zero initial conditions, each operator \(D^r\) becomes multiplication by \(s^r\), converting the differential equation into an algebraic equation:

$$Q(s)Y(s) = P(s)X(s)$$

Solving for the ratio gives \(H(s) = Y(s)/X(s) = P(s)/Q(s)\).

- **\(P(s)\)** — polynomial from the input-side operator \(P(D)\)
- **\(Q(s)\)** — polynomial from the output-side operator \(Q(D)\)

**When to use:** When the system is described by an LTIC differential equation and the question asks for \(H(s)\) or a zero-state response.

**Minimal example:** From \((D^2+5D+6)y(t) = (D+1)x(t)\):

$$H(s) = \frac{s+1}{s^2+5s+6}$$

### EXAM TRIGGER
Phrases like *"initially in zero state"* or *"all initial conditions are zero."*

### COMMON MISUSE
Reversing the ratio and writing \(Q(s)/P(s)\) instead of \(P(s)/Q(s)\). Remember: \(P\) is on the input side, so it goes in the numerator.

$$H(s)=\frac{P(s)}{Q(s)}=\frac{b_0s^N+b_1s^{N-1}+\cdots+b_{N-1}s+b_N}{s^N+a_1s^{N-1}+\cdots+a_{N-1}s+a_N}$$

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="interactive_demo" data-teaching-role="concept_anchor" data-visual-use-b64="eyJjcmFtIjoiTWFrZSBzdHVkZW50cyBtZW1vcml6ZSB0aGUgdGhyZWUtYm94IGZsb3c6IFgocyksIG11bHRpcGx5IGJ5IEgocyksIGludmVyc2UtdHJhbnNmb3JtLiIsInN0YW5kYXJkIjoiU2hvdyB3aHkgc29sdmluZyBpbiB0aGUgcy1kb21haW4gaXMgc2ltcGxlciB0aGFuIGRpcmVjdGx5IHNvbHZpbmcgdGhlIGRpZmZlcmVudGlhbCBlcXVhdGlvbi4iLCJ0b3Bfc2NvcmUiOiJMZXQgc3R1ZGVudHMgY29tcGFyZSBob3cgY2hhbmdpbmcgSChzKSBjaGFuZ2VzIFkocykgd2l0aG91dCBjaGFuZ2luZyB0aGUgaW5wdXQuIn0=" style="display:none;"></div><div class="kc-interactive-demo" data-demo-b64="eyJ0eXBlIjoiaW50ZXJhY3RpdmVfZGVtbyIsInBhZ2VfdGl0bGUiOiIzLiBWaXN1YWwgcmVjaXBlOiB0aW1lIGRvbWFpbiB0byBzLWRvbWFpbiBhbmQgYmFjayIsInRlYWNoaW5nX3JvbGUiOiJjb25jZXB0X2FuY2hvciIsIm1vZGVfc3BlY2lmaWNfdmlzdWFsX3VzZSI6eyJjcmFtIjoiTWFrZSBzdHVkZW50cyBtZW1vcml6ZSB0aGUgdGhyZWUtYm94IGZsb3c6IFgocyksIG11bHRpcGx5IGJ5IEgocyksIGludmVyc2UtdHJhbnNmb3JtLiIsInN0YW5kYXJkIjoiU2hvdyB3aHkgc29sdmluZyBpbiB0aGUgcy1kb21haW4gaXMgc2ltcGxlciB0aGFuIGRpcmVjdGx5IHNvbHZpbmcgdGhlIGRpZmZlcmVudGlhbCBlcXVhdGlvbi4iLCJ0b3Bfc2NvcmUiOiJMZXQgc3R1ZGVudHMgY29tcGFyZSBob3cgY2hhbmdpbmcgSChzKSBjaGFuZ2VzIFkocykgd2l0aG91dCBjaGFuZ2luZyB0aGUgaW5wdXQuIn0sImNhcHRpb24iOiJaZXJvLXN0YXRlIHJlc3BvbnNlIGlzIGVhc2llc3QgdG8gY29tcHV0ZSBieSB0cmFuc2Zvcm1pbmcgeCh0KSwgbXVsdGlwbHlpbmcgYnkgSChzKSwgYW5kIGludmVyc2UtdHJhbnNmb3JtaW5nIHRoZSByZXN1bHQuIiwic3R1ZGVudF9wcm9tcHQiOiJNb3ZlIHRocm91Z2ggdGhlIGNoYWluOiBzdGFydCB3aXRoIHgodCksIHRyYW5zZm9ybSB0byBYKHMpLCBtdWx0aXBseSBieSBIKHMpLCB0aGVuIHJldHVybiB0byB5KHQpLiBOb3RpY2UgdGhhdCB0aGUgc3lzdGVtIGFjdGlvbiBpcyBtdWx0aXBsaWNhdGlvbiBpbiB0aGUgcy1kb21haW4uIiwiY29udHJvbHMiOlsiSW5wdXQgc2VsZWN0b3I6IGVeey0ydH11KHQpIG9yIDNlXnstNXR9dSh0KSIsIlN5c3RlbSBzZWxlY3RvcjogZGVsYXkgKEgocyk9ZV57LXNUfSksIGRpZmZlcmVudGlhdG9yIChIKHMpPXMpLCBpbnRlZ3JhdG9yIChIKHMpPTEvcykiLCJPcHRpb25hbCBzbGlkZXIgZm9yIGRlbGF5IFQgZnJvbSAwIHRvIDMgc2Vjb25kcyJdLCJjYW52YXNfZWxlbWVudHMiOlsiTGVmdCBib3ggbGFiZWxlZCAnVGltZSBkb21haW46IHgodCknIiwiTWlkZGxlIGJveCBsYWJlbGVkICdGcmVxdWVuY3kgZG9tYWluOiBZKHMpID0gWChzKUgocyknIiwiUmlnaHQgYm94IGxhYmVsZWQgJ1RpbWUgZG9tYWluOiB5KHQpID0gTF57LTF9e1kocyl9JyIsIkFycm93cyBsYWJlbGVkIEwgKGxlZnQtdG8tbWlkZGxlKSBhbmQgTF57LTF9IChtaWRkbGUtdG8tcmlnaHQpIiwiQSBoaWdobGlnaHRlZCBtdWx0aXBsaWNhdGlvbiBiYWRnZSBzaG93aW5nIEgocykgYWN0aW5nIG9uIFgocykiXSwiaW1wbGVtZW50YXRpb25fc3BlYyI6eyJmcmFtZXdvcmsiOiJSZWFjdCArIENhbnZhcyIsImxheW91dCI6InRocmVlIGhvcml6b250YWwgem9uZXMiLCJpbnB1dF9vcHRpb25zIjpbeyJsYWJlbCI6IngodCkgPSBlXnstMnR9dSh0KSIsIlhfcyI6IjEvKHMrMikifSx7ImxhYmVsIjoieCh0KSA9IDNlXnstNXR9dSh0KSIsIlhfcyI6IjMvKHMrNSkifV0sInN5c3RlbV9vcHRpb25zIjpbeyJsYWJlbCI6IklkZWFsIERlbGF5IiwiSF9zIjoiZV57LXNUfSIsIm91dHB1dF9za2V0Y2giOiJkZWxheWVkIGRlY2F5aW5nIGN1cnZlIn0seyJsYWJlbCI6IklkZWFsIERpZmZlcmVudGlhdG9yIiwiSF9zIjoicyIsIm91dHB1dF9za2V0Y2giOiJzdGVlcGVyIGRlcml2YXRpdmUtc3R5bGUgcmVzcG9uc2UifSx7ImxhYmVsIjoiSWRlYWwgSW50ZWdyYXRvciIsIkhfcyI6IjEvcyIsIm91dHB1dF9za2V0Y2giOiJhY2N1bXVsYXRlZCBhcmVhIC8gaW50ZWdyYWwtc3R5bGUgcmVzcG9uc2UifV0sImJlaGF2aW9yIjoiV2hlbiBzdHVkZW50IHNlbGVjdHMgaW5wdXQgYW5kIHN5c3RlbSwgdXBkYXRlIG1pZGRsZSBib3ggdG8gc2hvdyBZKHMpPVgocylIKHMpIHN5bWJvbGljYWxseSBhbmQgdXBkYXRlIHJpZ2h0IGJveCB3aXRoIGEgcXVhbGl0YXRpdmUgb3V0cHV0IHNrZXRjaC4ifX0="></div>%%KC_END%%

## 4. Input as a continuum of exponentials

This is the inverse Laplace transform formula **(4.28)**. It reveals the physical meaning of the Laplace transform: the input \(x(t)\) is a **weighted blend of everlasting exponentials** \(e^{st}\), where \(X(s)\) supplies the weight for each complex frequency \(s\).

The Laplace transform is not just a table trick — it decomposes the signal into exponential building blocks.

**When to use:** For interpretation, not usually for direct exam computation.

**Minimal example:** If \(X(s)\) has strong weight near a particular value of \(s\), that exponential component strongly contributes to \(x(t)\).

### EXAM TRIGGER
Questions asking what the Laplace transform *means* physically or intuitively.

### COMMON MISUSE
Thinking \(s\) is only a real decay rate. Here \(s = \sigma + j\omega\) is a **complex frequency**, encoding both growth/decay and oscillation.

$$x(t)=\frac{1}{2\pi j}\int_{c-j\infty}^{c+j\infty}X(s)e^{st}\,ds$$

## 5. Output as filtered exponential superposition

This is the core zero-state response formula **(4.29)**. Each exponential component \(e^{st}\) in the input gets multiplied by \(H(s)\), so the system **reshapes the input** by weighting each complex-frequency component.

- **\(X(s)\)** — Laplace transform of the input
- **\(H(s)\)** — transfer function of the system
- **\(y(t)\)** — final time-domain zero-state response

**Short recipe:**
1. Find \(X(s)\) from the input \(x(t)\)
2. Find \(H(s) = P(s)/Q(s)\) from the differential equation
3. Multiply: \(Y(s) = X(s)H(s)\)
4. Partial-fraction expand if needed
5. Inverse-transform: \(y(t) = \mathcal{L}^{-1}\{Y(s)\}\)

### EXAM TRIGGER
*"Find the zero-state response"* with a known input and transfer function.

### COMMON MISUSE
Stopping at \(Y(s)\) and forgetting the final inverse Laplace transform. The answer must be in the time domain.

$$y(t)=\frac{1}{2\pi j}\int_{c' -j\infty}^{c' +j\infty}X(s)H(s)e^{st}\,ds=\mathcal{L}^{-1}\{X(s)H(s)\}$$

## 6. Worked example pattern

This example follows the exam workflow for **Example 4.14**.

**System:** \((D^2+5D+6)y(t) = (D+1)x(t)\)

**Input:** \(x(t) = 3e^{-5t}u(t)\)

---

**Four-step solution:**

1. **Read the operators:** \(P(D) = D+1\) and \(Q(D) = D^2+5D+6\)
2. **Write the transfer function:**
$$H(s) = \frac{s+1}{s^2+5s+6} = \frac{s+1}{(s+2)(s+3)}$$
3. **Find the input transform:**
$$X(s) = \frac{3}{s+5}$$
4. **Multiply and inverse-transform:**
$$Y(s) = X(s)H(s) = \frac{3(s+1)}{(s+5)(s+2)(s+3)}$$

After partial-fraction expansion and inverse Laplace transform:

$$y(t) = \left(-2e^{-5t} - e^{-2t} + 3e^{-3t}\right)u(t)$$

### EXAM WARNING
Do **not** solve the homogeneous differential equation separately when the problem asks only for the zero-state response and all initial conditions are zero. The transfer-function method already gives the complete answer.

## 7. Ideal delay

This is the canonical transfer function of an ideal delay of \(T\) seconds, labeled **(4.30)**.

If \(y(t) = x(t-T)\), then taking the Laplace transform gives \(Y(s) = e^{-sT}X(s)\), so:

$$H(s) = e^{-sT}$$

- **\(T\)** — delay time in seconds (must be positive for a causal delay)

**When to use:** When the output is exactly the input shifted later by \(T\) seconds.

**Minimal example:** A 2-second delay has \(H(s) = e^{-2s}\).

### EXAM TRIGGER
*"Ideal delay"*, *"delay of T seconds"*, or \(y(t) = x(t-T)\).

### COMMON MISUSE
Using \(e^{+sT}\) for a delay. A positive exponent corresponds to a time advance, not a delay.

$$H(s)=\frac{Y(s)}{X(s)}=e^{-sT}$$

## 8. Ideal differentiator

This is the canonical transfer function of an ideal differentiator, labeled **(4.31)**.

If \(y(t) = dx(t)/dt\) and the causal input satisfies \(x(0^-) = 0\), then:

$$Y(s) = sX(s) \implies H(s) = s$$

Under zero initial conditions, differentiation in time becomes multiplication by \(s\) in the Laplace domain.

**When to use:** When the output is the derivative of the input.

**Minimal example:** If \(X(s) = \dfrac{1}{s+2}\), then \(Y(s) = \dfrac{s}{s+2}\).

### EXAM TRIGGER
*"Ideal differentiator"* or \(y(t) = dx(t)/dt\).

### COMMON MISUSE
Forgetting the zero-initial-condition requirement. If \(x(0^-) \neq 0\), the Laplace transform of the derivative includes an extra \(x(0^-)\) term, and \(H(s) = s\) no longer holds cleanly.

$$H(s)=\frac{Y(s)}{X(s)}=s$$

## 9. Ideal integrator

This is the canonical transfer function of an ideal integrator with zero initial state, labeled **(4.32)**.

If \(y(t) = \int_0^t x(\tau)\,d\tau\), then:

$$Y(s) = \frac{X(s)}{s} \implies H(s) = \frac{1}{s}$$

Division by \(s\) in the Laplace domain represents accumulation over time.

**When to use:** When the output is the running integral of the input from 0 to \(t\).

**Minimal example:** If \(X(s) = \dfrac{1}{s+2}\), then \(Y(s) = \dfrac{1}{s(s+2)}\).

### EXAM TRIGGER
*"Ideal integrator"*, *"accumulator"*, or an integral from 0 to \(t\).

### COMMON MISUSE
Confusing the integrator with the differentiator and writing \(H(s) = s\). Remember: integration divides by \(s\); differentiation multiplies by \(s\).

$$H(s)=\frac{1}{s}$$

---
**📌 Key Takeaways**
- **LTIC model (4.26):** \((D^N+a_1D^{N-1}+\cdots+a_N)y(t)=(b_0D^N+\cdots+b_N)x(t)\) — zero-state means all initial output values are zero.
- **Transfer function (4.27):** \(H(s)=\dfrac{P(s)}{Q(s)}=\dfrac{b_0s^N+\cdots+b_N}{s^N+\cdots+a_N}\) — input-side polynomial over output-side polynomial; never reverse the ratio.
- **Input superposition (4.28):** \(x(t)=\dfrac{1}{2\pi j}\int_{c-j\infty}^{c+j\infty}X(s)e^{st}\,ds\) — the input is a weighted blend of complex exponentials.
- **Zero-state response (4.29):** \(y(t)=\mathcal{L}^{-1}\{X(s)H(s)\}\) — find \(X(s)\), multiply by \(H(s)\), partial-fraction, then inverse-transform.
- **Ideal delay (4.30):** \(H(s)=e^{-sT}\) — a delay of \(T\) seconds; use negative exponent.
- **Ideal differentiator (4.31):** \(H(s)=s\) — differentiation under zero initial conditions.
- **Ideal integrator (4.32):** \(H(s)=\dfrac{1}{s}\) — running integral from 0 to \(t\); do not confuse with \(H(s)=s\).
- **Three-step exam recipe:** (1) read \(H(s)=P(s)/Q(s)\), (2) find \(X(s)\), (3) compute \(y(t)=\mathcal{L}^{-1}\{X(s)H(s)\}\).

*Next, use these transfer-function ideas to solve more system-response problems quickly.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6OCwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo3LCJtYXgiOjl9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6Inplcm9fc3RhdGVfY29uZGl0aW9ucyIsImxhYmVsIjoiWmVyby1zdGF0ZSByZXNwb25zZSBhbmQgemVybyBpbml0aWFsIGNvbmRpdGlvbnMiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJ6c19xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiQSBwcm9ibGVtIGFza3MgZm9yIHRoZSB6ZXJvLXN0YXRlIHJlc3BvbnNlIG9mIGFuIExUSUMgc3lzdGVtLiBXaGljaCBjb25kaXRpb24gaXMgYmVpbmcgYXNzdW1lZD8iLCJvcHRpb25zIjpbIkEuIFRoZSBpbnB1dCBcXCh4KHQpXFwpIGlzIHplcm8gZm9yIGFsbCBcXCh0XFwpIiwiQi4gVGhlIHN5c3RlbSBzdGFydHMgcmVsYXhlZCwgc28gYWxsIHJlcXVpcmVkIGluaXRpYWwgb3V0cHV0IHZhbHVlcyBhcmUgemVybyIsIkMuIFRoZSB0cmFuc2ZlciBmdW5jdGlvbiBcXChIKHMpXFwpIG11c3QgYmUgemVybyIsIkQuIFRoZSBvdXRwdXQgXFwoeSh0KVxcKSBtdXN0IGJlIHplcm8gZm9yIGFsbCBcXCh0XFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiWmVyby1zdGF0ZSByZXNwb25zZSBtZWFucyB0aGUgcmVzcG9uc2UgZHVlIHRvIHRoZSBpbnB1dCBhbG9uZSB3aGVuIHRoZSBzeXN0ZW0gYmVnaW5zIHdpdGggemVybyBzdG9yZWQgZW5lcmd5IG9yIHplcm8gaW5pdGlhbCBjb25kaXRpb25zLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoZSBpbnB1dCBpcyBub3QgemVybzsgdGhlIHJlc3BvbnNlIGlzIGNhdXNlZCBieSB0aGUgaW5wdXQuIiwiQyI6IlxcKEgocylcXCkgZGVzY3JpYmVzIHRoZSBzeXN0ZW0gYW5kIGlzIHVzdWFsbHkgbm90IHplcm8uIiwiRCI6IlRoZSBvdXRwdXQgaXMgbm90IG5lY2Vzc2FyaWx5IHplcm87IGl0IGlzIHRoZSByZXNwb25zZSB0byB0aGUgaW5wdXQuIn0sImhpbnQiOiJaZXJvLXN0YXRlIG1lYW5zIHplcm8gaW5pdGlhbCBzdGF0ZSwgbm90IHplcm8gaW5wdXQuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoienNfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoeSBjYW4gXFwoRF5yIHkodClcXCkgYmUgdHJhbnNmb3JtZWQgYXMgXFwoc15yIFkocylcXCkgaW4gdGhpcyBzZWN0aW9uJ3MgZGVyaXZhdGlvbj8iLCJvcHRpb25zIjpbIkEuIEJlY2F1c2UgdGhlIHN5c3RlbSBpcyBub25saW5lYXIiLCJCLiBCZWNhdXNlIHRoZSByZXNwb25zZSBpcyBwZXJpb2RpYyIsIkMuIEJlY2F1c2UgYWxsIHJlbGV2YW50IGluaXRpYWwgY29uZGl0aW9ucyBhcmUgemVybyIsIkQuIEJlY2F1c2UgZXZlcnkgaW5wdXQgaGFzIGZpbml0ZSBkdXJhdGlvbiJdLCJjb3JyZWN0X29wdGlvbiI6IkMiLCJleHBsYW5hdGlvbiI6IlRoZSBMYXBsYWNlIHRyYW5zZm9ybSBvZiBkZXJpdmF0aXZlcyBub3JtYWxseSBpbmNsdWRlcyBpbml0aWFsLXZhbHVlIHRlcm1zLiBaZXJvIGluaXRpYWwgY29uZGl0aW9ucyByZW1vdmUgdGhvc2UgdGVybXMsIGxlYXZpbmcgb25seSBcXChzXnIgWShzKVxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGUgc3lzdGVtIGlzIExUSUMsIG5vdCBub25saW5lYXIuIiwiQiI6IlBlcmlvZGljaXR5IGlzIGlycmVsZXZhbnQgaGVyZS4iLCJEIjoiRmluaXRlIGR1cmF0aW9uIGlzIG5vdCByZXF1aXJlZCBmb3IgdGhpcyBkZXJpdmF0aXZlIHByb3BlcnR5LiJ9LCJoaW50IjoiQXNrIHdoYXQgaGFwcGVucyB0byB0aGUgaW5pdGlhbC12YWx1ZSB0ZXJtcyBpbiB0aGUgZGVyaXZhdGl2ZSB0cmFuc2Zvcm0uIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJ0cmFuc2Zlcl9mdW5jdGlvbl9yYXRpbyIsImxhYmVsIjoiVHJhbnNmZXIgZnVuY3Rpb24gSChzKT1QKHMpL1EocykiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJ0Zl9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiRm9yIFxcKChEXjIrNEQrMyl5KHQpPShEKzUpeCh0KVxcKSwgd2hhdCBpcyBcXChIKHMpXFwpPyIsIm9wdGlvbnMiOlsiQS4gXFwoSChzKT0oc14yKzRzKzMpLyhzKzUpXFwpIiwiQi4gXFwoSChzKT0ocys1KS8oc14yKzRzKzMpXFwpIiwiQy4gXFwoSChzKT1zXjIrNHMrMytzKzVcXCkiLCJELiBcXChIKHMpPTEvKHNeMis0cyszKVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IlRoZSB0cmFuc2ZlciBmdW5jdGlvbiBpcyB0aGUgaW5wdXQtc2lkZSBwb2x5bm9taWFsIGRpdmlkZWQgYnkgdGhlIG91dHB1dC1zaWRlIHBvbHlub21pYWw6IFxcKEgocyk9UChzKS9RKHMpPShzKzUpLyhzXjIrNHMrMylcXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhpcyByZXZlcnNlcyB0aGUgcmF0aW8sIHBsYWNpbmcgdGhlIG91dHB1dC1zaWRlIHBvbHlub21pYWwgaW4gdGhlIG51bWVyYXRvci4iLCJDIjoiVGhlIHBvbHlub21pYWxzIGZvcm0gYSByYXRpbywgbm90IGEgc3VtLiIsIkQiOiJUaGlzIGlnbm9yZXMgdGhlIGlucHV0LXNpZGUgb3BlcmF0b3IgXFwoRCs1XFwpLiJ9LCJoaW50IjoiXFwoUChEKVxcKSBtdWx0aXBsaWVzIFxcKHgodClcXCk7IFxcKFEoRClcXCkgbXVsdGlwbGllcyBcXCh5KHQpXFwpLiBTbyBcXChIKHMpPVAocykvUShzKVxcKS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJ0Zl9xMiIsInR5cGUiOiJzaG9ydF9hbnN3ZXIiLCJzdGVtIjoiQSBjbGFzc21hdGUgd3JpdGVzIFxcKEgocyk9UShzKS9QKHMpXFwpIGZvciBcXChRKEQpeSh0KT1QKEQpeCh0KVxcKS4gRXhwbGFpbiBwcmVjaXNlbHkgd2h5IHRoaXMgaXMgd3JvbmcuIiwiaWRlYWxfYW5zd2VyIjoiVGFraW5nIHRoZSBMYXBsYWNlIHRyYW5zZm9ybSB1bmRlciB6ZXJvIGluaXRpYWwgY29uZGl0aW9ucyBnaXZlcyBcXChRKHMpWShzKT1QKHMpWChzKVxcKS4gVGhlcmVmb3JlIFxcKFkocykvWChzKT1QKHMpL1EocylcXCksIHNvIFxcKEgocyk9UChzKS9RKHMpXFwpLCBub3QgXFwoUShzKS9QKHMpXFwpLiIsImdyYWRpbmdfcnVicmljIjpbIk11c3Qgc3RhcnQgZnJvbSBcXChRKHMpWShzKT1QKHMpWChzKVxcKSIsIk11c3QgaWRlbnRpZnkgXFwoSChzKT1ZKHMpL1gocylcXCkiLCJNdXN0IGNvbmNsdWRlIFxcKEgocyk9UChzKS9RKHMpXFwpIiwiTXVzdCBleHBsaWNpdGx5IHJlamVjdCB0aGUgcmV2ZXJzZWQgcmF0aW8iXSwiZXhwbGFuYXRpb24iOiJUaGlzIHRlc3RzIHdoZXRoZXIgdGhlIHN0dWRlbnQgdW5kZXJzdGFuZHMgdGhlIGFsZ2VicmEgYmVoaW5kIHRoZSB0cmFuc2Zlci1mdW5jdGlvbiByYXRpbyByYXRoZXIgdGhhbiBtZW1vcml6aW5nIGl0LiIsImhpbnQiOiJTb2x2ZSBcXChRKHMpWShzKT1QKHMpWChzKVxcKSBmb3IgXFwoWShzKS9YKHMpXFwpLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoiemVyb19zdGF0ZV9yZXNwb25zZV9wcm9kdWN0IiwibGFiZWwiOiJaZXJvLXN0YXRlIHJlc3BvbnNlIGZyb20gWShzKT1YKHMpSChzKSIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6InByb2RfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkdpdmVuIFxcKFgocyk9My8ocys1KVxcKSBhbmQgXFwoSChzKT0ocysxKS8oc14yKzVzKzYpXFwpLCB3aGljaCBleHByZXNzaW9uIGlzIFxcKFkocylcXCk/Iiwib3B0aW9ucyI6WyJBLiBcXChZKHMpPTMocysxKS8oKHMrNSkoc14yKzVzKzYpKVxcKSIsIkIuIFxcKFkocyk9MyhzXjIrNXMrNikvKChzKzUpKHMrMSkpXFwpIiwiQy4gXFwoWShzKT0zLyhzKzUpKyhzKzEpLyhzXjIrNXMrNilcXCkiLCJELiBcXChZKHMpPUgocykvWChzKVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IkZvciB6ZXJvLXN0YXRlIHJlc3BvbnNlLCB0aGUgTGFwbGFjZS1kb21haW4gb3V0cHV0IGlzIHRoZSBwcm9kdWN0IFxcKFkocyk9WChzKUgocyk9XFxmcmFjezN9e3MrNX1cXGNkb3RcXGZyYWN7cysxfXtzXjIrNXMrNn09XFxmcmFjezMocysxKX17KHMrNSkoc14yKzVzKzYpfVxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJUaGlzIGVmZmVjdGl2ZWx5IGRpdmlkZXMgYnkgXFwoSChzKVxcKSBpbnN0ZWFkIG9mIG11bHRpcGx5aW5nIGJ5IGl0LiIsIkMiOiJUaGUgaW5wdXQgdHJhbnNmb3JtIGFuZCB0cmFuc2ZlciBmdW5jdGlvbiBhcmUgbXVsdGlwbGllZCwgbm90IGFkZGVkLiIsIkQiOiJcXChZKHMpPVgocylIKHMpXFwpLCBub3QgXFwoSChzKS9YKHMpXFwpLiJ9LCJoaW50IjoiVGhlIHN5c3RlbSBhY3Rpb24gaW4gdGhlIHMtZG9tYWluIGlzIG11bHRpcGxpY2F0aW9uLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6InByb2RfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkFmdGVyIGZpbmRpbmcgXFwoWShzKVxcKSwgd2hhdCBpcyB0aGUgZmluYWwgcmVxdWlyZWQgc3RlcCB0byBvYnRhaW4gdGhlIHplcm8tc3RhdGUgcmVzcG9uc2UgXFwoeSh0KVxcKT8iLCJvcHRpb25zIjpbIkEuIERpZmZlcmVudGlhdGUgXFwoWShzKVxcKSB3aXRoIHJlc3BlY3QgdG8gXFwoc1xcKSIsIkIuIFRha2UgdGhlIGludmVyc2UgTGFwbGFjZSB0cmFuc2Zvcm0gb2YgXFwoWShzKVxcKSIsIkMuIFNldCBcXChzPTBcXCkiLCJELiBEaXZpZGUgXFwoWShzKVxcKSBieSBcXChIKHMpXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiVGhlIGZpbmFsIGFuc3dlciBtdXN0IGJlIGluIHRoZSB0aW1lIGRvbWFpbiwgc28gXFwoeSh0KT1cXG1hdGhjYWx7TH1eey0xfVxce1kocylcXH1cXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiRGlmZmVyZW50aWF0aW5nIHdpdGggcmVzcGVjdCB0byBcXChzXFwpIGlzIG5vdCB0aGUgcmVzcG9uc2Ugc3RlcCBoZXJlLiIsIkMiOiJTZXR0aW5nIFxcKHM9MFxcKSBnaXZlcyBhIHZhbHVlIHJlbGF0ZWQgdG8gREMgYmVoYXZpb3IsIG5vdCB0aGUgZnVsbCB0aW1lIHJlc3BvbnNlLiIsIkQiOiJEaXZpZGluZyBieSBcXChIKHMpXFwpIHdvdWxkIHJlY292ZXIgXFwoWChzKVxcKSwgbm90IFxcKHkodClcXCkuIn0sImhpbnQiOiJSZWFsLWxpZmUgc2lnbmFscyBiZWdpbiBhbmQgZW5kIGluIHRoZSB0aW1lIGRvbWFpbi4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19LHsiaWQiOiJsYXBsYWNlX2ludGVycHJldGF0aW9uX2RlbW8iLCJsYWJlbCI6IkxhcGxhY2UtZG9tYWluIGZsb3cgaW50ZXJwcmV0YXRpb24iLCJpbXBvcnRhbmNlIjoibWVkaXVtIiwiZXhhbV93ZWlnaHQiOiJtZWRpdW0iLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoiZGVtb19xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiT2JzZXJ2ZSB0aGUgZGVtbyBmbG93OiBcXCh4KHQpIFxcdG8gWChzKVxcKSwgdGhlbiBtdWx0aXBsaWNhdGlvbiBieSBcXChIKHMpXFwpLCB0aGVuIGludmVyc2UgdHJhbnNmb3JtLiBXaGljaCBzdGF0ZW1lbnQgYmVzdCBkZXNjcmliZXMgdGhlIHJvbGUgb2YgXFwoSChzKVxcKT8iLCJvcHRpb25zIjpbIkEuIFxcKEgocylcXCkgc3VwcGxpZXMgdGhlIGluaXRpYWwgY29uZGl0aW9ucyIsIkIuIFxcKEgocylcXCkgd2VpZ2h0cyBlYWNoIGV4cG9uZW50aWFsIGNvbXBvbmVudCBvZiB0aGUgaW5wdXQgaW4gdGhlIHMtZG9tYWluIiwiQy4gXFwoSChzKVxcKSBjb252ZXJ0cyBcXCh5KHQpXFwpIGRpcmVjdGx5IGludG8gXFwoeCh0KVxcKSIsIkQuIFxcKEgocylcXCkgaXMgb25seSB1c2VkIGFmdGVyIHJldHVybmluZyB0byB0aGUgdGltZSBkb21haW4iXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJUaGUgaW5wdXQgaXMgcmVwcmVzZW50ZWQgYnkgZXhwb25lbnRpYWwgY29tcG9uZW50cywgYW5kIHRoZSBzeXN0ZW0gbXVsdGlwbGllcyBlYWNoIGNvbXBvbmVudCBieSBcXChIKHMpXFwpLCByZXNoYXBpbmcgdGhlIHNpZ25hbCBpbiB0aGUgZnJlcXVlbmN5IGRvbWFpbi4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJJbml0aWFsIGNvbmRpdGlvbnMgYXJlIHplcm8gaW4gemVyby1zdGF0ZSByZXNwb25zZTsgXFwoSChzKVxcKSBpcyBub3QgYW4gaW5pdGlhbC1jb25kaXRpb24gdGVybS4iLCJDIjoiXFwoSChzKVxcKSBtYXBzIHRoZSBpbnB1dCB0cmFuc2Zvcm0gdG8gdGhlIG91dHB1dCB0cmFuc2Zvcm0sIG5vdCBvdXRwdXQgYmFjayB0byBpbnB1dC4iLCJEIjoiXFwoSChzKVxcKSBhY3RzIGluIHRoZSBMYXBsYWNlIGRvbWFpbiBiZWZvcmUgaW52ZXJzZSB0cmFuc2Zvcm1hdGlvbi4ifSwiaGludCI6Ikxvb2sgYXQgdGhlIG1pZGRsZSBib3ggaW4gdGhlIGRlbW86IFxcKFkocyk9WChzKUgocylcXCkuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6ImRlbW9fb2JzZXJ2YXRpb25fY2hlY2siLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19LHsiaWQiOiJjYW5vbmljYWxfc3lzdGVtcyIsImxhYmVsIjoiQ2Fub25pY2FsIHRyYW5zZmVyIGZ1bmN0aW9ucyIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJtZWRpdW0iLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoiY2Fub25fcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoaWNoIHRyYW5zZmVyIGZ1bmN0aW9uIGJlbG9uZ3MgdG8gYW4gaWRlYWwgZGVsYXkgb2YgXFwoVFxcKSBzZWNvbmRzPyIsIm9wdGlvbnMiOlsiQS4gXFwoSChzKT1zXFwpIiwiQi4gXFwoSChzKT0xL3NcXCkiLCJDLiBcXChIKHMpPWVeey1zVH1cXCkiLCJELiBcXChIKHMpPWVee3NUfS9zXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQyIsImV4cGxhbmF0aW9uIjoiQSBkZWxheSBcXCh5KHQpPXgodC1UKVxcKSBjb3JyZXNwb25kcyB0byBtdWx0aXBsaWNhdGlvbiBieSBcXChlXnstc1R9XFwpIGluIHRoZSBMYXBsYWNlIGRvbWFpbi4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJcXChIKHMpPXNcXCkgaXMgdGhlIGlkZWFsIGRpZmZlcmVudGlhdG9yLiIsIkIiOiJcXChIKHMpPTEvc1xcKSBpcyB0aGUgaWRlYWwgaW50ZWdyYXRvci4iLCJEIjoiVGhpcyBtaXhlcyBhIHRpbWUtYWR2YW5jZS1saWtlIGV4cG9uZW50aWFsIHdpdGggaW50ZWdyYXRpb24uIn0sImhpbnQiOiJBIGRlbGF5IHVzZXMgYSBuZWdhdGl2ZSBleHBvbmVudGlhbCBmYWN0b3IgaW4gXFwoc1xcKS4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoidmlzdWFsX3BhdHRlcm5fcmVjb2duaXRpb25fY2hlY2siLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJjYW5vbl9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiQSBzeXN0ZW0gb3V0cHV0IGlzIFxcKHkodCk9ZHgodCkvZHRcXCkgYW5kIFxcKHgoMF4tKT0wXFwpLiBXaGF0IGlzIFxcKEgocylcXCk/Iiwib3B0aW9ucyI6WyJBLiBcXChIKHMpPTEvc1xcKSIsIkIuIFxcKEgocyk9c1xcKSIsIkMuIFxcKEgocyk9ZV57LXNUfVxcKSIsIkQuIFxcKEgocyk9WChzKS9ZKHMpXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiRGlmZmVyZW50aWF0aW9uIGluIHRpbWUgYmVjb21lcyBtdWx0aXBsaWNhdGlvbiBieSBcXChzXFwpIGluIHRoZSBMYXBsYWNlIGRvbWFpbiB3aGVuIHRoZSBpbml0aWFsIHZhbHVlIGlzIHplcm8uIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiXFwoMS9zXFwpIGNvcnJlc3BvbmRzIHRvIGludGVncmF0aW9uLCBub3QgZGlmZmVyZW50aWF0aW9uLiIsIkMiOiJcXChlXnstc1R9XFwpIGNvcnJlc3BvbmRzIHRvIGRlbGF5LiIsIkQiOiJUaGUgdHJhbnNmZXIgZnVuY3Rpb24gaXMgXFwoWShzKS9YKHMpXFwpLCBub3QgXFwoWChzKS9ZKHMpXFwpLiJ9LCJoaW50IjoiRGlmZmVyZW50aWF0ZSBtZWFucyBtdWx0aXBseSBieSBcXChzXFwpIHVuZGVyIHplcm8gaW5pdGlhbCBjb25kaXRpb25zLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImNhbm9uX3EzIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGljaCBzeXN0ZW0gaGFzIFxcKEgocyk9MS9zXFwpPyIsIm9wdGlvbnMiOlsiQS4gSWRlYWwgZGVsYXkiLCJCLiBJZGVhbCBkaWZmZXJlbnRpYXRvciIsIkMuIElkZWFsIGludGVncmF0b3Igd2l0aCB6ZXJvIGluaXRpYWwgc3RhdGUiLCJELiBQdXJlIGdhaW4gb2YgXFwoc1xcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkMiLCJleHBsYW5hdGlvbiI6IkludGVncmF0aW9uIGZyb20gMCB0byBcXCh0XFwpIGRpdmlkZXMgdGhlIGlucHV0IHRyYW5zZm9ybSBieSBcXChzXFwpLCBzbyBcXChIKHMpPTEvc1xcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJEZWxheSBnaXZlcyBcXChlXnstc1R9XFwpLiIsIkIiOiJEaWZmZXJlbnRpYXRpb24gZ2l2ZXMgXFwoc1xcKS4iLCJEIjoiQSBwdXJlIGdhaW4gb2YgXFwoc1xcKSBpcyB0aGUgZGlmZmVyZW50aWF0b3IgZm9ybSwgbm90IHRoZSBpbnRlZ3JhdG9yLiJ9LCJoaW50IjoiSW50ZWdyYXRpb24gYWNjdW11bGF0ZXMsIGFuZCBhY2N1bXVsYXRpb24gY29ycmVzcG9uZHMgdG8gZGl2aXNpb24gYnkgXFwoc1xcKS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX1dfQ==" style="display:none;"></div>%%KC_END%%
