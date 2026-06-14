%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6ImJvdGgiLCJyYXRpb25hbGUiOiJUaGlzIHNlY3Rpb24gaXMgZm9ybXVsYS1kcml2ZW4gYnV0IHRoZSBpbXBvcnRhbnQgZXhhbSBpbnR1aXRpb24gY29tZXMgZnJvbSByZWNvZ25pemluZyByZXNwb25zZSBwbG90czogcGVyaW9kaWMgaW1wdWxzZSByZXNwb25zZSwgcmVzb25hbnQgZ3Jvd3RoLCBhbmQgcmVzcG9uc2UgZGVjb21wb3NpdGlvbi4gVXNlIHRoZSB2ZXJpZmllZCB0ZXh0Ym9vayBmb3JtdWxhIGZvciBmaWx0ZXJpbmcgYW5kIHRoZSB0ZXh0Ym9vayByZXNwb25zZSBwbG90IG9uIHBhZ2UtMzA5IGJlY2F1c2UgaXQgaXMgdGhlIGV4YWN0IGNhbm9uaWNhbCBleGFtcGxlIHN0dWRlbnRzIGFyZSBleHBlY3RlZCB0byByZWNvZ25pemUuIERvIG5vdCBnZW5lcmF0ZSByZXBsYWNlbWVudCBpbWFnZXMgYmVjYXVzZSB0aGUgdGV4dGJvb2sgcGxvdCBpcyBhdmFpbGFibGUgYW5kIG1vcmUgZmFpdGhmdWwgdG8gdGhlIHNlY3Rpb24uIiwiY3JhbSI6IlVzZSB2aXN1YWxzIHRvIHJlY29nbml6ZSB0aGUgZXhhbSBwYXR0ZXJuOiBwZXJpb2RpYyBpbXB1bHNlIHJlc3BvbnNlIG1lYW5zIG5vdCBhYnNvbHV0ZWx5IHN1bW1hYmxlOyBsaW5lYXJseSBncm93aW5nIHNpbnVzb2lkIG1lYW5zIHJlc29uYW5jZS4iLCJzdGFuZGFyZCI6IlVzZSB2aXN1YWxzIG5leHQgdG8gdGhlIGZvcm11bGFzIHNvIHN0dWRlbnRzIGNvbm5lY3QgTUFUTEFCIGZpbHRlciBvdXRwdXQgd2l0aCB6ZXJvLXN0YXRlIHJlc3BvbnNlIGFuZCByZXNvbmFudCBiZWhhdmlvci4iLCJ0b3Bfc2NvcmUiOiJVc2UgdmlzdWFscyB0byBkaXN0aW5ndWlzaCB6ZXJvLXN0YXRlLCB6ZXJvLWlucHV0LCBhbmQgdG90YWwgcmVzcG9uc2UsIGFuZCB0byBhdm9pZCBjb25mdXNpbmcgcGVyaW9kaWMgYm91bmRlZC1sb29raW5nIGhbbl0gd2l0aCBCSUJPIHN0YWJpbGl0eS4ifQ==" style="display:none;"></div>%%KC_END%%
# System Responses Through Filtering

> **Section Objective:** Learn how MATLAB filtering computes discrete-time system responses from a delay-form difference equation.

---

## Concepts In This Section

- Delay-form difference equation
- Filter coefficient vectors
- Zero-state response
- Periodic impulse response and BIBO stability
- Resonant response
- Zero-input response
- Total response

## 1. The equation MATLAB filter is solving

This is textbook Eq. (3.44) — the delay-form LCCDE that MATLAB's `filter` command solves directly.

**Left side:** collects delayed output samples \(y[n], y[n-1], \ldots, y[n-N]\), each weighted by a feedback coefficient \(a_k\).

**Right side:** collects delayed input samples \(x[n], x[n-1], \ldots, x[n-N]\), each weighted by a feedforward coefficient \(b_k\).

