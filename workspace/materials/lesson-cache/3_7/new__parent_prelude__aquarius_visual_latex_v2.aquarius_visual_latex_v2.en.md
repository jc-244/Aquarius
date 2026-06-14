%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6Indpa2lfcmVmZXJlbmNlIiwicmF0aW9uYWxlIjoiVGhpcyBzZWN0aW9uIGlzIG1haW5seSBhIHN5bWJvbGljIGRlZmluaXRpb24gcGx1cyBhIHNob3J0IGl0ZXJhdGl2ZSBjb21wdXRhdGlvbi4gQSBjbGVhbiBzdGF0aWMgcmVmZXJlbmNlIHZpc3VhbCBvZiBhIGRpc2NyZXRlLXRpbWUgaW1wdWxzZSBvciBpbXB1bHNlLXJlc3BvbnNlIHN0ZW0gcGxvdCBoZWxwcyBzdHVkZW50cyBjb25uZWN0IM60W25dIGFuZCBoW25dIHdpdGhvdXQgbmVlZGluZyBhIGdlbmVyYXRlZCBpbWFnZS4gVGhlIGV4YWN0IGZvcm11bGFzIGFuZCBpdGVyYXRpdmUgc3Vic3RpdHV0aW9ucyBzaG91bGQgc3RheSBMYVRlWC1uYXRpdmUgYmVjYXVzZSBwcmVjaXNpb24gbWF0dGVycyBtb3JlIHRoYW4gZGVjb3JhdGl2ZSBwbG90dGluZy4iLCJjcmFtIjoiVXNlIHRoZSB2aXN1YWwgdG8gaW5zdGFudGx5IHJlY29nbml6ZTogaW5wdXQgzrRbbl0gbWVhbnMgdGhlIG91dHB1dCBpcyBoW25dLiIsInN0YW5kYXJkIjoiVXNlIHRoZSB2aXN1YWwgdG8gY29ubmVjdCB0aGUgc3Bpa2UgaW5wdXQsIHplcm8gcGFzdCB2YWx1ZXMsIGFuZCBmaXJzdCByZXNwb25zZSBzYW1wbGVzLiIsInRvcF9zY29yZSI6IlVzZSB0aGUgdmlzdWFsIGFuZCBmb3JtdWxhcyB0byBzZXBhcmF0ZSBpbXB1bHNlIHJlc3BvbnNlLCBhcmJpdHJhcnkgb3V0cHV0IHlbbl0sIHplcm8tc3RhdGUgcmVzcG9uc2UsIGFuZCBjbG9zZWQtZm9ybSBzb2x2aW5nLiJ9" style="display:none;"></div>%%KC_END%%
# 3.7 The Unit Impulse Response h[n]

> **Section Objective:** Define h[n] as the zero-initial-condition response of a discrete-time system to the unit impulse δ[n], then compute its first samples iteratively.

---

### CONCEPTS IN THIS SECTION

- Unit impulse response h[n]
- Zero initial conditions
- Iterative computation
- First response samples versus closed form

## 1. Definition: h[n] is the impulse response

This is textbook equation **(3.26)**. The unit impulse response h[n] is found by substituting \(x[n] = \delta[n]\) and \(y[n] = h[n]\) into the general system equation \(Q[E]y[n] = P[E]x[n]\).

**Symbol meanings:**
- \(Q[E]\) and \(P[E]\) — shift-operator polynomials that encode the system's difference equation
- \(E\) — the shift operator (\(E\,f[n] = f[n+1]\))
- \(\delta[n]\) — the unit impulse input (1 at \(n = 0\), zero elsewhere)
- \(h[n]\) — the resulting system output

**When to use:** Any time a problem asks you to 'determine h[n]' or find the 'impulse response.'

#### Common Misuse
Do not leave \(x[n]\) as a general input. You must set \(x[n] = \delta[n]\) and \(y[n] = h[n]\) before solving.

$$Q[E]h[n] = P[E]\delta[n]$$

## 2. Zero initial conditions are part of the definition

### MINIMAL EXAMPLE

Suppose the system equation is:

$$y[n] - 0.6\,y[n-1] - 0.16\,y[n-2] = 5\,x[n]$$

