%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6Indpa2lfcmVmZXJlbmNlIiwicmF0aW9uYWxlIjoiVGhpcyBhcHBlbmRpeCBpcyBtb3N0bHkgc3ltYm9saWMsIHNvIHRoZSBmb3JtdWxhcyBtdXN0IGJlIHRhdWdodCB3aXRoIExhVGVYLW5hdGl2ZSBzdHJ1Y3R1cmUuIFRoZSBvbmUgdmlzdWFsIG5lZWQgaXMgcmVjb2duaXppbmcgc2hpZnRlZCBkaXNjcmV0ZSBpbXB1bHNlcyBzdWNoIGFzIFxcKFxcZGVsdGFbbl1cXCksIFxcKFxcZGVsdGFbbi0xXVxcKSwgYW5kIFxcKFxcZGVsdGFbbi0yXVxcKS4gQSBXaWtpbWVkaWEtc3R5bGUgZGlzY3JldGUgZGVsdGEgc3RlbSBwbG90IGlzIHByZWZlcmFibGUgdG8gYSBnZW5lcmF0ZWQgaW1hZ2UgYmVjYXVzZSBpdCBpcyBhIHN0YW5kYXJkIHJlZmVyZW5jZSB2aXN1YWwgYW5kIGF2b2lkcyBkZWNvcmF0aXZlIG5vaXNlLiIsImNyYW0iOiJVc2UgdGhlIHZpc3VhbCB0byByZWNvZ25pemUgdGhhdCBcXChcXGRlbHRhW24ta11cXCkgY3JlYXRlcyBhbiBpc29sYXRlZCB0ZXJtIGF0IFxcKG49a1xcKSwgc28gZXh0cmEgZWFybHkgaW1wdWxzZXMgbXVzdCBiZSBhZGRlZCBmYXN0LiIsInN0YW5kYXJkIjoiVXNlIHRoZSB2aXN1YWwgdG8gY29ubmVjdCB0aGUgYWxnZWJyYWljIHNoaWZ0IGZyb20gXFwoXFxkZWx0YVtuXVxcKSB0byBcXChcXGRlbHRhW24tMV1cXCkgd2l0aCB0aGUgYWRkZWQgXFwoQV8xXFxkZWx0YVtuLTFdXFwpIHRlcm0uIiwidG9wX3Njb3JlIjoiVXNlIHRoZSB2aXN1YWwgdG8gc2VwYXJhdGUgdGhlIGltcHVsc2Utb25seSBlYXJseSBzYW1wbGVzIGZyb20gdGhlIGxhdGVyIHplcm8taW5wdXQgY29tcG9uZW50IFxcKHlfY1tuXXVbbl1cXCksIGVzcGVjaWFsbHkgd2hlbiBtdWx0aXBsZSBsZWFkaW5nIHNoaWZ0ZWQgaW1wdWxzZXMgYXBwZWFyLiJ9" style="display:none;"></div>%%KC_END%%
# 3.12 Appendix: Impulse Response for a Special Case

> **Section Objective:** Learn how the impulse-response form changes when \(a_N=0\) makes the usual coefficient \(A_0=b_N/a_N\) undefined.

---

**Concepts In This Section**

- Factoring \(Q[E]\)
- Shifted impulse input
- Extra impulse terms in \(h[n]\)
- Multiple zero coefficients

## 1. The special trigger: \(a_N=0\)

In the standard impulse-response procedure, the coefficient \(A_0\) is computed as \(A_0 = b_N/a_N\). When \(a_N=0\), this division is undefined — the standard shortcut breaks immediately.

The structural fix comes from recognizing that the system operator \(Q[E]\) must contain a factor of \(E\). This allows the rewrite \(Q[E]=E\widehat{Q}[E]\), where:

- \(Q[E]\) is the original system operator
- \(E\) is the shift operator (advances the sequence by one sample)
- \(\widehat{Q}[E]\) is the remaining operator after pulling out one factor of \(E\)

**Minimal example:** If \(Q[E]=E(1-0.5E)\), then \(\widehat{Q}[E]=1-0.5E\).

#### Exam Trigger
Seeing \(a_N=0\) in the difference equation immediately signals this special case.

#### Common Misuse
Do not attempt to compute \(A_0=b_N/a_N\) when \(a_N=0\). The result is undefined and the procedure must be modified before any coefficients are found.

$$Q[E] = E\widehat{Q}[E]$$


