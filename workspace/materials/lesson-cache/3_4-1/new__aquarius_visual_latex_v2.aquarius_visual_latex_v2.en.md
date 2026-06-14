%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6Indpa2lfcmVmZXJlbmNlIiwicmF0aW9uYWxlIjoiVGhpcyBzZWN0aW9uIGlzIG1vc3RseSBhIHNldCBvZiBzeW1ib2xpYyBjbGFzc2lmaWNhdGlvbiB0ZXN0cywgc28gTGFUZVgtbmF0aXZlIGZvcm11bGFzIHNob3VsZCBjYXJyeSB0aGUgZGVmaW5pdGlvbnMuIEEgc3RhdGljIHJlZmVyZW5jZSB2aXN1YWwgb2YgYSBkaXNjcmV0ZS10aW1lIGlucHV0LW91dHB1dCBzeXN0ZW0gb3Igc2FtcGxlIHRpbWVsaW5lIHNob3VsZCBiZSB1c2VkIG9uY2UgYXMgdGhlIHZpc3VhbCBhbmNob3IgdG8gaGVscCBzdHVkZW50cyBjb25uZWN0IGZvcm11bGFzIHRvIHNhbXBsZSBpbmRpY2VzLiBObyB0ZXh0Ym9vayBmaWd1cmVzIGFyZSBhdmFpbGFibGUsIGFuZCBHUFRJbWFnZTIgc2hvdWxkIG5vdCBiZSB1c2VkIHVubGVzcyBXaWtpbWVkaWEvV2lraXBlZGlhIHNlYXJjaCBmYWlscyBhbmQgYSBmYWxsYmFjayBpcyBuZWNlc3NhcnkuIiwiY3JhbSI6IlVzZSB0aGUgdmlzdWFsIHRvIHJlY29nbml6ZSB0aGUgZXhhbSBxdWVzdGlvbiB0eXBlOiBpZGVudGlmeSB3aGljaCBzYW1wbGVzIHlbbl0gdXNlcywgdGhlbiBhcHBseSB0aGUgY29ycmVjdCBwcm9wZXJ0eSB0ZXN0LiIsInN0YW5kYXJkIjoiVXNlIHRoZSB2aXN1YWwgdG8gY29ubmVjdCB4W25dLCB5W25dLCBzYW1wbGUgc2hpZnRzLCBwYXN0IHNhbXBsZXMsIHByZXNlbnQgc2FtcGxlcywgYW5kIGZ1dHVyZSBzYW1wbGVzLiIsInRvcF9zY29yZSI6IlVzZSB0aGUgdmlzdWFsIHRvIHNlcGFyYXRlIGxvb2stYWxpa2UgdHJhcHM6IGNhdXNhbCB2ZXJzdXMgbWVtb3J5bGVzcywgdGltZS1pbnZhcmlhbnQgdmVyc3VzIGNvbnN0YW50LWxvb2tpbmcgYWxnZWJyYSwgYW5kIGludmVydGlibGUgdmVyc3VzIG1lcmVseSBjb21wdXRhYmxlLiJ9" style="display:none;"></div>%%KC_END%%
# Classification of Discrete-Time Systems

> **Section Objective:** Classify discrete-time systems using the standard exam tests for linearity, time invariance, causality, invertibility, BIBO stability, and memorylessness.

## Concepts In This Section

- Linearity
- Time invariance
- Causality
- Invertibility
- BIBO stability
- Memoryless systems


## 1. Linearity: test superposition

A discrete-time system is **linear** only if it passes the superposition test: scaling and adding inputs must produce the same scaling and adding of outputs. Here \(S\) denotes the system, \(x_1[n]\) and \(x_2[n]\) are any two valid inputs, and \(a\), \(b\) are arbitrary constants.

**When to use:** Any exam question asking 'linear or nonlinear?' requires this test.