To find h[n], replace \(x[n]\) with \(\delta[n]\) and \(y[n]\) with \(h[n]\):

$$h[n] - 0.6\,h[n-1] - 0.16\,h[n-2] = 5\,\delta[n]$$

Nothing mysterious happened. The system coefficients \(-0.6\) and \(-0.16\) are unchanged. Only the signal labels switched: \(x \to \delta\) and \(y \to h\).

#### Exam Tip
Do **not** alter the coefficients when switching from \(y[n]\) to \(h[n]\). The coefficients belong to the system, not the signal.

## 3. Iteratively compute the first samples

The impulse response h[n] in this section is specifically the **zero-initial-condition response** — not the response of a system that already has stored energy.

**What this means:** Before substituting \(n = 0, 1, 2, \ldots\) into the difference equation, all past response samples must be set to zero. For an \(N\)-th order system, the required past samples are \(h[-1]\) through \(h[-N]\).

**Second-order example:** Set \(h[-1] = 0\) and \(h[-2] = 0\) before any iteration begins.

**When to apply:** Always, before plugging in \(n = 0\) during iterative computation.

#### Common Misuse
Forgetting zero initial conditions and treating \(h[-1]\) or \(h[-2]\) as unknown variables. This computes a response with arbitrary stored initial state, which is not h[n] as defined here.

$$h[-1] = h[-2] = \cdots = h[-N] = 0$$

## 3. Iteratively compute the first samples

This is the impulse-response equation from **Example 3.17**, obtained after setting \(x[n] = \delta[n]\) and \(y[n] = h[n]\).

**How iteration works:** Choose one value of \(n\) at a time, starting at \(n = 0\). Substitute all already-known past samples and the known impulse value.

**Key input values to remember:**
- \(\delta[0] = 1\)
- \(\delta[1] = 0\) (the impulse is gone after \(n = 0\))

#### Exam Trigger
If a problem says 'compute the first two values of h[n],' do not search for a closed form first. Substitute \(n = 0\), then \(n = 1\), using the recursion directly.

$$h[n] - 0.6\,h[n-1] - 0.16\,h[n-2] = 5\,\delta[n]$$

### WORKED ITERATION

- **At \(n = 0\):** Use \(h[-1] = 0\), \(h[-2] = 0\), and \(\delta[0] = 1\):

$$h[0] - 0.6(0) - 0.16(0) = 5(1) \implies h[0] = 5$$

- **At \(n = 1\):** Use \(h[0] = 5\), \(h[-1] = 0\), and \(\delta[1] = 0\):

$$h[1] - 0.6(5) - 0.16(0) = 5(0) \implies h[1] = 3$$

- **Continuing further:** Each additional step gives one more sample. However, listing samples \(h[0], h[1], h[2], \ldots\) one by one does **not** automatically produce a closed-form expression for h[n] valid for all \(n\).

#### Warning
The most common arithmetic trap is using \(\delta[1] = 1\) instead of \(\delta[1] = 0\). The impulse is nonzero **only** at \(n = 0\).

---
**📌 Key Takeaways**
- h[n] is defined by \(Q[E]h[n] = P[E]\delta[n]\) (eq. 3.26): replace \(x[n]\) with \(\delta[n]\) and \(y[n]\) with \(h[n]\); system coefficients stay unchanged.
- Zero initial conditions are mandatory: \(h[-1] = h[-2] = \cdots = h[-N] = 0\) before any iteration begins.
- Iterative substitution for Example 3.17 (\(h[n] - 0.6h[n-1] - 0.16h[n-2] = 5\delta[n]\)) gives \(h[0] = 5\) and \(h[1] = 3\).
- Iteration yields correct sample values but does not automatically produce a closed-form expression for h[n].