*🎨 Notice that \(\delta[n]\) fires only at \(n=0\), while \(\delta[n-1]\) fires only at \(n=1\). Each shifted impulse contributes at exactly one sample index.*
![Illustration](/generated/gptimage2-1781409198715-6693.png)

## 2. The modified impulse-response equation

Once \(Q[E]=E\widehat{Q}[E]\) is established, substitute into the original impulse-response equation:

$$Q[E]h[n] = P[E]\delta[n] \quad\Longrightarrow\quad E\widehat{Q}[E]h[n] = P[E]\delta[n]$$

Dividing both sides by the common factor \(E\) (i.e., removing one shift) shifts the impulse on the right side by one sample:

$$\widehat{Q}[E]h[n] = P[E]\delta[n-1]$$

Here:
- \(h[n]\) is the impulse response of the system
- \(P[E]\) is the input-side operator (unchanged)
- \(\delta[n-1]\) is an impulse occurring at \(n=1\), one sample later than \(\delta[n]\)

**When to use it:** Only after confirming the \(a_N=0\) special case and factoring out one \(E\) from \(Q[E]\).

#### Exam Trigger
The textbook states the input vanishes for \(n\ge 2\), not \(n\ge 1\) — this is the signature of the shifted equation.

#### Common Misuse
Do not keep \(P[E]\delta[n]\) after the factor of \(E\) has been removed. The right-hand side must become \(P[E]\delta[n-1]\).

$$\widehat{Q}[E]h[n] = P[E]\delta[n-1]$$

## 3. The corrected form of the impulse response

The shift from \(\delta[n]\) to \(\delta[n-1]\) is not cosmetic — it changes which early samples are forced by the impulse input.

- **Wrong:** Use the ordinary equation and write only \(P[E]\delta[n]\) on the right-hand side.
- **Right:** After \(Q[E]=E\widehat{Q}[E]\), use \(P[E]\delta[n-1]\) on the right-hand side.

With \(\delta[n]\) the input vanishes for \(n\ge 1\). With \(\delta[n-1]\) the input vanishes for \(n\ge 2\), so there is one additional forced sample at \(n=1\).

> **Exam Tip:** If the right-hand impulse is shifted to \(n=1\), expect an explicit \(A_1\delta[n-1]\) term in \(h[n]\). That term is not optional.

## 4. If more zero coefficients appear

Because the modified equation \(\widehat{Q}[E]h[n]=P[E]\delta[n-1]\) forces the input to remain active until \(n=1\), the impulse response must account for two isolated early samples — one at \(n=0\) and one at \(n=1\) — before the natural response takes over.

The three components are:

- \(A_0\delta[n]\): isolated impulse contribution at \(n=0\)
- \(A_1\delta[n-1]\): isolated impulse contribution at \(n=1\) only (not at any later sample)
- \(y_c[n]u[n]\): the zero-input (complementary) response, switched on by the unit step \(u[n]\) for \(n\ge 0\)

**Minimal example:** The term \(A_1\delta[n-1]\) contributes a single value at \(n=1\) and is zero everywhere else. It is not a sustained signal.

#### Exam Trigger
One factored \(E\) in \(Q[E]\) means exactly one extra shifted impulse term must be added.

#### Common Misuse
Writing \(h[n]=A_0\delta[n]+y_c[n]u[n]\) looks like the ordinary form but misses the forced sample at \(n=1\). This error loses points whenever \(a_N=0\).

$$h[n] = A_0\delta[n] + A_1\delta[n-1] + y_c[n]u[n]$$

## 4. If more zero coefficients appear

The same pattern extends when more consecutive leading coefficients are zero. If \(a_N=a_{N-1}=0\), the operator \(Q[E]\) contains two factors of \(E\), and the impulse response must include three isolated early impulse terms:

$$h[n] = A_0\delta[n] + A_1\delta[n-1] + A_2\delta[n-2] + y_c[n]u[n]$$

**Counting rule (from the textbook):** Determine the unknown constants from the \(N+1\) initial values \(h[0], h[1], \ldots, h[N]\), found iteratively from \(Q[E]h[n]=P[E]\delta[n]\).

> **Trap:** Do not add shifted impulse terms arbitrarily. Add them only when the zero-coefficient structure of \(Q[E]\) requires it — one extra shifted impulse term per factored \(E\).