**Minimal example:** For \(y[n] = x[n]x[n-1]\), scaling the input by \(a\) gives \((ax[n])(ax[n-1]) = a^2 x[n]x[n-1] = a^2 y[n]\). Linearity would require \(ay[n]\), but we get \(a^2 y[n]\), so the system is **nonlinear**.

### COMMON MISTAKE

Do not judge linearity by whether the equation 'looks simple.' Always test superposition explicitly.

$$S\{a x_1[n] + b x_2[n]\} = aS\{x_1[n]\} + bS\{x_2[n]\}$$

## 2. Time invariance: shift in, shift out

A discrete-time system is **time-invariant** (also called shift-invariant) when delaying the input by \(N\) samples delays the output by exactly \(N\) samples and does not otherwise change its shape or values. Here \(N\) is any integer sample shift.

**When to use:** Any time the system equation contains shifted inputs or coefficients that might depend on \(n\).

**Contrast example:** \(y[n] = e^{-n}x[n]\) is **time-varying**. Shifting the input to \(x[n-N]\) gives \(e^{-n}x[n-N]\), but the required output would be \(y[n-N] = e^{-(n-N)}x[n-N]\). The multiplier \(e^{-n}\) does not shift with the input.

### COMMON MISTAKE

Do not assume a system is time-invariant just because it contains \(x[n]\). Always check whether any coefficient depends explicitly on \(n\).

$$x[n] \xrightarrow{S} y[n] \quad \Longrightarrow \quad x[n-N] \xrightarrow{S} y[n-N]$$

## 3. Causality: no future input allowed

A **causal** discrete-time system produces the output at time \(k\) using only present or past input values — never future values. Here \(k\) is the current output time and \(n \le k\) covers all input sample times that are not in the future.

**Exam trigger:** Look for any term such as \(x[k+1]\), \(x[n+2]\), or any index greater than the current output time.

**Example:** \(y[n] = x[n]x[n-1]\) is **causal** because it uses \(x[n]\) (present) and \(x[n-1]\) (past).

### COMMON MISTAKE

Do not confuse 'has memory' with 'noncausal.' Using \(x[n-1]\) means the system has memory, but it is still causal — past inputs are allowed.

$$y[k] \text{ may depend only on } x[n] \text{ for } n \le k$$

## 4. Invertibility: can the input be uniquely recovered?

A system \(S\) is **invertible** if an inverse system \(S_i\) can reconstruct the original input exactly from the output. The key question is: can two different inputs produce the same output? If yes, the system is **not invertible**.

**Invertible example:** A unit delay \(y[n] = x[n-1]\) is invertible by a unit advance \(x[n] = y[n+1]\).

**Non-invertible examples:** \(y[n] = |x[n]|\) and \(y[n] = \cos(x[n])\) both destroy information.

**Exam trap for \(y[n] = x[n]x[n-1]\):** The constant inputs \(x_1[n] = 1\) and \(x_2[n] = -1\) both produce output \(y[n] = 1\). Since two different inputs give the same output, the system is **not invertible**.

### COMMON MISTAKE

Knowing the output value is not enough. Invertibility requires that the output uniquely identifies the input.

$$S_i\{S\{x[n]\}\} = x[n]$$

## 5. BIBO stability: bounded input must stay bounded

**BIBO stability** means every bounded input produces a bounded output. Here \(M_x\) is a finite bound on the input and \(M_y\) is a finite bound on the output.

**When to use:** Any exam question asking whether the system can 'blow up' even when input values stay limited.

**Example:** For \(y[n] = x[n]x[n-1]\), if \(|x[n]| \le M_x\) for all \(n\), then:

$$|y[n]| = |x[n]||x[n-1]| \le M_x \cdot M_x = M_x^2$$

Since \(M_x^2\) is finite, the system is **BIBO-stable**.

### COMMON MISTAKE

Do not test just one convenient input. BIBO stability must hold for every possible bounded input.

$$|x[n]| \le M_x < \infty \quad \Longrightarrow \quad |y[n]| \le M_y < \infty$$