*Next, these computed samples help motivate how to look for a closed-form impulse response.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InVuaXRfaW1wdWxzZV9yZXNwb25zZV9kZWZpbml0aW9uIiwibGFiZWwiOiJEZWZpbml0aW9uIG9mIGhbbl0iLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDFfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkZvciBhIHN5c3RlbSBcXChRW0VdeVtuXSA9IFBbRV14W25dXFwpLCB3aGF0IGVxdWF0aW9uIGRlZmluZXMgdGhlIHVuaXQgaW1wdWxzZSByZXNwb25zZSBoW25dPyIsIm9wdGlvbnMiOlsiQS4gXFwoUVtFXWhbbl0gPSBQW0VdXFxkZWx0YVtuXVxcKSIsIkIuIFxcKFFbRV1cXGRlbHRhW25dID0gUFtFXWhbbl1cXCkiLCJDLiBcXChRW0VdeVtuXSA9IFBbRV1oW25dXFwpIiwiRC4gXFwoaFtuXSA9IFxcZGVsdGFbbl1cXCkgZm9yIGV2ZXJ5IHN5c3RlbSJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IlRoZSB1bml0IGltcHVsc2UgcmVzcG9uc2UgaXMgdGhlIG91dHB1dCBoW25dIHdoZW4gdGhlIGlucHV0IGlzIFxcKFxcZGVsdGFbbl1cXCksIHNvIFxcKHlbbl1cXCkgYmVjb21lcyBcXChoW25dXFwpIGFuZCBcXCh4W25dXFwpIGJlY29tZXMgXFwoXFxkZWx0YVtuXVxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJUaGlzIHN3YXBzIHRoZSByZXNwb25zZSBhbmQgaW1wdWxzZSBpbnRvIHRoZSB3cm9uZyBzaWRlcyBvZiB0aGUgc3lzdGVtIGVxdWF0aW9uLiIsIkMiOiJUaGlzIHN0aWxsIHVzZXMgdGhlIGdlbmVyYWwgb3V0cHV0IFxcKHlbbl1cXCksIHNvIGl0IGlzIG5vdCB0aGUgaW1wdWxzZS1yZXNwb25zZSBlcXVhdGlvbi4iLCJEIjoiT25seSB0aGUgaW5wdXQgaXMgXFwoXFxkZWx0YVtuXVxcKS4gVGhlIG91dHB1dCBcXChoW25dXFwpIGRlcGVuZHMgb24gdGhlIHN5c3RlbS4ifSwiaGludCI6IlJlcGxhY2UgXFwoeFtuXVxcKSB3aXRoIFxcKFxcZGVsdGFbbl1cXCkgYW5kIFxcKHlbbl1cXCkgd2l0aCBcXChoW25dXFwpLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMV9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiQSBwcm9ibGVtIHNheXM6ICdEZXRlcm1pbmUgdGhlIGltcHVsc2UgcmVzcG9uc2Ugb2YgdGhpcyBkaXNjcmV0ZS10aW1lIHN5c3RlbS4nIFdoYXQgc2hvdWxkIHlvdSBzZXQgdGhlIGlucHV0IGVxdWFsIHRvIGZpcnN0PyIsIm9wdGlvbnMiOlsiQS4gXFwoeFtuXSA9IDBcXCkiLCJCLiBcXCh4W25dID0gMVxcKSBmb3IgYWxsIFxcKG5cXCkiLCJDLiBcXCh4W25dID0gXFxkZWx0YVtuXVxcKSIsIkQuIFxcKHhbbl0gPSBoW25dXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQyIsImV4cGxhbmF0aW9uIjoiSW1wdWxzZSByZXNwb25zZSBtZWFucyB0aGUgc3lzdGVtIHJlc3BvbnNlIHRvIHRoZSB1bml0IGltcHVsc2UgaW5wdXQgXFwoXFxkZWx0YVtuXVxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJaZXJvIGlucHV0IHRlc3RzIHRoZSBuYXR1cmFsIHJlc3BvbnNlLCBub3QgdGhlIGltcHVsc2UgcmVzcG9uc2UuIiwiQiI6IkEgY29uc3RhbnQgaW5wdXQgaXMgYSBzdGVwLWxpa2Ugb3IgREMgaW5wdXQsIG5vdCBhbiBpbXB1bHNlLiIsIkQiOiJcXChoW25dXFwpIGlzIHRoZSBvdXRwdXQgY2F1c2VkIGJ5IHRoZSBpbXB1bHNlIGlucHV0LCBub3QgdGhlIGlucHV0IGl0c2VsZi4ifSwiaGludCI6IlRoZSB3b3JkICdpbXB1bHNlJyB0ZWxscyB5b3UgdGhlIGlucHV0LiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJzaW1wbGVfZGlzY3JldGVfdGltZV9pbXB1bHNlX3N0ZW1fcGxvdCIsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoiemVyb19pbml0aWFsX2NvbmRpdGlvbnMiLCJsYWJlbCI6Ilplcm8gaW5pdGlhbCBjb25kaXRpb25zIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AyX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJGb3IgYSBzZWNvbmQtb3JkZXIgc3lzdGVtLCB3aGljaCBpbml0aWFsIGNvbmRpdGlvbnMgc2hvdWxkIGJlIHVzZWQgd2hlbiBjb21wdXRpbmcgaFtuXSBpbiB0aGlzIHNlY3Rpb24/Iiwib3B0aW9ucyI6WyJBLiBcXChoWzBdID0gaFsxXSA9IDBcXCkiLCJCLiBcXChoWy0xXSA9IGhbLTJdID0gMFxcKSIsIkMuIFxcKFxcZGVsdGFbLTFdID0gXFxkZWx0YVstMl0gPSAxXFwpIiwiRC4gXFwoeVstMV1cXCkgYW5kIFxcKHlbLTJdXFwpIHJlbWFpbiB1bmtub3duIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiRm9yIGEgc2Vjb25kLW9yZGVyIHN5c3RlbSwgdGhlIHplcm8gaW5pdGlhbCBjb25kaXRpb25zIGFyZSB0aGUgdHdvIHBhc3QgcmVzcG9uc2UgdmFsdWVzIFxcKGhbLTFdXFwpIGFuZCBcXChoWy0yXVxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJcXChoWzBdXFwpIGFuZCBcXChoWzFdXFwpIGFyZSByZXNwb25zZSBzYW1wbGVzIHRvIGJlIGNvbXB1dGVkLCBub3QgaW5pdGlhbCBwYXN0IHZhbHVlcy4iLCJDIjoiVGhlIHVuaXQgaW1wdWxzZSBpcyAxIGF0IFxcKG4gPSAwXFwpLCBub3QgYXQgbmVnYXRpdmUgaW5kaWNlcy4iLCJEIjoiRm9yIHRoZSB1bml0IGltcHVsc2UgcmVzcG9uc2UsIHRoZSByZXF1aXJlZCBwYXN0IHJlc3BvbnNlIHZhbHVlcyBhcmUgc2V0IHRvIHplcm8uIn0sImhpbnQiOiJJbml0aWFsIGNvbmRpdGlvbnMgcmVmZXIgdG8gc2FtcGxlcyBiZWZvcmUgXFwobiA9IDBcXCkuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AyX3EyIiwidHlwZSI6InNob3J0X2Fuc3dlciIsInN0ZW0iOiJBIHN0dWRlbnQgc3RhcnRzIEV4YW1wbGUgMy4xNyBieSB3cml0aW5nIFxcKGhbLTFdID0gQVxcKSBhbmQgXFwoaFstMl0gPSBCXFwpLiBXaHkgaXMgdGhpcyB3cm9uZyBmb3IgdGhlIHVuaXQgaW1wdWxzZSByZXNwb25zZSBkZWZpbmVkIGluIHRoaXMgc2VjdGlvbj8iLCJpZGVhbF9hbnN3ZXIiOiJUaGUgdW5pdCBpbXB1bHNlIHJlc3BvbnNlIGlzIGRlZmluZWQgYXMgdGhlIHplcm8taW5pdGlhbC1jb25kaXRpb24gcmVzcG9uc2UgdG8gXFwoXFxkZWx0YVtuXVxcKSwgc28gZm9yIHRoaXMgc2Vjb25kLW9yZGVyIHN5c3RlbSBcXChoWy0xXSA9IDBcXCkgYW5kIFxcKGhbLTJdID0gMFxcKS4gTGVhdmluZyB0aGVtIGFzIEEgYW5kIEIgY29tcHV0ZXMgYSByZXNwb25zZSB3aXRoIGFyYml0cmFyeSBzdG9yZWQgaW5pdGlhbCBzdGF0ZSwgbm90IHRoZSB1bml0IGltcHVsc2UgcmVzcG9uc2UuIiwiZ3JhZGluZ19ydWJyaWMiOlsiTXVzdCBzdGF0ZSB0aGF0IGltcHVsc2UgcmVzcG9uc2UgaGVyZSByZXF1aXJlcyB6ZXJvIGluaXRpYWwgY29uZGl0aW9ucyIsIk11c3QgaWRlbnRpZnkgXFwoaFstMV0gPSAwXFwpIGFuZCBcXChoWy0yXSA9IDBcXCkgZm9yIHRoZSBzZWNvbmQtb3JkZXIgZXhhbXBsZSIsIk11c3QgZXhwbGFpbiB0aGF0IGFyYml0cmFyeSBBIGFuZCBCIHdvdWxkIGluY2x1ZGUgbm9uemVybyBpbml0aWFsIHN0YXRlIGVmZmVjdHMiXSwiZXhwbGFuYXRpb24iOiJUaGlzIGNoZWNrcyB3aGV0aGVyIHRoZSBzdHVkZW50IHVuZGVyc3RhbmRzIHRoYXQgemVybyBpbml0aWFsIGNvbmRpdGlvbnMgYXJlIG5vdCBvcHRpb25hbC4iLCJoaW50IjoiSW1wdWxzZSByZXNwb25zZSBpcyBub3QganVzdCBhYm91dCB0aGUgaW5wdXQ7IGl0IGFsc28gc3BlY2lmaWVzIHRoZSBpbml0aWFsIHN0YXRlLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoiaXRlcmF0aXZlX2NvbXB1dGF0aW9uX2V4YW1wbGUiLCJsYWJlbCI6Ikl0ZXJhdGl2ZSBjb21wdXRhdGlvbiBvZiBoWzBdIGFuZCBoWzFdIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AzX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJGb3IgXFwoaFtuXSAtIDAuNlxcLGhbbi0xXSAtIDAuMTZcXCxoW24tMl0gPSA1XFwsXFxkZWx0YVtuXVxcKSB3aXRoIFxcKGhbLTFdID0gaFstMl0gPSAwXFwpLCB3aGF0IGlzIFxcKGhbMF1cXCk/Iiwib3B0aW9ucyI6WyJBLiAwIiwiQi4gMC42IiwiQy4gNSIsIkQuIDUuNzYiXSwiY29ycmVjdF9vcHRpb24iOiJDIiwiZXhwbGFuYXRpb24iOiJBdCBcXChuID0gMFxcKSwgXFwoXFxkZWx0YVswXSA9IDFcXCkgYW5kIGJvdGggcGFzdCByZXNwb25zZSB2YWx1ZXMgYXJlIHplcm8sIHNvIFxcKGhbMF0gPSA1XFwpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoaXMgaWdub3JlcyB0aGUgaW1wdWxzZSB2YWx1ZSBcXChcXGRlbHRhWzBdID0gMVxcKS4iLCJCIjoiVGhlIGNvZWZmaWNpZW50IDAuNiBtdWx0aXBsaWVzIFxcKGhbLTFdXFwpLCB3aGljaCBpcyB6ZXJvLiIsIkQiOiJUaGlzIGluY29ycmVjdGx5IGFkZHMgY29lZmZpY2llbnQgZWZmZWN0cyBiZWZvcmUgYW55IG5vbnplcm8gcGFzdCByZXNwb25zZSBleGlzdHMuIn0sImhpbnQiOiJBdCBcXChuID0gMFxcKSwgdXNlIFxcKFxcZGVsdGFbMF0gPSAxXFwpLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwM19xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiVXNpbmcgdGhlIHNhbWUgZXF1YXRpb24gYW5kIFxcKGhbMF0gPSA1XFwpLCB3aGF0IGlzIFxcKGhbMV1cXCk/Iiwib3B0aW9ucyI6WyJBLiAwIiwiQi4gMyIsIkMuIDUiLCJELiA4Il0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiQXQgXFwobiA9IDFcXCksIFxcKFxcZGVsdGFbMV0gPSAwXFwpLCBcXChoWzBdID0gNVxcKSwgYW5kIFxcKGhbLTFdID0gMFxcKS4gVGhlcmVmb3JlIFxcKGhbMV0gLSAwLjYoNSkgPSAwXFwpLCBzbyBcXChoWzFdID0gM1xcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGUgaW5wdXQgdGVybSBpcyB6ZXJvLCBidXQgdGhlIHByZXZpb3VzIG91dHB1dCBcXChoWzBdXFwpIHN0aWxsIGFmZmVjdHMgXFwoaFsxXVxcKS4iLCJDIjoiVGhpcyByZXBlYXRzIFxcKGhbMF1cXCkgaW5zdGVhZCBvZiB1c2luZyB0aGUgcmVjdXJzaW9uLiIsIkQiOiJUaGlzIGluY29ycmVjdGx5IHRyZWF0cyB0aGUgaW1wdWxzZSBpbnB1dCBhcyBzdGlsbCBhY3RpdmUgYXQgXFwobiA9IDFcXCkuIn0sImhpbnQiOiJBdCBcXChuID0gMVxcKSwgXFwoXFxkZWx0YVsxXSA9IDBcXCkgYnV0IFxcKGhbMF1cXCkgaXMgYWxyZWFkeSBrbm93bi4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoic3RlbV9wbG90X3Nob3dpbmdfZGVsdGFfemVyb19hdF9uMV9hbmRfcmVzcG9uc2VfaDBfdG9faDEiLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6Iml0ZXJhdGlvbl92c19jbG9zZWRfZm9ybSIsImxhYmVsIjoiQ29tcHV0ZWQgc2FtcGxlcyB2ZXJzdXMgY2xvc2VkIGZvcm0iLCJpbXBvcnRhbmNlIjoibWVkaXVtIiwiZXhhbV93ZWlnaHQiOiJtZWRpdW0iLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3A0X3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGF0IGlzIHRoZSBtYWluIGxpbWl0YXRpb24gb2YgaXRlcmF0aXZlbHkgY29tcHV0aW5nIFxcKGhbMF0sIGhbMV0sIGhbMl0sIFxcbGRvdHNcXCk/Iiwib3B0aW9ucyI6WyJBLiBJdCBjYW5ub3QgY29tcHV0ZSBhbnkgY29ycmVjdCB2YWx1ZXMgb2YgaFtuXS4iLCJCLiBJdCBnaXZlcyBzYW1wbGUgdmFsdWVzIGJ1dCBkb2VzIG5vdCBhdXRvbWF0aWNhbGx5IGdpdmUgYSBjbG9zZWQtZm9ybSBleHByZXNzaW9uIGZvciBoW25dLiIsIkMuIEl0IG9ubHkgd29ya3Mgd2hlbiBcXChcXGRlbHRhW25dXFwpIGlzIHJlcGxhY2VkIGJ5IDEgZm9yIGFsbCBcXChuXFwpLiIsIkQuIEl0IHJlcXVpcmVzIG5vbnplcm8gaW5pdGlhbCBjb25kaXRpb25zLiJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6Ikl0ZXJhdGlvbiBjYW4gcHJvZHVjZSBjb3JyZWN0IG51bWVyaWNhbCBzYW1wbGVzLCBidXQgdGhlIHRleHRib29rIG5vdGVzIHRoYXQgdGhpcyBkb2VzIG5vdCBieSBpdHNlbGYgeWllbGQgYSBjbG9zZWQtZm9ybSBleHByZXNzaW9uLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6Ikl0ZXJhdGlvbiBjYW4gY29tcHV0ZSBjb3JyZWN0IHNhbXBsZXMgc3VjaCBhcyBcXChoWzBdID0gNVxcKSBhbmQgXFwoaFsxXSA9IDNcXCkuIiwiQyI6IlxcKFxcZGVsdGFbbl1cXCkgaXMgbm90IDEgZm9yIGFsbCBcXChuXFwpOyBpdCBpcyAxIG9ubHkgYXQgXFwobiA9IDBcXCkuIiwiRCI6IlRoZSB1bml0IGltcHVsc2UgcmVzcG9uc2UgaGVyZSBzcGVjaWZpY2FsbHkgdXNlcyB6ZXJvIGluaXRpYWwgY29uZGl0aW9ucy4ifSwiaGludCI6IkFzayB3aGV0aGVyIHlvdSBoYXZlIGEgZm9ybXVsYSBmb3IgZXZlcnkgXFwoblxcKSBvciBqdXN0IGEgbGlzdCBvZiB2YWx1ZXMuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfV19" style="display:none;"></div>%%KC_END%%
