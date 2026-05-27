%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6ImdlbmVyYXRlZF9pbWFnZSIsInJhdGlvbmFsZSI6IlRoZSBrZXkgaWRlYSBpcyBub3QgYSBzdGFuZGFyZCBwdWJsaWMtcmVmZXJlbmNlIGRpYWdyYW07IHN0dWRlbnRzIG5lZWQgYSBjdXN0b20gc2lnbmFsLWxldmVsIHZpc3VhbCBzaG93aW5nIHRoZSBzcGxpdCBiZXR3ZWVuIGFuIGltcHVsc2UgYXQgdCA9IDAgYW5kIGxhdGVyIGNoYXJhY3RlcmlzdGljIG1vZGVzLiBObyBjcm9wcGVkIHRleHRib29rIGZpZ3VyZSBpcyBhdmFpbGFibGUgZm9yIHRoaXMgYXBwZW5kaXggY29uY2VwdCwgYW5kIHdlYiBzb3VyY2VzIGFyZSB1bmF2YWlsYWJsZS4gTGFUZVggc2hvdWxkIGNhcnJ5IHRoZSBleGFjdCBmb3JtdWxhcywgd2hpbGUgb25lIGdlbmVyYXRlZCBsZWN0dXJlLW5vdGUgdmlzdWFsIHNob3VsZCBtYWtlIHRoZSBpbXB1bHNlLXZlcnN1cy1tb2RlIGRpc3RpbmN0aW9uIHZpc2libGUuIiwiY3JhbSI6IlVzZSB0aGUgdmlzdWFsIHRvIHJlY29nbml6ZSB0aGUgZXhhbSBwYXR0ZXJuOiBpbnN0YW50IGltcHVsc2UgdGVybSBwbHVzIG5hdHVyYWwgbW9kZXMuIiwic3RhbmRhcmQiOiJVc2UgdGhlIHZpc3VhbCBiZXNpZGUgRXEuICgyLjUxKSB0byBjb25uZWN0IHRoZSBmb3JtdWxhIHdpdGggb25lIGNsZWFyIHNpZ25hbCBzaGFwZS4iLCJ0b3Bfc2NvcmUiOiJVc2UgdGhlIHZpc3VhbCB0byBhdm9pZCBjb25mdXNpbmcgdGhlIGF1eGlsaWFyeSByZXNwb25zZSB5bih0KSB3aXRoIHRoZSBmdWxsIGgodCkuIn0=" style="display:none;"></div>%%KC_END%%
# 2.8 Appendix: Determining the Impulse Response

> **Section Objective:** Determine the characteristic-mode part of an LTIC impulse response using an auxiliary system.

---

**Concepts In This Section**

- Impulse response split
- Characteristic modes
- Auxiliary system S0
- Equation for yn(t)
- First-order verification

## 1. The Impulse Response Has Two Pieces

Equation (2.51) separates an LTIC system's impulse response \(h(t)\) into two distinct parts.

**Part 1 — Instant feedthrough:** The term \(b_0\delta(t)\) fires at exactly \(t = 0\). It is the direct, immediate contribution of the input to the output.

**Part 2 — Characteristic modes:** These are the natural response shapes determined by the characteristic polynomial \(Q(\lambda)\). They describe how the system rings or decays after the impulse hits.

**Minimal example:** If \(b_0 = 0\), there is no impulse spike at \(t = 0\), but the characteristic-mode terms may still remain and dominate the response for \(t > 0\).

### EXAM NOTE

When a problem asks for \(h(t)\), always check **both** the instant \(b_0\delta(t)\) term and the characteristic-mode terms. Forgetting either piece is a common error.

## 2. Build S0 to isolate the characteristic modes

**Symbols:**
- \(h(t)\): the unit impulse response of the LTIC system
- \(b_0\delta(t)\): the instant impulse term at \(t = 0\), present only when \(b_0 \neq 0\)
- Characteristic modes: the natural response terms determined by the roots of \(Q(\lambda)\)

**When to use it:** Any time an LTIC differential-equation system asks for its unit impulse response — this is the structural template.