## 6. Memoryless systems: same-time input only

A **memoryless** system uses only the input value at the same time index \(n\) to produce \(y[n]\). Here \(F\) is any allowed function of the present input sample.

**Memoryless example:** \(y[n] = \sin(x[n])\) — output depends only on \(x[n]\) at the same instant.

**Systems with memory:**
- \(y[n] - y[n-1] = x[n]\) — involves a previous output \(y[n-1]\)
- \(y[n] = x[n]x[n-1]\) — involves a previous input \(x[n-1]\)

Both require knowledge of a past value, so both have memory.

### COMMON MISTAKE

Nonlinearity and memory are **separate properties**. A nonlinear system such as \(y[n] = (x[n])^2\) can still be memoryless. Always check each property independently.

$$y[n] = F(x[n])$$

---
**📌 Key Takeaways**
- **Linearity (superposition):** \(S\{ax_1[n] + bx_2[n]\} = aS\{x_1[n]\} + bS\{x_2[n]\}\) — scaling and adding inputs must produce the same scaling and adding of outputs.
- **Time invariance (shift test):** \(x[n] \xrightarrow{S} y[n]\) implies \(x[n-N] \xrightarrow{S} y[n-N]\) — a delay in the input must produce the same delay in the output, nothing more.
- **Causality:** \(y[k]\) may depend only on \(x[n]\) for \(n \le k\) — no future input terms such as \(x[n+1]\) are allowed.
- **Invertibility:** \(S_i\{S\{x[n]\}\} = x[n]\) — the original input can be uniquely recovered from the output; fails if two different inputs produce the same output.
- **BIBO stability:** \(|x[n]| \le M_x < \infty \Rightarrow |y[n]| \le M_y < \infty\) — every bounded input must produce a bounded output.
- **Memoryless:** \(y[n] = F(x[n])\) — output depends only on the present input sample, not on any past or future values.
- **Example 3.10 — \(y[n] = x[n]x[n-1]\):** nonlinear (scaling gives \(a^2 y[n]\), not \(ay[n]\)), time-invariant, causal (uses present and past only), not invertible (\(x=1\) and \(x=-1\) both give output 1), BIBO-stable (\(|y[n]| \le M_x^2\)), and has memory (uses \(x[n-1]\)).