**Symbol guide:**
- \(a_k\) — feedback (output-side) coefficients
- \(b_k\) — feedforward (input-side) coefficients
- \(y[n-k]\) — output delayed by \(k\) samples
- \(x[n-k]\) — input delayed by \(k\) samples
- \(N\) — equation order

**When to use:** whenever a discrete-time LCCDE is written in delay form and the response is computed by filtering.

### EXAM TRIGGER

Coefficients are handed to MATLAB as vectors \([b_0, b_1, \ldots, b_N]\) and \([a_0, a_1, \ldots, a_N]\). MATLAB stores \(a_0\) as `a(1)`, not `a(0)` — subscripts and array indices are offset by one.

### COMMON MISTAKE

Reversing the `b` and `a` vectors swaps feedforward and feedback, producing a completely different system.

#### Minimal Example

For \(y[n] - y[n-1] + y[n-2] = x[n]\): use `b = [1 0 0]` and `a = [1 -1 1]`.

$$\sum_{k=0}^{N}a_k y[n-k] = \sum_{k=0}^{N}b_k x[n-k]$$

## 2. What filter returns when no initial conditions are given

The simplest MATLAB call `filter(b, a, x)` computes the **zero-state response** because no stored past outputs or internal states are supplied. MATLAB assumes all initial state is zero.

**Textbook example:** input \(x[n] = \delta[n]\), equation \(y[n] - y[n-1] + y[n-2] = x[n]\), output \(h[n]\).

With `b = [1 0 0]`, `a = [1 -1 1]`, and `delta(n)` as the input vector, calling `h = filter(b, a, delta(n))` returns the impulse response directly.

**Key point:** impulse input plus zero initial state gives the impulse response \(h[n]\). This is not a coincidence — it is the definition of the impulse response.

### COMMON TRAP

Zero-state does **not** mean zero output. It means the system starts with zero stored energy. The output can be large and nonzero; the word "zero" refers only to the initial conditions, not the response values.

## 3. BIBO stability check from the impulse response

This is the **absolute-summability test** for discrete-time BIBO stability.

**Symbol guide:**
- \(h[n]\) — the system's impulse response
- The summation — total absolute area accumulated over all time

**When to use:** after finding or inspecting \(h[n]\), check whether the sum of absolute values converges.

### EXAM TRIGGER

If \(h[n]\) is nonzero and periodic forever, the absolute sum repeats the same nonzero contribution indefinitely and **cannot be finite**. The sum diverges.

### COMMON MISUSE

Thinking a bounded periodic impulse response automatically means the system is BIBO-stable. Boundedness of \(h[n]\) is not the test — **absolute summability** is.

#### Section Conclusion

In this example, \(h[n]\) appears 6-periodic for \(n \ge 0\). Because the same nonzero absolute values repeat forever, \(\sum|h[n]|\) is not finite and the system is **not BIBO-stable**.

$$\sum_{n=-\infty}^{\infty}|h[n]| < \infty$$

## 4. Why this input causes resonance

The sinusoid is rewritten as two complex exponentials so it can be compared directly with the system's characteristic roots.

**Characteristic equation:** \(\gamma^2 - \gamma + 1 = 0\), with roots \(\gamma = e^{\pm j\pi/3}\).

**The match:** the input exponential components have base factors \(e^{\pm j\pi/3}\) — exactly the same as the characteristic roots.

**When to use:** compare input exponentials with characteristic roots to predict resonance **before** plotting or computing.

### EXAM TRIGGER

An input exponential matches a natural mode (characteristic root) of the system → resonance is guaranteed. The zero-state response will grow rather than settle.

### COMMON MISUSE

Noticing the input is sinusoidal but failing to check whether its exponential components match the roots. The frequency alone is not enough — you must verify the base factor matches \(\gamma\).

The root match here guarantees a resonant zero-state response.

$$x[n] = \cos\!\left(\frac{2\pi n}{6}\right)u[n] = \frac{1}{2}\left(e^{j\pi n/3}+e^{-j\pi n/3}\right)u[n]$$


## 5. Zero-input response and total response

The total response decomposes into two independent parts that can be computed separately and added.