**Common misuse:** Writing only the characteristic-mode terms and omitting the \(b_0\delta(t)\) term. Always check whether \(b_0 \neq 0\) before dropping the impulse piece.

$$h(t) = b_0\delta(t) + \text{characteristic modes} \quad (2.51)$$

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="generate_image" data-teaching-role="concept_anchor" data-visual-use-b64="eyJjcmFtIjoiSW5zdGFudGx5IHJlY29nbml6ZSB0aGUgdHdvIHBpZWNlcyBvZiBoKHQpOiBzcGlrZSBhdCB0ID0gMCBhbmQgZGVjYXlpbmcgbW9kZXMgYWZ0ZXIuIiwic3RhbmRhcmQiOiJDb25uZWN0IEVxLiAoMi41MSkgdG8gdGhpcyB0aW1lLWRvbWFpbiBwaWN0dXJlIOKAlCBvbmUgZm9ybXVsYSwgb25lIHNoYXBlLiIsInRvcF9zY29yZSI6IlRoZSBzcGlrZSBhbmQgdGhlIG1vZGVzIGFyZSBzZXBhcmF0ZSB0ZXJtcy4gQ29uZnVzaW5nIHRoZW0gb3IgbWVyZ2luZyB0aGVtIGlzIGEgc3RydWN0dXJhbCBlcnJvci4ifQ==" style="display:none;"></div>%%KC_END%%
*🎨 The impulse response h(t) has exactly two pieces: the instant spike b0δ(t) at t = 0 (red arrow) and the characteristic modes for t > 0 (teal curve). Notice they are separate terms, not the same phenomenon.*
![Illustration](/generated/gptimage2-1779441561448-2762.png)

## 3. Representative check: first-order Q(D)=D+a

The appendix introduces an **auxiliary system S0** whose input \(x(t)\) and output \(w(t)\) satisfy \(Q(D)w(t) = x(t)\).

Because S0 keeps the same denominator operator \(Q(D)\) as the original system S, it has **exactly the same characteristic polynomial \(Q(\lambda)\)** and therefore the same characteristic modes. The key simplification is that S0 sets \(P(D) = 1\), which forces \(b_0 = 0\). This means S0's impulse response has **no impulse spike at \(t = 0\)** — only the pure characteristic-mode terms remain. That impulse response is called \(y_n(t)\).

**Representative example:** If \(Q(D) = D + 3\), both S and S0 share the characteristic mode \(e^{-3t}\). S0 just strips away any direct feedthrough clutter.

### EXAM NOTE

Use S0 when the problem wants the mode coefficients without the complication of a direct \(b_0\delta(t)\) term.

$$Q(D)\,w(t) = x(t) \quad (2.52)$$
***Symbols:**
- \(Q(D)\): the denominator differential operator of the original system
- \(w(t)\): the output of the auxiliary system S0
- \(x(t)\): the input to S0

**When to use it:** When converting the impulse-response problem into the simpler auxiliary system with \(P(D) = 1\). This equation defines S0 and is the starting point for finding \(y_n(t)\).

**Common misuse:** Thinking S0 is a fundamentally different system. It is not — S0 keeps the same \(Q(D)\) and therefore the same characteristic modes as the original system S.*

$$\left(D^N + a_1 D^{N-1} + \cdots + a_{N-1}D + a_N\right)y_n(t) = \delta(t)$$
***Symbols:**
- \(y_n(t)\): the impulse response of the auxiliary system S0
- \(D\): differentiation with respect to \(t\)
- \(N\): the order of the system
- \(a_1, a_2, \ldots, a_N\): the coefficients of the characteristic polynomial \(Q(\lambda)\)
- \(\delta(t)\): the unit impulse input

**How it arises:** Substituting the impulse input \(x(t) = \delta(t)\) into Eq. (2.52) gives this equation directly.

**When to use it:** When solving for the characteristic-mode terms of \(h(t)\) — find \(y_n(t)\) from this equation, then assemble the full \(h(t)\) using Eq. (2.51).