*Next, these classifications will help us read and solve discrete-time system equations.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6OCwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo3LCJtYXgiOjl9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6ImxpbmVhcml0eV9zdXBlcnBvc2l0aW9uIiwibGFiZWwiOiJMaW5lYXJpdHkgdGhyb3VnaCBzdXBlcnBvc2l0aW9uIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AxX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJBIHN5c3RlbSBpcyBkZWZpbmVkIGJ5IFxcKHlbbl0gPSB4W25deFtuLTFdXFwpLiBJZiB0aGUgaW5wdXQgaXMgY2hhbmdlZCBmcm9tIFxcKHhbbl1cXCkgdG8gXFwoYXhbbl1cXCksIHRoZSBvdXRwdXQgYmVjb21lcyBcXChhXjIgeVtuXVxcKS4gV2hhdCBkb2VzIHRoaXMgcHJvdmU/Iiwib3B0aW9ucyI6WyJBLiBUaGUgc3lzdGVtIGlzIGxpbmVhciBiZWNhdXNlIHRoZSBvdXRwdXQgaXMgc3RpbGwgcmVsYXRlZCB0byBcXCh5W25dXFwpLiIsIkIuIFRoZSBzeXN0ZW0gaXMgbm9ubGluZWFyIGJlY2F1c2UgaG9tb2dlbmVpdHkgd291bGQgcmVxdWlyZSBcXChheVtuXVxcKSwgbm90IFxcKGFeMiB5W25dXFwpLiIsIkMuIFRoZSBzeXN0ZW0gaXMgdGltZS12YXJ5aW5nIGJlY2F1c2UgXFwoYVxcKSBpcyBhIGNvbnN0YW50LiIsIkQuIFRoZSBzeXN0ZW0gaXMgbm9uY2F1c2FsIGJlY2F1c2UgXFwoeFtuLTFdXFwpIGlzIHVzZWQuIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiSG9tb2dlbmVpdHkgcmVxdWlyZXMgc2NhbGluZyB0aGUgaW5wdXQgYnkgXFwoYVxcKSB0byBzY2FsZSB0aGUgb3V0cHV0IGJ5IGV4YWN0bHkgXFwoYVxcKS4gR2V0dGluZyBcXChhXjIgeVtuXVxcKSBicmVha3MgbGluZWFyaXR5LiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IkJlaW5nIHJlbGF0ZWQgdG8gXFwoeVtuXVxcKSBpcyBub3QgZW5vdWdoOyB0aGUgc2NhbGluZyBtdXN0IGJlIGV4YWN0bHkgXFwoYXlbbl1cXCkuIiwiQyI6IlRoZSBjb25zdGFudCBcXChhXFwpIGRvZXMgbm90IG1ha2UgdGhlIHN5c3RlbSB0aW1lLXZhcnlpbmcuIiwiRCI6IlxcKHhbbi0xXVxcKSBpcyBhIHBhc3QgaW5wdXQsIHNvIGl0IGRvZXMgbm90IG1ha2UgdGhlIHN5c3RlbSBub25jYXVzYWwuIn0sImhpbnQiOiJGb3IgbGluZWFyaXR5LCBhc2sgd2hldGhlciB0aGUgb3V0cHV0IHNjYWxlcyBieSB0aGUgc2FtZSBjb25zdGFudCBhcyB0aGUgaW5wdXQuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AxX3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGljaCB0ZXN0IGlzIHRoZSBjb3JyZWN0IGV4YW0gdGVzdCBmb3IgbGluZWFyaXR5PyIsIm9wdGlvbnMiOlsiQS4gQ2hlY2sgd2hldGhlciB0aGUgc3lzdGVtIHVzZXMgb25seSBwcmVzZW50IGFuZCBwYXN0IGlucHV0cy4iLCJCLiBDaGVjayB3aGV0aGVyIGV2ZXJ5IGJvdW5kZWQgaW5wdXQgZ2l2ZXMgYSBib3VuZGVkIG91dHB1dC4iLCJDLiBDaGVjayB3aGV0aGVyIFxcKFNcXHtheF8xW25dICsgYnhfMltuXVxcfSA9IGFTXFx7eF8xW25dXFx9ICsgYlNcXHt4XzJbbl1cXH1cXCkuIiwiRC4gQ2hlY2sgd2hldGhlciB0aGUgaW5wdXQgY2FuIGJlIHJlY292ZXJlZCBmcm9tIHRoZSBvdXRwdXQuIl0sImNvcnJlY3Rfb3B0aW9uIjoiQyIsImV4cGxhbmF0aW9uIjoiTGluZWFyaXR5IGlzIHRlc3RlZCBieSBzdXBlcnBvc2l0aW9uOiBzY2FsaW5nIGFuZCBhZGRpbmcgaW5wdXRzIG11c3QgcHJvZHVjZSB0aGUgc2FtZSBzY2FsaW5nIGFuZCBhZGRpbmcgb2Ygb3V0cHV0cy4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGF0IGlzIHRoZSBjYXVzYWxpdHkgdGVzdC4iLCJCIjoiVGhhdCBpcyB0aGUgQklCTyBzdGFiaWxpdHkgdGVzdC4iLCJEIjoiVGhhdCBpcyB0aGUgaW52ZXJ0aWJpbGl0eSB0ZXN0LiJ9LCJoaW50IjoiTGluZWFyaXR5IGlzIHRoZSBwcm9wZXJ0eSBpbnZvbHZpbmcgY29uc3RhbnRzIFxcKGFcXCkgYW5kIFxcKGJcXCkuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJ0aW1lX2ludmFyaWFuY2Vfc2hpZnRfdGVzdCIsImxhYmVsIjoiVGltZSBpbnZhcmlhbmNlIHRocm91Z2ggaW5wdXQgc2hpZnRpbmciLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDJfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkZvciBhIHRpbWUtaW52YXJpYW50IHN5c3RlbSwgaWYgXFwoeFtuXVxcKSBwcm9kdWNlcyBcXCh5W25dXFwpLCB3aGF0IHNob3VsZCBcXCh4W24tTl1cXCkgcHJvZHVjZT8iLCJvcHRpb25zIjpbIkEuIFxcKHlbbl0gLSBOXFwpIiwiQi4gXFwoeVtuLU5dXFwpIiwiQy4gXFwoeVtOLW5dXFwpIiwiRC4gXFwoZV57LU59eVtuXVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IlRpbWUgaW52YXJpYW5jZSBtZWFucyBhIGRlbGF5IGluIHRoZSBpbnB1dCBwcm9kdWNlcyB0aGUgc2FtZSBkZWxheSBpbiB0aGUgb3V0cHV0LiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoZSBvdXRwdXQgdmFsdWVzIGFyZSBub3QgcmVkdWNlZCBieSBcXChOXFwpOyB0aGUgdGltZSBpbmRleCBpcyBzaGlmdGVkLiIsIkMiOiJUaGF0IGlzIGEgcmV2ZXJzYWwtbGlrZSBjaGFuZ2UsIG5vdCBhIGRlbGF5LiIsIkQiOiJBIG5ldyBhbXBsaXR1ZGUgZmFjdG9yIGlzIG5vdCBwYXJ0IG9mIG9yZGluYXJ5IHRpbWUgaW52YXJpYW5jZS4ifSwiaGludCI6IlNoaWZ0IHRoZSBpbmRleCBvZiBcXCh5XFwpIGJ5IHRoZSBzYW1lIGFtb3VudCB1c2VkIGluIFxcKHhcXCkuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6InNhbXBsZV9zaGlmdF90aW1lbGluZSIsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMl9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2h5IGlzIFxcKHlbbl0gPSBlXnstbn14W25dXFwpIHRpbWUtdmFyeWluZz8iLCJvcHRpb25zIjpbIkEuIEJlY2F1c2UgXFwoZV57LW59XFwpIGRlcGVuZHMgb24gdGhlIHRpbWUgaW5kZXggXFwoblxcKSwgc28gYW4gaW5wdXQgc2hpZnQgZG9lcyBub3Qgc2ltcGx5IHNoaWZ0IHRoZSBvdXRwdXQuIiwiQi4gQmVjYXVzZSBhbGwgZXhwb25lbnRpYWwgc3lzdGVtcyBhcmUgbm9ubGluZWFyLiIsIkMuIEJlY2F1c2UgXFwoeFtuXVxcKSBpcyBub3QgZGVsYXllZC4iLCJELiBCZWNhdXNlIFxcKGVeey1ufVxcKSBpcyBhbHdheXMgYm91bmRlZC4iXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJUaGUgY29lZmZpY2llbnQgY2hhbmdlcyB3aXRoIFxcKG5cXCkuIEFmdGVyIHNoaWZ0aW5nIHRoZSBpbnB1dCwgdGhlIG11bHRpcGxpZXIgaXMgc3RpbGwgXFwoZV57LW59XFwpLCBub3QgdGhlIHNoaWZ0ZWQgbXVsdGlwbGllciBuZWVkZWQgdG8gcHJvZHVjZSBvbmx5IFxcKHlbbi1OXVxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJUaGUgaXNzdWUgaGVyZSBpcyB0aW1lIHZhcmlhdGlvbiwgbm90IHdoZXRoZXIgZXhwb25lbnRpYWxzIGFwcGVhci4iLCJDIjoiQSBzeXN0ZW0gY2FuIGJlIHRpbWUtdmFyeWluZyBldmVuIHdpdGhvdXQgYW4gZXhwbGljaXQgaW5wdXQgZGVsYXkuIiwiRCI6IkJvdW5kZWRuZXNzIGlzIHJlbGF0ZWQgdG8gc3RhYmlsaXR5LCBub3QgdGhlIHNoaWZ0LWludmFyaWFuY2UgdGVzdC4ifSwiaGludCI6Ikxvb2sgZm9yIGNvZWZmaWNpZW50cyB0aGF0IGV4cGxpY2l0bHkgZGVwZW5kIG9uIFxcKG5cXCkuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJjYXVzYWxpdHlfZnV0dXJlX2lucHV0IiwibGFiZWwiOiJDYXVzYWxpdHkgYW5kIGZ1dHVyZSBpbnB1dHMiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDNfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoaWNoIHN5c3RlbSBpcyBub25jYXVzYWw/Iiwib3B0aW9ucyI6WyJBLiBcXCh5W25dID0geFtuXSArIHhbbi0xXVxcKSIsIkIuIFxcKHlbbl0gPSB4W24tMl1cXCkiLCJDLiBcXCh5W25dID0geFtuKzFdXFwpIiwiRC4gXFwoeVtuXSA9IFxcc2luKHhbbl0pXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQyIsImV4cGxhbmF0aW9uIjoiXFwoeFtuKzFdXFwpIGlzIGEgZnV0dXJlIGlucHV0IHZhbHVlIHJlbGF0aXZlIHRvIHRpbWUgXFwoblxcKSwgc28gdGhlIHN5c3RlbSBpcyBub25jYXVzYWwuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhpcyB1c2VzIHByZXNlbnQgYW5kIHBhc3QgaW5wdXRzIG9ubHksIHNvIGl0IGlzIGNhdXNhbC4iLCJCIjoiVGhpcyB1c2VzIGEgcGFzdCBpbnB1dCwgc28gaXQgaXMgY2F1c2FsLiIsIkQiOiJUaGlzIHVzZXMgb25seSB0aGUgcHJlc2VudCBpbnB1dCwgc28gaXQgaXMgY2F1c2FsLiJ9LCJoaW50IjoiRnV0dXJlIGlucHV0IG1lYW5zIGFuIGluZGV4IGdyZWF0ZXIgdGhhbiBcXChuXFwpLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJwYXN0X3ByZXNlbnRfZnV0dXJlX2luZGV4X2xpbmUiLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19LHsiaWQiOiJpbnZlcnRpYmlsaXR5X3VuaXF1ZV9yZWNvdmVyeSIsImxhYmVsIjoiSW52ZXJ0aWJpbGl0eSBhbmQgdW5pcXVlIHJlY292ZXJ5IiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6Im1lZGl1bSIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDRfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkEgc3lzdGVtIG1hcHMgYm90aCBcXCh4XzFbbl0gPSAxXFwpIGFuZCBcXCh4XzJbbl0gPSAtMVxcKSB0byB0aGUgc2FtZSBvdXRwdXQgXFwoeVtuXSA9IDFcXCkuIFdoYXQgY29uY2x1c2lvbiBmb2xsb3dzPyIsIm9wdGlvbnMiOlsiQS4gVGhlIHN5c3RlbSBpcyBpbnZlcnRpYmxlIGJlY2F1c2UgdGhlIG91dHB1dCBpcyBrbm93bi4iLCJCLiBUaGUgc3lzdGVtIGlzIG5vdCBpbnZlcnRpYmxlIGJlY2F1c2UgdHdvIGRpZmZlcmVudCBpbnB1dHMgZ2l2ZSB0aGUgc2FtZSBvdXRwdXQuIiwiQy4gVGhlIHN5c3RlbSBpcyB1bnN0YWJsZSBiZWNhdXNlIHRoZSBvdXRwdXQgaXMgcG9zaXRpdmUuIiwiRC4gVGhlIHN5c3RlbSBpcyBub25jYXVzYWwgYmVjYXVzZSB0aGUgaW5wdXRzIGFyZSBjb25zdGFudHMuIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiSW52ZXJ0aWJpbGl0eSByZXF1aXJlcyB1bmlxdWUgcmVjb3Zlcnkgb2YgdGhlIGlucHV0IGZyb20gdGhlIG91dHB1dC4gVHdvIGRpZmZlcmVudCBpbnB1dHMgcHJvZHVjaW5nIHRoZSBzYW1lIG91dHB1dCBkZXN0cm95cyB1bmlxdWVuZXNzLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6Iktub3dpbmcgdGhlIG91dHB1dCBpcyBub3QgZW5vdWdoIGlmIGl0IGNvdWxkIGhhdmUgY29tZSBmcm9tIG11bHRpcGxlIGlucHV0cy4iLCJDIjoiQSBwb3NpdGl2ZSBvdXRwdXQgZG9lcyBub3QgaW1wbHkgaW5zdGFiaWxpdHkuIiwiRCI6IkNvbnN0YW50IGlucHV0cyBkbyBub3QgaW1wbHkgbm9uY2F1c2FsaXR5LiJ9LCJoaW50IjoiSW52ZXJ0aWJpbGl0eSBpcyBhIG9uZS1vdXRwdXQtdG8tb25lLWlucHV0IHJlY292ZXJ5IHF1ZXN0aW9uLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwNF9xMiIsInR5cGUiOiJzaG9ydF9hbnN3ZXIiLCJzdGVtIjoiRXhwbGFpbiB3aHkgXFwoeVtuXSA9IHx4W25dfFxcKSBpcyBub3QgaW52ZXJ0aWJsZS4iLCJpZGVhbF9hbnN3ZXIiOiJJdCBsb3NlcyB0aGUgc2lnbiBvZiB0aGUgaW5wdXQuIEZvciBleGFtcGxlLCBcXCh4W25dID0gMlxcKSBhbmQgXFwoeFtuXSA9IC0yXFwpIGJvdGggZ2l2ZSBcXCh5W25dID0gMlxcKSwgc28gdGhlIG9yaWdpbmFsIGlucHV0IGNhbm5vdCBiZSB1bmlxdWVseSByZWNvdmVyZWQuIiwiZ3JhZGluZ19ydWJyaWMiOlsiTXVzdCBzdGF0ZSB0aGF0IHRoZSBzaWduIGluZm9ybWF0aW9uIGlzIGxvc3QuIiwiTXVzdCBnaXZlIG9yIGNsZWFybHkgaW1wbHkgdHdvIGRpZmZlcmVudCBpbnB1dHMgd2l0aCB0aGUgc2FtZSBvdXRwdXQuIiwiTXVzdCBjb25uZWN0IHRoZSBsb3NzIG9mIHVuaXF1ZW5lc3MgdG8gbm9uaW52ZXJ0aWJpbGl0eS4iXSwiZXhwbGFuYXRpb24iOiJUaGlzIGNoZWNrcyB3aGV0aGVyIHRoZSBzdHVkZW50IHVuZGVyc3RhbmRzIGludmVydGliaWxpdHkgYXMgdW5pcXVlIGlucHV0IHJlY292ZXJ5LCBub3QganVzdCBhbGdlYnJhaWMgbWFuaXB1bGF0aW9uLiIsImhpbnQiOiJGaW5kIHR3byBkaWZmZXJlbnQgaW5wdXQgdmFsdWVzIHdpdGggdGhlIHNhbWUgYWJzb2x1dGUgdmFsdWUuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJiaWJvX3N0YWJpbGl0eSIsImxhYmVsIjoiQklCTyBzdGFiaWxpdHkiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoibWVkaXVtIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoxfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwNV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiRm9yIFxcKHlbbl0gPSB4W25deFtuLTFdXFwpLCBzdXBwb3NlIFxcKHx4W25dfCBcXGxlIE1feFxcKSBmb3IgYWxsIFxcKG5cXCkuIFdoaWNoIGJvdW5kIHByb3ZlcyBCSUJPIHN0YWJpbGl0eT8iLCJvcHRpb25zIjpbIkEuIFxcKHx5W25dfCBcXGxlIDJNX3hcXCkiLCJCLiBcXCh8eVtuXXwgXFxsZSBNX3heMlxcKSIsIkMuIFxcKHx5W25dfCBcXGxlIG5NX3hcXCkiLCJELiBcXCh8eVtuXXwgXFxsZSB4W24rMV1cXCkiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJTaW5jZSBcXCh8eVtuXXwgPSB8eFtuXXx8eFtuLTFdfFxcKSBhbmQgYm90aCBmYWN0b3JzIGFyZSBhdCBtb3N0IFxcKE1feFxcKSwgdGhlIG91dHB1dCBpcyBib3VuZGVkIGJ5IFxcKE1feF4yXFwpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoZSBzeXN0ZW0gbXVsdGlwbGllcyB0d28gc2FtcGxlczsgaXQgZG9lcyBub3QgYWRkIHRoZW0uIiwiQyI6IkEgYm91bmQgZGVwZW5kaW5nIG9uIFxcKG5cXCkgY2FuIGdyb3cgd2l0aG91dCBsaW1pdCwgc28gaXQgd291bGQgbm90IHByb3ZlIEJJQk8gc3RhYmlsaXR5LiIsIkQiOiJUaGlzIGlzIG5vdCBhIGZpbml0ZSBjb25zdGFudCBib3VuZC4ifSwiaGludCI6IlVzZSB0aGUgcHJvZHVjdCBvZiB0aGUgdHdvIGlucHV0IGJvdW5kcy4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19LHsiaWQiOiJtZW1vcnlsZXNzX3ZzX21lbW9yeSIsImxhYmVsIjoiTWVtb3J5bGVzcyBzeXN0ZW1zIHZlcnN1cyBzeXN0ZW1zIHdpdGggbWVtb3J5IiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3A2X3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGljaCBzeXN0ZW0gaXMgbWVtb3J5bGVzcz8iLCJvcHRpb25zIjpbIkEuIFxcKHlbbl0gPSB4W25deFtuLTFdXFwpIiwiQi4gXFwoeVtuXSAtIHlbbi0xXSA9IHhbbl1cXCkiLCJDLiBcXCh5W25dID0gXFxzaW4oeFtuXSlcXCkiLCJELiBcXCh5W25dID0geFtuKzFdICsgeFtuXVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkMiLCJleHBsYW5hdGlvbiI6IkEgbWVtb3J5bGVzcyBzeXN0ZW0gdXNlcyBvbmx5IFxcKHhbbl1cXCkgYXQgdGhlIHNhbWUgdGltZSBpbmRleC4gXFwoeVtuXSA9IFxcc2luKHhbbl0pXFwpIHNhdGlzZmllcyB0aGF0IGNvbmRpdGlvbi4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGlzIHVzZXMgXFwoeFtuLTFdXFwpLCBhIHBhc3QgaW5wdXQsIHNvIGl0IGhhcyBtZW1vcnkuIiwiQiI6IlRoaXMgdXNlcyBcXCh5W24tMV1cXCksIGEgcGFzdCBvdXRwdXQsIHNvIGl0IGhhcyBtZW1vcnkuIiwiRCI6IlRoaXMgdXNlcyBcXCh4W24rMV1cXCksIGEgZnV0dXJlIGlucHV0LCBzbyBpdCBoYXMgbWVtb3J5IGFuZCBpcyBhbHNvIG5vbmNhdXNhbC4ifSwiaGludCI6Ik1lbW9yeWxlc3MgbWVhbnMgc2FtZS10aW1lIGlucHV0IG9ubHkuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6ImluZGV4X2RlcGVuZGVuY3lfY29tcGFyaXNvbiIsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfV19" style="display:none;"></div>%%KC_END%%