**Symbol guide:**
- \(y_{\text{zero-state}}[n]\) — response caused by the input alone, with all initial state set to zero
- \(y_{\text{zero-input}}[n]\) — response caused by initial conditions alone, with zero input

**MATLAB detail:** `filter` can compute responses with initial conditions, but it requires an **internal state vector**, not traditional values like \(y[-1]\) and \(y[-2]\). The function `filtic` converts traditional initial conditions into the state vector format that `filter` expects.

**When to use:** when a system has both nonzero initial conditions and a nonzero input. Compute each part separately and add, or supply the converted state vector directly to `filter`.

### COMMON MISUSE

Adding initial conditions to the input vector instead of supplying them through `filtic` and the `filter` state argument. This corrupts the input signal rather than setting the initial state.

$$y_{\text{total}}[n] = y_{\text{zero-state}}[n] + y_{\text{zero-input}}[n]$$

---
**📌 Key Takeaways**
- Eq. (3.44): \(\sum_{k=0}^{N}a_k y[n-k]=\sum_{k=0}^{N}b_k x[n-k]\) — the delay-form LCCDE solved by MATLAB `filter(b,a,x)`; `b` is feedforward, `a` is feedback.
- BIBO test: \(\sum_{n=-\infty}^{\infty}|h[n]|<\infty\) must hold; a nonzero periodic \(h[n]\) repeats forever, so the sum diverges and the system is not BIBO-stable.
- Resonance: \(x[n]=\cos(2\pi n/6)u[n]=\frac{1}{2}(e^{j\pi n/3}+e^{-j\pi n/3})u[n]\) — exponential components match roots \(e^{\pm j\pi/3}\), causing the output envelope to grow linearly.
- Total response: \(y_{\text{total}}[n]=y_{\text{zero-state}}[n]+y_{\text{zero-input}}[n]\); use `filtic` to convert traditional initial conditions into the state vector for `filter`.