**Common misuse:** Treating \(y_n(t)\) as the full \(h(t)\). If the original system has \(b_0 \neq 0\), the complete impulse response is \(h(t) = b_0\delta(t) + y_n(t)\), not just \(y_n(t)\) alone.*

## 3. Representative Check: First-Order \(Q(D) = D + a\)

Let \(Q(D) = D + a\). Then S0 satisfies:

$$(D + a)\,y_n(t) = \delta(t)$$

**Claim:** \(y_n(t) = e^{-at}u(t)\) satisfies this equation.

**Check 1 — Behavior for \(t > 0\):**

For \(t > 0\), \(u(t) = 1\), so \(y_n'(t) + a\,y_n(t) = -ae^{-at} + ae^{-at} = 0\). The response satisfies the homogeneous equation, confirming it is a characteristic mode.

**Check 2 — Behavior at \(t = 0\):**

Differentiating \(u(t)\) produces \(\delta(t)\). The step discontinuity at \(t = 0\) supplies exactly the impulse needed on the right-hand side.

Together, both checks confirm \(y_n(t) = e^{-at}u(t)\) is the correct impulse response of S0 for this first-order case.

### EXAM NOTE

Always verify **two things**: the impulse is produced at \(t = 0\) by the step jump, and the homogeneous equation holds for \(t > 0\).

---
**📌 Key Takeaways**
- Impulse response splits as \(h(t) = b_0\delta(t) + \text{characteristic modes}\) — always check both terms (Eq. 2.51).
- Auxiliary system S0 satisfies \(Q(D)w(t) = x(t)\) with \(P(D)=1\), keeping the same modes but no impulse term (Eq. 2.52).
- The mode-only response \(y_n(t)\) satisfies \(\left(D^N + a_1D^{N-1} + \cdots + a_N\right)y_n(t) = \delta(t)\); it contains characteristic modes only, not a direct impulse.
- First-order check: for \(Q(D)=D+a\), \(y_n(t)=e^{-at}u(t)\) works because the step jump gives \(\delta(t)\) at \(t=0\) and the exponential satisfies the homogeneous equation for \(t>0\).

*Next, use the impulse response to connect differential equations with convolution and system output.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6ImltcHVsc2VfcmVzcG9uc2Vfc3BsaXQiLCJsYWJlbCI6IkltcHVsc2UgcmVzcG9uc2Ugc3BsaXQiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDFfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkFjY29yZGluZyB0byBFcS4gKDIuNTEpLCB3aGF0IGFyZSB0aGUgdHdvIHBpZWNlcyBvZiBcXChoKHQpXFwpPyIsIm9wdGlvbnMiOlsiQS4gVGhlIGlucHV0IHNpZ25hbCBhbmQgdGhlIG91dHB1dCBzaWduYWwiLCJCLiBUaGUgZGlyZWN0IGltcHVsc2UgdGVybSBhbmQgdGhlIGNoYXJhY3RlcmlzdGljIG1vZGVzIiwiQy4gVGhlIHJlYWwgcGFydCBhbmQgaW1hZ2luYXJ5IHBhcnQiLCJELiBUaGUgZm9yY2VkIHJlc3BvbnNlIGFuZCB0aGUgc2FtcGxpbmcgcGVyaW9kIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiRXEuICgyLjUxKSBzdGF0ZXMgXFwoaCh0KSA9IGJfMFxcZGVsdGEodCkgKyBcXHRleHR7Y2hhcmFjdGVyaXN0aWMgbW9kZXN9XFwpLiBUaGUgZmlyc3QgdGVybSBpcyB0aGUgaW1tZWRpYXRlIGltcHVsc2UgdGVybTsgdGhlIHNlY29uZCBwYXJ0IGlzIGNvbnRyb2xsZWQgYnkgdGhlIGNoYXJhY3RlcmlzdGljIHBvbHlub21pYWwgXFwoUShcXGxhbWJkYSlcXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiXFwoaCh0KVxcKSBpcyBhIHJlc3BvbnNlLCBub3QgYSBwYWlyIG9mIGlucHV0IGFuZCBvdXRwdXQgc2lnbmFscy4iLCJDIjoiVGhpcyBzZWN0aW9uIGlzIGFib3V0IGRpZmZlcmVudGlhbC1lcXVhdGlvbiBzeXN0ZW1zLCBub3QgY29tcGxleC1udW1iZXIgZGVjb21wb3NpdGlvbi4iLCJEIjoiU2FtcGxpbmcgcGVyaW9kIGlzIHVucmVsYXRlZCBoZXJlLCBhbmQgdGhlIGZvcm11bGEgc3BlY2lmaWNhbGx5IG5hbWVzIFxcKFxcZGVsdGEodClcXCkgYW5kIGNoYXJhY3RlcmlzdGljIG1vZGVzLiJ9LCJoaW50IjoiTG9vayBmb3IgdGhlIFxcKFxcZGVsdGEodClcXCkgdGVybSBhbmQgdGhlIG5hdHVyYWwtbW9kZSB0ZXJtLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9LHsiaWQiOiJrcDFfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkEgZGlhZ3JhbSBzaG93cyBhIHZlcnRpY2FsIHNwaWtlIGF0IFxcKHQgPSAwXFwpIHBsdXMgYSBzbW9vdGggZGVjYXlpbmcgY3VydmUgZm9yIFxcKHQgPiAwXFwpLiBXaGljaCBpbnRlcnByZXRhdGlvbiBiZXN0IG1hdGNoZXMgRXEuICgyLjUxKT8iLCJvcHRpb25zIjpbIkEuIFRoZSBzcGlrZSBpcyBcXChiXzBcXGRlbHRhKHQpXFwpLCBhbmQgdGhlIHNtb290aCBjdXJ2ZSByZXByZXNlbnRzIGNoYXJhY3RlcmlzdGljIG1vZGVzLiIsIkIuIFRoZSBzcGlrZSBpcyB0aGUgY2hhcmFjdGVyaXN0aWMgbW9kZSwgYW5kIHRoZSBzbW9vdGggY3VydmUgaXMgXFwoXFxkZWx0YSh0KVxcKS4iLCJDLiBCb3RoIHBhcnRzIGFyZSBcXChcXGRlbHRhKHQpXFwpLCBqdXN0IGRyYXduIGRpZmZlcmVudGx5LiIsIkQuIFRoZSBzbW9vdGggY3VydmUgaXMgdGhlIGlucHV0IFxcKHgodClcXCksIG5vdCBwYXJ0IG9mIFxcKGgodClcXCkuIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiVGhlIGltcHVsc2Ugc3Bpa2UgcmVwcmVzZW50cyB0aGUgaW5zdGFudCB0ZXJtIFxcKGJfMFxcZGVsdGEodClcXCkuIFRoZSBzbW9vdGggY3VydmUgcmVwcmVzZW50cyB0aGUgY2hhcmFjdGVyaXN0aWMtbW9kZSBwYXJ0IG9mIHRoZSBpbXB1bHNlIHJlc3BvbnNlLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IkNoYXJhY3RlcmlzdGljIG1vZGVzIGFyZSBvcmRpbmFyeSBuYXR1cmFsIHJlc3BvbnNlIHNoYXBlcywgbm90IGltcHVsc2Ugc3Bpa2VzLiIsIkMiOiJcXChcXGRlbHRhKHQpXFwpIGlzIGNvbmNlbnRyYXRlZCBhdCBcXCh0ID0gMFxcKTsgYSBzbW9vdGggY3VydmUgZm9yIFxcKHQgPiAwXFwpIGlzIG5vdCBhbm90aGVyIGRyYXdpbmcgb2YgXFwoXFxkZWx0YSh0KVxcKS4iLCJEIjoiSW4gdGhpcyB2aXN1YWwsIGJvdGggcGllY2VzIGJlbG9uZyB0byBcXChoKHQpXFwpLCBub3QgdG8gdGhlIGV4dGVybmFsIGlucHV0LiJ9LCJoaW50IjoiQW4gaW1wdWxzZSBpcyBjb25jZW50cmF0ZWQgYXQgZXhhY3RseSBcXCh0ID0gMFxcKS4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoiZ2VuZXJhdGVkX2ltYWdlOiBpbXB1bHNlIHNwaWtlIHBsdXMgY2hhcmFjdGVyaXN0aWMtbW9kZSBjdXJ2ZSIsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoiYXV4aWxpYXJ5X3N5c3RlbV9zMCIsImxhYmVsIjoiQXV4aWxpYXJ5IHN5c3RlbSBTMCIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJtZWRpdW0iLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AyX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaHkgZG9lcyB0aGUgYXV4aWxpYXJ5IHN5c3RlbSBTMCBoYXZlIHRoZSBzYW1lIGNoYXJhY3RlcmlzdGljIG1vZGVzIGFzIHRoZSBvcmlnaW5hbCBzeXN0ZW0gUz8iLCJvcHRpb25zIjpbIkEuIEJlY2F1c2UgUzAgaGFzIHRoZSBzYW1lIGlucHV0IFxcKHgodClcXCkiLCJCLiBCZWNhdXNlIFMwIGtlZXBzIHRoZSBzYW1lIGNoYXJhY3RlcmlzdGljIHBvbHlub21pYWwgXFwoUShcXGxhbWJkYSlcXCkiLCJDLiBCZWNhdXNlIFMwIGFsd2F5cyBoYXMgdGhlIHNhbWUgbnVtZXJhdG9yIFxcKFAoRClcXCkiLCJELiBCZWNhdXNlIGV2ZXJ5IExUSUMgc3lzdGVtIGhhcyBpZGVudGljYWwgbW9kZXMiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJDaGFyYWN0ZXJpc3RpYyBtb2RlcyBhcmUgZGV0ZXJtaW5lZCBieSB0aGUgY2hhcmFjdGVyaXN0aWMgcG9seW5vbWlhbCBcXChRKFxcbGFtYmRhKVxcKS4gUzAga2VlcHMgXFwoUVxcKSwgc28gaXQga2VlcHMgdGhlIHNhbWUgbW9kZXMuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhlIGlucHV0IGRvZXMgbm90IGRldGVybWluZSB0aGUgY2hhcmFjdGVyaXN0aWMgbW9kZXMuIiwiQyI6IlMwIGlzIGludHJvZHVjZWQgd2l0aCBcXChQKEQpID0gMVxcKSwgc28gaXQgZG9lcyBub3Qga2VlcCB0aGUgc2FtZSBudW1lcmF0b3IgaW4gZ2VuZXJhbC4iLCJEIjoiRGlmZmVyZW50IExUSUMgc3lzdGVtcyBjYW4gaGF2ZSBkaWZmZXJlbnQgY2hhcmFjdGVyaXN0aWMgcG9seW5vbWlhbHMgYW5kIGRpZmZlcmVudCBtb2Rlcy4ifSwiaGludCI6Ik1vZGVzIGNvbWUgZnJvbSB0aGUgZGVub21pbmF0b3Igb3BlcmF0b3IsIG5vdCB0aGUgaW5wdXQuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX0seyJpZCI6ImtwMl9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2hhdCBpcyB0aGUga2V5IHJlYXNvbiBTMCdzIGltcHVsc2UgcmVzcG9uc2UgXFwoeV9uKHQpXFwpIGhhcyBubyBpbXB1bHNlIHRlcm0gYXQgXFwodCA9IDBcXCk/Iiwib3B0aW9ucyI6WyJBLiBTMCBoYXMgXFwoUChEKSA9IDFcXCksIHNvIFxcKGJfMCA9IDBcXCkgaW4gdGhlIEVxLiAoMi41MSkgc2Vuc2UgdXNlZCBoZXJlLiIsIkIuIFMwIGhhcyBubyBjaGFyYWN0ZXJpc3RpYyBwb2x5bm9taWFsLiIsIkMuIFxcKFxcZGVsdGEodClcXCkgaXMgbm90IHVzZWQgYXMgYW4gaW5wdXQgdG8gUzAuIiwiRC4gXFwoeV9uKHQpXFwpIGlzIGFsd2F5cyB6ZXJvIGZvciBhbGwgXFwodFxcKS4iXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJUaGUgYXBwZW5kaXggdHJlYXRzIFMwIGFzIHRoZSBjYXNlIHdpdGggXFwoUChEKSA9IDFcXCkgYW5kIFxcKGJfMCA9IDBcXCksIHNvIGl0cyBpbXB1bHNlIHJlc3BvbnNlIGNvbnNpc3RzIG9ubHkgb2YgY2hhcmFjdGVyaXN0aWMtbW9kZSB0ZXJtcy4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJTMCBoYXMgdGhlIHNhbWUgXFwoUShcXGxhbWJkYSlcXCkgYXMgUywgc28gaXQgZGVmaW5pdGVseSBoYXMgYSBjaGFyYWN0ZXJpc3RpYyBwb2x5bm9taWFsLiIsIkMiOiJcXCh5X24odClcXCkgaXMgc3BlY2lmaWNhbGx5IHRoZSByZXNwb25zZSBvZiBTMCB0byBcXChcXGRlbHRhKHQpXFwpLiIsIkQiOiJcXCh5X24odClcXCkgaXMgbm90IGdlbmVyYWxseSB6ZXJvOyBpdCBjb250YWlucyB0aGUgY2hhcmFjdGVyaXN0aWMgbW9kZXMuIn0sImhpbnQiOiJUaGUgYWJzZW5jZSBvZiB0aGUgaW1wdWxzZSB0ZXJtIGlzIHRpZWQgdG8gXFwoYl8wXFwpLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoieW5fZXF1YXRpb24iLCJsYWJlbCI6IkVxdWF0aW9uIHNhdGlzZmllZCBieSB5bih0KSIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoxfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwM19xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiSWYgXFwoeV9uKHQpXFwpIGlzIHRoZSBpbXB1bHNlIHJlc3BvbnNlIG9mIFMwLCB3aGljaCBlcXVhdGlvbiBtdXN0IGl0IHNhdGlzZnk/Iiwib3B0aW9ucyI6WyJBLiBcXChRKEQpXFwseV9uKHQpID0gXFxkZWx0YSh0KVxcKSIsIkIuIFxcKFEoRClcXCx5X24odCkgPSAwXFwpIGZvciBhbGwgXFwodFxcKSBpbmNsdWRpbmcgXFwodCA9IDBcXCkiLCJDLiBcXCh5X24odCkgPSBiXzBcXGRlbHRhKHQpXFwpIG9ubHkiLCJELiBcXChQKEQpXFwseV9uKHQpID0geCh0KVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IlMwIGlzIGRlZmluZWQgYnkgXFwoUShEKXcodCkgPSB4KHQpXFwpLiBGb3IgdGhlIGltcHVsc2UgcmVzcG9uc2UsIHRoZSBpbnB1dCBpcyBcXCh4KHQpID0gXFxkZWx0YSh0KVxcKSwgc28gXFwoUShEKVxcLHlfbih0KSA9IFxcZGVsdGEodClcXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiRm9yIFxcKHQgPiAwXFwpIHRoZSBob21vZ2VuZW91cyBlcXVhdGlvbiBtYXkgaG9sZCwgYnV0IGF0IFxcKHQgPSAwXFwpIHRoZSBpbXB1bHNlIGlucHV0IG11c3QgYXBwZWFyIG9uIHRoZSByaWdodCBzaWRlLiIsIkMiOiJcXCh5X24odClcXCkgaXMgdGhlIGNoYXJhY3RlcmlzdGljLW1vZGUgcmVzcG9uc2Ugb2YgUzAsIG5vdCBvbmx5IGEgZGlyZWN0IGltcHVsc2UuIiwiRCI6IlMwIGlzIGRlZmluZWQgdXNpbmcgXFwoUShEKVxcKSwgbm90IFxcKFAoRClcXCksIGluIEVxLiAoMi41MikuIn0sImhpbnQiOiJTdWJzdGl0dXRlIHRoZSBpbXB1bHNlIGlucHV0IGludG8gRXEuICgyLjUyKS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19LHsiaWQiOiJmaXJzdF9vcmRlcl92ZXJpZmljYXRpb24iLCJsYWJlbCI6IkZpcnN0LW9yZGVyIHZlcmlmaWNhdGlvbiIsImltcG9ydGFuY2UiOiJtZWRpdW0iLCJleGFtX3dlaWdodCI6Im1lZGl1bSIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDRfcTEiLCJ0eXBlIjoic2hvcnRfYW5zd2VyIiwic3RlbSI6IkZvciBcXChRKEQpID0gRCArIGFcXCksIGEgY2xhc3NtYXRlIGNsYWltcyBcXCh5X24odCkgPSBlXnstYXR9dSh0KVxcKSBpcyBwbGF1c2libGUgZm9yIFxcKChEK2EpXFwseV9uKHQpID0gXFxkZWx0YSh0KVxcKS4gR2l2ZSB0aGUgdHdvIHF1aWNrIGNoZWNrcyB0aGF0IHN1cHBvcnQgdGhpcyBjbGFpbS4iLCJpZGVhbF9hbnN3ZXIiOiJGb3IgXFwodCA+IDBcXCk6IFxcKHlfbicodCkgKyBhXFwseV9uKHQpID0gLWFlXnstYXR9ICsgYWVeey1hdH0gPSAwXFwpLCBzbyB0aGUgZXhwb25lbnRpYWwgaXMgYSBjaGFyYWN0ZXJpc3RpYyBtb2RlIHNhdGlzZnlpbmcgdGhlIGhvbW9nZW5lb3VzIGVxdWF0aW9uLiBBdCBcXCh0ID0gMFxcKTogZGlmZmVyZW50aWF0aW5nIHRoZSB1bml0IHN0ZXAgXFwodSh0KVxcKSBwcm9kdWNlcyBcXChcXGRlbHRhKHQpXFwpLCBzdXBwbHlpbmcgZXhhY3RseSB0aGUgaW1wdWxzZSBuZWVkZWQgb24gdGhlIHJpZ2h0LWhhbmQgc2lkZSBvZiBcXCgoRCthKVxcLHlfbih0KSA9IFxcZGVsdGEodClcXCkuIiwiZ3JhZGluZ19ydWJyaWMiOlsiTXVzdCBzdGF0ZSB0aGUgaG9tb2dlbmVvdXMgY2hlY2sgZm9yIFxcKHQgPiAwXFwpIiwiTXVzdCBtZW50aW9uIHRoYXQgdGhlIHN0ZXAgZGlzY29udGludWl0eSBwcm9kdWNlcyBcXChcXGRlbHRhKHQpXFwpIiwiTXVzdCBjb25uZWN0IHRoZSByZXN1bHQgdG8gXFwoKEQrYSlcXCx5X24odCkgPSBcXGRlbHRhKHQpXFwpIl0sImV4cGxhbmF0aW9uIjoiVGhpcyBjaGVja3Mgd2hldGhlciB0aGUgc3R1ZGVudCB1bmRlcnN0YW5kcyBib3RoIHBhcnRzOiB0aGUgbmF0dXJhbCBtb2RlIGFmdGVyIFxcKHQgPSAwXFwpIGFuZCB0aGUgaW1wdWxzZSBjcmVhdGVkIGF0IHRoZSBqdW1wIGRpc2NvbnRpbnVpdHkgb2YgXFwodSh0KVxcKS4iLCJoaW50IjoiQ2hlY2sgc2VwYXJhdGVseSB3aGF0IGhhcHBlbnMgYWZ0ZXIgXFwodCA9IDBcXCkgYW5kIGV4YWN0bHkgYXQgXFwodCA9IDBcXCkuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfV19" style="display:none;"></div>%%KC_END%%