---
**📌 Key Takeaways**
- When \(a_N=0\), the coefficient \(A_0=b_N/a_N\) is undefined; factor \(Q[E]\) as \(Q[E]=E\widehat{Q}[E]\) instead.
- The factored operator shifts the forcing term: the modified equation becomes \(\widehat{Q}[E]h[n]=P[E]\delta[n-1]\), so the input persists until \(n\ge 2\).
- The corrected impulse response is \(h[n]=A_0\delta[n]+A_1\delta[n-1]+y_c[n]u[n]\); omitting \(A_1\delta[n-1]\) is the most common error.
- Each additional consecutive zero coefficient adds one more shifted impulse term; constants are found from \(N+1\) initial values iterated from \(Q[E]h[n]=P[E]\delta[n]\).

*Next, use this special-case logic to avoid losing early impulse samples in system-response calculations.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InNwZWNpYWxfY2FzZV90cmlnZ2VyIiwibGFiZWwiOiJSZWNvZ25pemluZyB0aGUgXFwoYV9OPTBcXCkgdHJpZ2dlciIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2hhdCBpcyB0aGUgaW1tZWRpYXRlIHByb2JsZW0gd2hlbiBcXChhX049MFxcKSBpbiB0aGlzIGFwcGVuZGl4PyIsIm9wdGlvbnMiOlsiQS4gXFwoaFtuXVxcKSBtdXN0IGJlIHplcm8gZm9yIGFsbCBcXChuXFwpIiwiQi4gXFwoQV8wPWJfTi9hX05cXCkgYmVjb21lcyB1bmRlZmluZWQiLCJDLiBcXChQW0VdXFwpIG11c3QgYmUgZGlzY2FyZGVkIiwiRC4gVGhlIHVuaXQgc3RlcCBcXCh1W25dXFwpIGJlY29tZXMgaW52YWxpZCJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IlRoZSBzdGFuZGFyZCBjb2VmZmljaWVudCBcXChBXzA9Yl9OL2FfTlxcKSBjYW5ub3QgYmUgY29tcHV0ZWQgd2hlbiBcXChhX049MFxcKSwgc28gdGhlIHByb2NlZHVyZSBtdXN0IGJlIG1vZGlmaWVkLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoZSBpbXB1bHNlIHJlc3BvbnNlIGlzIG5vdCBpZGVudGljYWxseSB6ZXJvOyBpdCBuZWVkcyBhIG1vZGlmaWVkIGZvcm0uIiwiQyI6IlxcKFBbRV1cXCkgcmVtYWlucyBpbiB0aGUgbW9kaWZpZWQgZXF1YXRpb24uIiwiRCI6IlxcKHVbbl1cXCkgaXMgc3RpbGwgdXNlZCBpbiB0aGUgY29ycmVjdGVkIHJlc3BvbnNlIGZvcm0uIn0sImhpbnQiOiJMb29rIGZvciB0aGUgZGl2aXNpb24gYnkgXFwoYV9OXFwpLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMV9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2hlbiB0aGUgc3BlY2lhbCBjYXNlIFxcKGFfTj0wXFwpIG9jY3Vycywgd2hpY2ggc3RydWN0dXJhbCByZXdyaXRlIGlzIHVzZWQ/Iiwib3B0aW9ucyI6WyJBLiBcXChRW0VdPUVcXHdpZGVoYXR7UX1bRV1cXCkiLCJCLiBcXChQW0VdPUVcXHdpZGVoYXR7UX1bRV1cXCkiLCJDLiBcXChRW0VdPVBbRV1cXGRlbHRhW25dXFwpIiwiRC4gXFwoaFtuXT1FXFx3aWRlaGF0e1F9W0VdXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiVGhlIG9wZXJhdG9yIFxcKFFbRV1cXCkgaXMgZmFjdG9yZWQgYXMgXFwoRVxcd2lkZWhhdHtRfVtFXVxcKSwgYWxsb3dpbmcgdGhlIGVxdWF0aW9uIHRvIGJlIHJld3JpdHRlbi4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJUaGUgZmFjdG9yaXphdGlvbiBhcHBsaWVzIHRvIFxcKFFbRV1cXCksIG5vdCBcXChQW0VdXFwpLiIsIkMiOiJUaGlzIGNvbmZ1c2VzIHRoZSBvcGVyYXRvciB3aXRoIHRoZSBmdWxsIGltcHVsc2UtcmVzcG9uc2UgZXF1YXRpb24uIiwiRCI6IlxcKGhbbl1cXCkgaXMgdGhlIHJlc3BvbnNlIHNlcXVlbmNlLCBub3QgdGhlIGZhY3RvcmVkIG9wZXJhdG9yLiJ9LCJoaW50IjoiVGhlIGhhdCBiZWxvbmdzIHRvIHRoZSByZW1haW5pbmcgcGFydCBvZiBcXChRW0VdXFwpLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoibW9kaWZpZWRfZXF1YXRpb24iLCJsYWJlbCI6Ik1vZGlmaWVkIGltcHVsc2UtcmVzcG9uc2UgZXF1YXRpb24iLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDJfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkFmdGVyIGZhY3RvcmluZyBcXChRW0VdPUVcXHdpZGVoYXR7UX1bRV1cXCksIHdoYXQgZXF1YXRpb24gc2hvdWxkIGJlIHVzZWQgZm9yIHRoZSBzcGVjaWFsIGNhc2U/Iiwib3B0aW9ucyI6WyJBLiBcXChcXHdpZGVoYXR7UX1bRV1oW25dPVBbRV1cXGRlbHRhW25dXFwpIiwiQi4gXFwoXFx3aWRlaGF0e1F9W0VdaFtuXT1QW0VdXFxkZWx0YVtuLTFdXFwpIiwiQy4gXFwoUVtFXWhbbl09XFx3aWRlaGF0e1F9W0VdXFxkZWx0YVtuLTFdXFwpIiwiRC4gXFwoUFtFXWhbbl09UVtFXVxcZGVsdGFbbi0xXVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IlJlbW92aW5nIHRoZSBjb21tb24gZmFjdG9yIFxcKEVcXCkgc2hpZnRzIHRoZSBpbXB1bHNlIHRlcm0sIGdpdmluZyBcXChcXHdpZGVoYXR7UX1bRV1oW25dPVBbRV1cXGRlbHRhW24tMV1cXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhpcyBmb3JnZXRzIHRoZSBzaGlmdGVkIGltcHVsc2UgXFwoXFxkZWx0YVtuLTFdXFwpLiIsIkMiOiJUaGlzIGtlZXBzIFxcKFFbRV1cXCkgaW5zdGVhZCBvZiB1c2luZyBcXChcXHdpZGVoYXR7UX1bRV1cXCkgYW5kIG1pc3BsYWNlcyB0aGUgb3BlcmF0b3IuIiwiRCI6IlRoaXMgc3dhcHMgdGhlIHJvbGVzIG9mIFxcKFBbRV1cXCkgYW5kIFxcKFFbRV1cXCkuIn0sImhpbnQiOiJUaGUgbGVmdCBzaWRlIGxvc2VzIG9uZSBcXChFXFwpLCBhbmQgdGhlIGltcHVsc2Ugb24gdGhlIHJpZ2h0IHNoaWZ0cy4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDJfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkEgZGlhZ3JhbSBzaG93cyBvbmUgc3RlbSBhdCBcXChuPTBcXCkgbGFiZWxlZCBcXChcXGRlbHRhW25dXFwpIGFuZCBhbm90aGVyIHN0ZW0gYXQgXFwobj0xXFwpIGxhYmVsZWQgXFwoXFxkZWx0YVtuLTFdXFwpLiBXaGljaCBjb25jbHVzaW9uIG1hdGNoZXMgdGhlIHNwZWNpYWwtY2FzZSBlcXVhdGlvbj8iLCJvcHRpb25zIjpbIkEuIFRoZSBmb3JjaW5nIGltcHVsc2UgaGFzIG1vdmVkIHRvIHRoZSBcXChuPTFcXCkgcG9zaXRpb24iLCJCLiBcXChcXGRlbHRhW24tMV1cXCkgaXMgdGhlIHNhbWUgaW1wdWxzZSBsb2NhdGlvbiBhcyBcXChcXGRlbHRhW25dXFwpIiwiQy4gVGhlIHJlc3BvbnNlIGhhcyBubyBlYXJseSBpbXB1bHNlIHNhbXBsZXMiLCJELiBUaGUgdGVybSBcXChcXGRlbHRhW24tMV1cXCkgY29udHJpYnV0ZXMgYXQgYWxsIFxcKG5cXGdlMVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IlxcKFxcZGVsdGFbbi0xXVxcKSBpcyBhbiBpbXB1bHNlIGF0IFxcKG49MVxcKSwgc28gdGhlIHNwZWNpYWwtY2FzZSBmb3JjaW5nIGFmZmVjdHMgYW4gYWRkaXRpb25hbCBlYXJseSBzYW1wbGUuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiVGhlIHNoaWZ0IGNoYW5nZXMgdGhlIGltcHVsc2UgbG9jYXRpb24gZnJvbSBcXChuPTBcXCkgdG8gXFwobj0xXFwpLiIsIkMiOiJUaGUgc3BlY2lhbCBjYXNlIHNwZWNpZmljYWxseSByZXF1aXJlcyBlYXJseSBpbXB1bHNlIHRlcm1zLiIsIkQiOiJBbiBpbXB1bHNlIGNvbnRyaWJ1dGVzIGF0IG9uZSBzYW1wbGUgb25seTsgaXQgaXMgbm90IGEgc3RlcC4ifSwiaGludCI6IlxcKFxcZGVsdGFbbi1rXVxcKSBmaXJlcyBhdCBcXChuPWtcXCkuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6Indpa2lfcmVmZXJlbmNlX2Rpc2NyZXRlX2ltcHVsc2Vfc3RlbV9wbG90Iiwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJjb3JyZWN0X3Jlc3BvbnNlX2Zvcm0iLCJsYWJlbCI6IkNvcnJlY3Qgc3BlY2lhbC1jYXNlIGZvcm0gb2YgXFwoaFtuXVxcKSIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwM19xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiRm9yIHRoZSBvbmUtZmFjdG9yIHNwZWNpYWwgY2FzZSBcXChRW0VdPUVcXHdpZGVoYXR7UX1bRV1cXCksIHdoaWNoIGltcHVsc2UtcmVzcG9uc2UgZm9ybSBpcyBjb3JyZWN0PyIsIm9wdGlvbnMiOlsiQS4gXFwoaFtuXT1BXzBcXGRlbHRhW25dK3lfY1tuXXVbbl1cXCkiLCJCLiBcXChoW25dPUFfMFxcZGVsdGFbbl0rQV8xXFxkZWx0YVtuLTFdK3lfY1tuXXVbbl1cXCkiLCJDLiBcXChoW25dPUFfMVxcZGVsdGFbbi0xXVxcKSBvbmx5IiwiRC4gXFwoaFtuXT15X2Nbbl1cXGRlbHRhW25dXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiQmVjYXVzZSB0aGUgaW5wdXQgdmFuaXNoZXMgZm9yIFxcKG5cXGdlMlxcKSwgdGhlIHJlc3BvbnNlIG5lZWRzIGltcHVsc2UgdGVybXMgYXQgYm90aCBcXChuPTBcXCkgYW5kIFxcKG49MVxcKSwgcGx1cyB0aGUgemVyby1pbnB1dCBjb21wb25lbnQuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhpcyBpcyB0aGUgb3JkaW5hcnktbG9va2luZyBmb3JtIGFuZCBtaXNzZXMgdGhlIHJlcXVpcmVkIFxcKEFfMVxcZGVsdGFbbi0xXVxcKSB0ZXJtLiIsIkMiOiJUaGlzIG9taXRzIFxcKEFfMFxcZGVsdGFbbl1cXCkgYW5kIHRoZSBjb21wbGVtZW50YXJ5IHJlc3BvbnNlLiIsIkQiOiJUaGlzIGluY29ycmVjdGx5IG11bHRpcGxpZXMgdGhlIG5hdHVyYWwgcmVzcG9uc2UgYnkgYW4gaW1wdWxzZS4ifSwiaGludCI6Ik9uZSBmYWN0b3JlZCBcXChFXFwpIG1lYW5zIG9uZSBleHRyYSBzaGlmdGVkIGltcHVsc2UgdGVybS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDNfcTIiLCJ0eXBlIjoic2hvcnRfYW5zd2VyIiwic3RlbSI6IkEgc3R1ZGVudCB3cml0ZXMgXFwoaFtuXT1BXzBcXGRlbHRhW25dK3lfY1tuXXVbbl1cXCkgZm9yIHRoZSBjYXNlIFxcKGFfTj0wXFwpLiBFeHBsYWluIHByZWNpc2VseSB3aGF0IGlzIG1pc3NpbmcgYW5kIHdoeS4iLCJpZGVhbF9hbnN3ZXIiOiJUaGUgdGVybSBcXChBXzFcXGRlbHRhW24tMV1cXCkgaXMgbWlzc2luZy4gV2hlbiBcXChhX049MFxcKSwgdGhlIGVxdWF0aW9uIGJlY29tZXMgXFwoXFx3aWRlaGF0e1F9W0VdaFtuXT1QW0VdXFxkZWx0YVtuLTFdXFwpLCBzbyB0aGUgaW5wdXQgZG9lcyBub3QgdmFuaXNoIHVudGlsIFxcKG5cXGdlMlxcKS4gVGhlcmVmb3JlIGFuIGFkZGl0aW9uYWwgaXNvbGF0ZWQgaW1wdWxzZSB0ZXJtIGF0IFxcKG49MVxcKSBtdXN0IGJlIGluY2x1ZGVkLiIsImdyYWRpbmdfcnVicmljIjpbIk11c3QgaWRlbnRpZnkgdGhlIG1pc3NpbmcgdGVybSBhcyBcXChBXzFcXGRlbHRhW24tMV1cXCkiLCJNdXN0IGNvbm5lY3QgdGhlIG1pc3NpbmcgdGVybSB0byB0aGUgc2hpZnRlZCBpbXB1bHNlIFxcKFxcZGVsdGFbbi0xXVxcKSIsIk11c3QgbWVudGlvbiB0aGF0IHRoZSBpbnB1dCB2YW5pc2hlcyBmb3IgXFwoblxcZ2UyXFwpLCBub3QgXFwoblxcZ2UxXFwpIl0sImV4cGxhbmF0aW9uIjoiVGhpcyBjaGVja3Mgd2hldGhlciB0aGUgc3R1ZGVudCB1bmRlcnN0YW5kcyB0aGUgcmVhc29uIGZvciB0aGUgZXh0cmEgdGVybSByYXRoZXIgdGhhbiBtZW1vcml6aW5nIHRoZSBmaW5hbCBmb3JtLiIsImhpbnQiOiJBc2sgd2hpY2ggc2FtcGxlIGlzIGZvcmNlZCBieSBcXChcXGRlbHRhW24tMV1cXCkuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJtdWx0aXBsZV96ZXJvX2dlbmVyYWxpemF0aW9uIiwibGFiZWwiOiJNdWx0aXBsZSB6ZXJvIGNvZWZmaWNpZW50cyIsImltcG9ydGFuY2UiOiJtZWRpdW0iLCJleGFtX3dlaWdodCI6Im1lZGl1bSIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDRfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IklmIFxcKGFfTj1hX3tOLTF9PTBcXCksIHdoaWNoIGFkZGVkIGltcHVsc2UgdGVybXMgc2hvdWxkIGFwcGVhciBiZWZvcmUgXFwoeV9jW25ddVtuXVxcKT8iLCJvcHRpb25zIjpbIkEuIFxcKEFfMFxcZGVsdGFbbl1cXCkgb25seSIsIkIuIFxcKEFfMFxcZGVsdGFbbl0rQV8xXFxkZWx0YVtuLTFdXFwpIG9ubHkiLCJDLiBcXChBXzBcXGRlbHRhW25dK0FfMVxcZGVsdGFbbi0xXStBXzJcXGRlbHRhW24tMl1cXCkiLCJELiBcXChBXzJ1W24tMl1cXCkgb25seSJdLCJjb3JyZWN0X29wdGlvbiI6IkMiLCJleHBsYW5hdGlvbiI6IlR3byBjb25zZWN1dGl2ZSB6ZXJvLWNvZWZmaWNpZW50IGNvbmRpdGlvbnMgcmVxdWlyZSBpbXB1bHNlIHRlcm1zIGF0IFxcKG49MFxcKSwgXFwobj0xXFwpLCBhbmQgXFwobj0yXFwpIGJlZm9yZSB0aGUgbmF0dXJhbC1yZXNwb25zZSBwYXJ0LiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoaXMgaWdub3JlcyBhbGwgc2hpZnRlZCBpbXB1bHNlIHRlcm1zLiIsIkIiOiJUaGlzIG1hdGNoZXMgb25seSB0aGUgb25lLWZhY3RvciBzcGVjaWFsIGNhc2UsIG5vdCB0aGUgdHdvLXplcm8gY2FzZS4iLCJEIjoiQSBzaGlmdGVkIGltcHVsc2UgdGVybSBpcyBuZWVkZWQsIG5vdCBvbmx5IGEgc2hpZnRlZCBzdGVwLiJ9LCJoaW50IjoiTW9yZSBjb25zZWN1dGl2ZSB6ZXJvIGNvZWZmaWNpZW50cyBtZWFuIG1vcmUgZWFybHkgaXNvbGF0ZWQgaW1wdWxzZXMuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6ImxhdGV4X29yX3N0ZW1fcGxvdF9zaG93aW5nX2ltcHVsc2VzX2F0X24wX24xX24yIiwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfV19" style="display:none;"></div>%%KC_END%%