*Next, use these response ideas to interpret system behavior without relying only on MATLAB output.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NywicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo2LCJtYXgiOjh9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6ImRlbGF5X2Zvcm1fZmlsdGVyX2VxdWF0aW9uIiwibGFiZWwiOiJEZWxheS1mb3JtIGVxdWF0aW9uIGFuZCBNQVRMQUIgY29lZmZpY2llbnQgb3JkZXIiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDFfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkZvciB0aGUgc3lzdGVtIFxcKHlbbl0teVtuLTFdK3lbbi0yXT14W25dXFwpLCB3aGljaCBNQVRMQUIgY29lZmZpY2llbnQgdmVjdG9ycyBtYXRjaCBFcS4gKDMuNDQpPyIsIm9wdGlvbnMiOlsiQS4gYiA9IFsxIDAgMF0sIGEgPSBbMSAtMSAxXSIsIkIuIGIgPSBbMSAtMSAxXSwgYSA9IFsxIDAgMF0iLCJDLiBiID0gWzAgMCAxXSwgYSA9IFsxIC0xIDFdIiwiRC4gYiA9IFsxXSwgYSA9IFsxIC0xXSJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IlRoZSByaWdodCBzaWRlIGlzIFxcKHhbbl1cXCksIHNvIFxcKGJfMD0xLCBiXzE9MCwgYl8yPTBcXCkuIFRoZSBsZWZ0IHNpZGUgaXMgXFwoeVtuXS15W24tMV0reVtuLTJdXFwpLCBzbyBcXChhPVsxLC0xLDFdXFwpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IlRoaXMgc3dhcHMgZmVlZGZvcndhcmQgYW5kIGZlZWRiYWNrIGNvZWZmaWNpZW50cy4iLCJDIjoiVGhpcyB3b3VsZCBwbGFjZSB0aGUgaW5wdXQgYXQgXFwoeFtuLTJdXFwpLCBub3QgXFwoeFtuXVxcKS4iLCJEIjoiVGhpcyBvbWl0cyB0aGUgXFwoeVtuLTJdXFwpIHRlcm0gYW5kIGRvZXMgbm90IG1hdGNoIHRoZSBlcXVhdGlvbiBvcmRlci4ifSwiaGludCI6IlJlYWQgY29lZmZpY2llbnRzIGZyb20gXFwoblxcKSwgdGhlbiBcXChuLTFcXCksIHRoZW4gXFwobi0yXFwpLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMV9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiSW4gTUFUTEFCIGRvY3VtZW50YXRpb24sIHdoeSBjYW4gY29lZmZpY2llbnQgc3Vic2NyaXB0cyBiZSBjb25mdXNpbmcgaW4gdGhpcyBzZWN0aW9uPyIsIm9wdGlvbnMiOlsiQS4gTUFUTEFCIGxhYmVscyBcXChhXzBcXCkgYXMgYSgxKSBiZWNhdXNlIGFycmF5IGluZGV4aW5nIGJlZ2lucyBhdCAxLiIsIkIuIE1BVExBQiBsYWJlbHMgXFwoYV8wXFwpIGFzIGEoMCkgYmVjYXVzZSBkZWxheSBlcXVhdGlvbnMgYmVnaW4gYXQgemVyby4iLCJDLiBNQVRMQUIgc3RvcmVzIGZlZWRiYWNrIGNvZWZmaWNpZW50cyBpbiBiIGFuZCBmZWVkZm9yd2FyZCBjb2VmZmljaWVudHMgaW4gYS4iLCJELiBNQVRMQUIgcmVxdWlyZXMgY29lZmZpY2llbnRzIHRvIGJlIHdyaXR0ZW4gZnJvbSBoaWdoZXN0IGRlbGF5IHRvIGxvd2VzdCBkZWxheS4iXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJUaGUgdGV4dGJvb2sgdXNlcyBtYXRoZW1hdGljYWwgc3Vic2NyaXB0cyBzdGFydGluZyBhdCAwLCBidXQgTUFUTEFCIGFycmF5IHBvc2l0aW9ucyBzdGFydCBhdCAxLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IlN0YW5kYXJkIE1BVExBQiBhcnJheXMgZG8gbm90IGJlZ2luIGF0IGluZGV4IDAuIiwiQyI6IkluIGZpbHRlcihiLGEseCksIGIgaXMgZmVlZGZvcndhcmQgYW5kIGEgaXMgZmVlZGJhY2suIiwiRCI6IlRoZSBzZWN0aW9uIHVzZXMgb3JkZXIgXFwoW2NfMCwgY18xLCBcXGxkb3RzLCBjX05dXFwpLCBub3QgcmV2ZXJzZWQgZGVsYXkgb3JkZXIuIn0sImhpbnQiOiJTZXBhcmF0ZSBtYXRoZW1hdGljYWwgc3Vic2NyaXB0cyBmcm9tIE1BVExBQiBhcnJheSBpbmRpY2VzLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoiemVyb19zdGF0ZV9maWx0ZXJfb3V0cHV0IiwibGFiZWwiOiJaZXJvLXN0YXRlIHJlc3BvbnNlIGZyb20gZmlsdGVyIHdpdGhvdXQgaW5pdGlhbCBjb25kaXRpb25zIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6Im1lZGl1bSIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDJfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoYXQgcmVzcG9uc2UgZG9lcyBmaWx0ZXIoYixhLHgpIGNvbXB1dGUgd2hlbiBubyBpbml0aWFsIGNvbmRpdGlvbi9zdGF0ZSBhcmd1bWVudCBpcyBzdXBwbGllZD8iLCJvcHRpb25zIjpbIkEuIFRoZSB6ZXJvLXN0YXRlIHJlc3BvbnNlIiwiQi4gVGhlIHplcm8taW5wdXQgcmVzcG9uc2UiLCJDLiBUaGUgdG90YWwgcmVzcG9uc2Ugd2l0aCBhcmJpdHJhcnkgaW5pdGlhbCBjb25kaXRpb25zIiwiRC4gT25seSB0aGUgc3RlYWR5LXN0YXRlIHJlc3BvbnNlIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiV2l0aG91dCBhbiBpbml0aWFsIHN0YXRlIGFyZ3VtZW50LCBNQVRMQUIgYXNzdW1lcyB6ZXJvIHN0b3JlZCBzdGF0ZSwgc28gdGhlIG91dHB1dCBpcyB0aGUgemVyby1zdGF0ZSByZXNwb25zZSB0byB0aGUgaW5wdXQuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiWmVyby1pbnB1dCByZXNwb25zZSByZXF1aXJlcyBpbml0aWFsIGNvbmRpdGlvbnMgYW5kIHplcm8gaW5wdXQuIiwiQyI6IkFyYml0cmFyeSBpbml0aWFsIGNvbmRpdGlvbnMgYXJlIG5vdCBpbmNsdWRlZCB1bmxlc3MgYSBzdGF0ZSB2ZWN0b3IgaXMgc3VwcGxpZWQuIiwiRCI6IlRoZSBjb21wdXRlZCBzZXF1ZW5jZSBpbmNsdWRlcyB0cmFuc2llbnQgYmVoYXZpb3IgdG9vLCBub3QganVzdCBzdGVhZHkgc3RhdGUuIn0sImhpbnQiOiJBc2sgd2hhdCBNQVRMQUIgYXNzdW1lcyBhYm91dCBzdG9yZWQgc3RhdGUgd2hlbiBub25lIGlzIHByb3ZpZGVkLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9XX0seyJpZCI6ImJpYm9fZnJvbV9wZXJpb2RpY19pbXB1bHNlX3Jlc3BvbnNlIiwibGFiZWwiOiJCSUJPIHN0YWJpbGl0eSBhbmQgcGVyaW9kaWMgaW1wdWxzZSByZXNwb25zZSIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwM19xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiQSBkaXNjcmV0ZS10aW1lIGltcHVsc2UgcmVzcG9uc2UgaXMgbm9uemVybyBhbmQgcGVyaW9kaWMgZm9yZXZlciBmb3IgXFwoblxcZ2UgMFxcKS4gV2hhdCBkb2VzIHRoZSBhYnNvbHV0ZS1zdW1tYWJpbGl0eSB0ZXN0IGltcGx5PyIsIm9wdGlvbnMiOlsiQS4gVGhlIHN5c3RlbSBpcyBub3QgQklCTy1zdGFibGUgYmVjYXVzZSBcXChcXHN1bSB8aFtuXXxcXCkgaXMgbm90IGZpbml0ZS4iLCJCLiBUaGUgc3lzdGVtIGlzIEJJQk8tc3RhYmxlIGJlY2F1c2UgcGVyaW9kaWMgc2lnbmFscyBhcmUgYm91bmRlZC4iLCJDLiBUaGUgc3lzdGVtIGlzIEJJQk8tc3RhYmxlIG9ubHkgaWYgdGhlIHBlcmlvZCBpcyA2LiIsIkQuIFRoZSB0ZXN0IGdpdmVzIG5vIGluZm9ybWF0aW9uIGFib3V0IHN0YWJpbGl0eS4iXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJBIG5vbnplcm8gcGVyaW9kaWMgaW1wdWxzZSByZXNwb25zZSByZXBlYXRzIG5vbnplcm8gYWJzb2x1dGUgdmFsdWVzIGluZGVmaW5pdGVseSwgc28gdGhlIGFic29sdXRlIHN1bSBkaXZlcmdlcy4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJCb3VuZGVkbmVzcyBvZiBcXChoW25dXFwpIGFsb25lIGlzIG5vdCB0aGUgQklCTyB0ZXN0OyBhYnNvbHV0ZSBzdW1tYWJpbGl0eSBpcyByZXF1aXJlZC4iLCJDIjoiVGhlIHNwZWNpZmljIHBlcmlvZCBsZW5ndGggaXMgbm90IHdoYXQgZGV0ZXJtaW5lcyBzdW1tYWJpbGl0eS4iLCJEIjoiRm9yIExUSSBzeXN0ZW1zLCBhYnNvbHV0ZSBzdW1tYWJpbGl0eSBvZiBcXChoW25dXFwpIGlzIHRoZSBzdGFuZGFyZCBCSUJPIHN0YWJpbGl0eSB0ZXN0LiJ9LCJoaW50IjoiQSByZXBlYXRpbmcgcG9zaXRpdmUgY29udHJpYnV0aW9uIGFkZGVkIGZvcmV2ZXIgY2Fubm90IGhhdmUgYSBmaW5pdGUgc3VtLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwM19xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2h5IGlzIHRoZSBjbGFpbSAndGhlIGltcHVsc2UgcmVzcG9uc2UgcGxvdCBzdGF5cyBiZXR3ZWVuIC0xIGFuZCAxLCBzbyB0aGUgc3lzdGVtIGlzIEJJQk8tc3RhYmxlJyB3cm9uZz8iLCJvcHRpb25zIjpbIkEuIEJJQk8gc3RhYmlsaXR5IHJlcXVpcmVzIFxcKFxcc3VtIHxoW25dfDxcXGluZnR5XFwpLCBub3QganVzdCBib3VuZGVkIFxcKGhbbl1cXCkuIiwiQi4gQklCTyBzdGFiaWxpdHkgcmVxdWlyZXMgXFwoaFtuXVxcKSB0byBiZSBleGFjdGx5IHplcm8gZm9yIGFsbCBcXChuXFwpLiIsIkMuIEEgYm91bmRlZCBpbXB1bHNlIHJlc3BvbnNlIGFsd2F5cyBtZWFucyB0aGUgaW5wdXQgaXMgdW5ib3VuZGVkLiIsIkQuIFN0YWJpbGl0eSBjYW5ub3QgYmUgY2hlY2tlZCBmcm9tIHRoZSBpbXB1bHNlIHJlc3BvbnNlLiJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IlRoZSBjb21tb24gdHJhcCBpcyBjb25mdXNpbmcgYm91bmRlZCBpbXB1bHNlIHJlc3BvbnNlIHZhbHVlcyB3aXRoIGZpbml0ZSB0b3RhbCBhYnNvbHV0ZSBzdW0uIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiU3RhYmxlIHN5c3RlbXMgY2FuIGhhdmUgbm9uemVybyBpbXB1bHNlIHJlc3BvbnNlcy4iLCJDIjoiVGhpcyBzdGF0ZW1lbnQgZG9lcyBub3QgZm9sbG93IGZyb20gYm91bmRlZCBcXChoW25dXFwpLiIsIkQiOiJGb3IgTFRJIHN5c3RlbXMsIHRoZSBpbXB1bHNlIHJlc3BvbnNlIGlzIGV4YWN0bHkgd2hhdCB0aGUgQklCTyB0ZXN0IHVzZXMuIn0sImhpbnQiOiJMb29rIGZvciB0b3RhbCBhY2N1bXVsYXRlZCBhYnNvbHV0ZSBhcmVhLCBub3QganVzdCB2ZXJ0aWNhbCBoZWlnaHQuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6InRleHRib29rX3Bsb3Rfb3JfY2xlYW5fc3RlbV9wbG90Iiwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJyZXNvbmFuY2Vfcm9vdF9tYXRjaGluZyIsImxhYmVsIjoiUmVzb25hbmNlIGZyb20gbWF0Y2hpbmcgaW5wdXQgZXhwb25lbnRpYWxzIHRvIGNoYXJhY3RlcmlzdGljIHJvb3RzIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3A0X3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJUaGUgY2hhcmFjdGVyaXN0aWMgcm9vdHMgYXJlIFxcKFxcZ2FtbWE9ZV57XFxwbSBqXFxwaS8zfVxcKS4gVGhlIGlucHV0IGlzIFxcKHhbbl09XFxjb3MoMlxccGkgbi82KXVbbl1cXCkuIFdoeSBkb2VzIHRoZSBzZWN0aW9uIHByZWRpY3QgcmVzb25hbmNlPyIsIm9wdGlvbnMiOlsiQS4gVGhlIGNvc2luZSBlcXVhbHMgYSBzdW0gb2YgZXhwb25lbnRpYWxzIHdpdGggZmFjdG9ycyBcXChlXntcXHBtIGpcXHBpIG4vM31cXCksIG1hdGNoaW5nIHRoZSByb290cy4iLCJCLiBFdmVyeSBjb3NpbmUgaW5wdXQgY2F1c2VzIHJlc29uYW5jZSBpbiBldmVyeSBkaXNjcmV0ZS10aW1lIHN5c3RlbS4iLCJDLiBSZXNvbmFuY2UgaGFwcGVucyBiZWNhdXNlIHRoZSBpbnB1dCBpcyBtdWx0aXBsaWVkIGJ5IFxcKHVbbl1cXCkuIiwiRC4gUmVzb25hbmNlIGhhcHBlbnMgb25seSBiZWNhdXNlIE1BVExBQiB1c2VzIGZpbHRlci4iXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJUaGUgc2ludXNvaWQgZGVjb21wb3NlcyBpbnRvIGV4cG9uZW50aWFsIGNvbXBvbmVudHMgd2hvc2UgYmFzZSBmYWN0b3JzIG1hdGNoIHRoZSBzeXN0ZW0ncyBuYXR1cmFsIG1vZGVzLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IkEgc2ludXNvaWQgY2F1c2VzIHJlc29uYW5jZSBvbmx5IHdoZW4gaXRzIGZyZXF1ZW5jeSBtYXRjaGVzIGEgc3lzdGVtIG1vZGUvcm9vdC4iLCJDIjoiXFwodVtuXVxcKSBtYWtlcyB0aGUgaW5wdXQgY2F1c2FsOyBpdCBpcyBub3QgdGhlIHJvb3QtbWF0Y2hpbmcgcmVhc29uLiIsIkQiOiJNQVRMQUIgY29tcHV0ZXMgdGhlIHJlc3BvbnNlOyBpdCBkb2VzIG5vdCBjcmVhdGUgdGhlIHJlc29uYW5jZSBjb25kaXRpb24uIn0sImhpbnQiOiJSZXdyaXRlIHRoZSBjb3NpbmUgdXNpbmcgY29tcGxleCBleHBvbmVudGlhbHMuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3A0X3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJPYnNlcnZlIGEgc3RlbSBwbG90IG9mIFxcKHlbbl1cXCkgd2hvc2Ugb3NjaWxsYXRpb25zIGdyb3cgaW5zaWRlIGFuIGFwcHJveGltYXRlbHkgbGluZWFyIGVudmVsb3BlIHdoaWxlIHRoZSBpbnB1dCBzaW51c29pZCBzdGF5cyBib3VuZGVkLiBXaGF0IGlzIHRoZSBiZXN0IGNvbmNsdXNpb24/Iiwib3B0aW9ucyI6WyJBLiBUaGUgcmVzcG9uc2UgaXMgcmVzb25hbnQuIiwiQi4gVGhlIHJlc3BvbnNlIGlzIHplcm8taW5wdXQgb25seS4iLCJDLiBUaGUgc3lzdGVtIG11c3QgYmUgbWVtb3J5bGVzcy4iLCJELiBUaGUgcGxvdCBwcm92ZXMgdGhlIGlucHV0IGlzIGFuIGltcHVsc2UuIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiQSBncm93aW5nIG9zY2lsbGF0b3J5IHJlc3BvbnNlIHRvIGEgYm91bmRlZCBzaW51c29pZCBpcyB0aGUgdmlzdWFsIHNpZ25hdHVyZSBvZiByZXNvbmFuY2UgaW4gdGhpcyBleGFtcGxlLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IlRoZSBwbG90dGVkIHJlc3BvbnNlIGlzIGRyaXZlbiBieSB0aGUgc2ludXNvaWRhbCBpbnB1dCwgc28gaXQgaXMgbm90IHplcm8taW5wdXQgb25seS4iLCJDIjoiQSBtZW1vcnlsZXNzIHN5c3RlbSB3b3VsZCBub3QgcHJvZHVjZSB0aGlzIGRlbGF5ZWQgcmVjdXJzaXZlIGdyb3d0aCBwYXR0ZXJuLiIsIkQiOiJUaGUgaW5wdXQgZGVzY3JpYmVkIGlzIHNpbnVzb2lkYWwsIG5vdCBhbiBpbXB1bHNlLiJ9LCJoaW50IjoiTG9vayBmb3IgZ3Jvd3RoIG9mIHRoZSBlbnZlbG9wZSwgbm90IGp1c3Qgb3NjaWxsYXRpb24uIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6InRleHRib29rX2ZpZ3VyZV8zXzM0Iiwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJ6ZXJvX2lucHV0X3RvdGFsX3Jlc3BvbnNlIiwibGFiZWwiOiJaZXJvLWlucHV0IGFuZCB0b3RhbCByZXNwb25zZSIsImltcG9ydGFuY2UiOiJtZWRpdW0iLCJleGFtX3dlaWdodCI6Im1lZGl1bSIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDVfcTEiLCJ0eXBlIjoic2hvcnRfYW5zd2VyIiwic3RlbSI6IkEgc3lzdGVtIGhhcyBub256ZXJvIGluaXRpYWwgY29uZGl0aW9ucyBhbmQgYSBub256ZXJvIGlucHV0LiBTdGF0ZSB0aGUgcmVzcG9uc2UtZGVjb21wb3NpdGlvbiBmb3JtdWxhIGFuZCBleHBsYWluIHRoZSByb2xlIG9mIGZpbHRpYyBpbiBvbmUgb3IgdHdvIHNlbnRlbmNlcy4iLCJpZGVhbF9hbnN3ZXIiOiJcXCh5X3tcXHRleHR7dG90YWx9fVtuXT15X3tcXHRleHR7emVyby1zdGF0ZX19W25dK3lfe1xcdGV4dHt6ZXJvLWlucHV0fX1bbl1cXCkuIGZpbHRpYyBjb252ZXJ0cyB0cmFkaXRpb25hbCBpbml0aWFsIGNvbmRpdGlvbnMgc3VjaCBhcyBcXCh5Wy0xXVxcKSBhbmQgXFwoeVstMl1cXCkgaW50byB0aGUgaW50ZXJuYWwgc3RhdGUgdmVjdG9yIHJlcXVpcmVkIGJ5IE1BVExBQidzIGZpbHRlciBpbXBsZW1lbnRhdGlvbi4iLCJncmFkaW5nX3J1YnJpYyI6WyJNdXN0IHN0YXRlIHRoZSB0b3RhbC1yZXNwb25zZSBzdW0gZm9ybXVsYS4iLCJNdXN0IGRpc3Rpbmd1aXNoIHplcm8tc3RhdGUgcmVzcG9uc2UgZnJvbSB6ZXJvLWlucHV0IHJlc3BvbnNlLiIsIk11c3Qgc2F5IHRoYXQgZmlsdGljIGNvbnZlcnRzIGluaXRpYWwgY29uZGl0aW9ucyBpbnRvIGZpbHRlci1jb21wYXRpYmxlIGludGVybmFsIHN0YXRlcy4iXSwiZXhwbGFuYXRpb24iOiJUaGlzIGNoZWNrcyB3aGV0aGVyIHRoZSBzdHVkZW50IHVuZGVyc3RhbmRzIHJlc3BvbnNlIGRlY29tcG9zaXRpb24gaW5zdGVhZCBvZiB0cmVhdGluZyBmaWx0ZXIgYXMgYSBibGFjayBib3guIiwiaGludCI6Ik9uZSBwYXJ0IGNvbWVzIGZyb20gdGhlIGlucHV0OyB0aGUgb3RoZXIgY29tZXMgZnJvbSBzdG9yZWQgaW5pdGlhbCBzdGF0ZS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19XX0=" style="display:none;"></div>%%KC_END%%
