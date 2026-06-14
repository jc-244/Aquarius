%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6Indpa2lfcmVmZXJlbmNlIiwicmF0aW9uYWxlIjoiVGhpcyBzZWN0aW9uIGlzIG1vc3RseSBzeW1ib2xpYyBhbmQgY29kZS1zdHJ1Y3R1cmFsLCBzbyB0aGUgZm9ybXVsYSBhbmQgTUFUTEFCIGxvb3AgYXJlIHRoZSBtYWluIHRlYWNoaW5nIHN1cmZhY2VzLiBBIHN0YW5kYXJkIGRpZ2l0YWwtZmlsdGVyIGJsb2NrIGRpYWdyYW0gZnJvbSBXaWtpcGVkaWEgb3IgV2lraW1lZGlhIGNhbiBoZWxwIHN0dWRlbnRzIHNlZSB0aGUgc2VwYXJhdGlvbiBiZXR3ZWVuIGZlZWRmb3J3YXJkIGItY29lZmZpY2llbnRzIGFuZCBmZWVkYmFjayBhLWNvZWZmaWNpZW50cy4gSWYgbm8gY2xlYW4gcHVibGljIGRpYWdyYW0gaXMgYXZhaWxhYmxlLCB1c2UgYSBnZW5lcmF0ZWQgZmFsbGJhY2sgb25seSBmb3IgdGhlIHNpbmdsZSBwdXJwb3NlIG9mIHNob3dpbmcgdGhlIHJlY3Vyc2l2ZSBkYXRhIGRlcGVuZGVuY3kuIiwiY3JhbSI6IlVzZSB0aGUgdmlzdWFsIHRvIGluc3RhbnRseSBkaXN0aW5ndWlzaCBiIHRlcm1zIGZyb20gYSB0ZXJtcyBhbmQgcmVtZW1iZXIgdGhlIG1pbnVzIHNpZ24gb24gZmVlZGJhY2suIiwic3RhbmRhcmQiOiJVc2UgdGhlIHZpc3VhbCB0byBjb25uZWN0IHRoZSByZWN1cnNpb24gZm9ybXVsYSB0byB0aGUgTUFUTEFCIGxvb3BzIHRoYXQgYWNjdW11bGF0ZSBmZWVkZm9yd2FyZCBmaXJzdCBhbmQgZmVlZGJhY2sgc2Vjb25kLiIsInRvcF9zY29yZSI6IlVzZSB0aGUgdmlzdWFsIHRvIGNhdGNoIHN1YnRsZSBpbXBsZW1lbnRhdGlvbiB0cmFwczogbm9ybWFsaXphdGlvbiBieSBhKDEpLCByZXZlcnNlZCBpbml0aWFsLWNvbmRpdGlvbiBvcmRlciwgYW5kIHVzaW5nIHBhc3QgeSB2YWx1ZXMgb25seS4ifQ==" style="display:none;"></div>%%KC_END%%
# A Custom Filter Function

> **Section Objective:** This section shows how to write a MATLAB filter function from scratch using the recursive difference equation, without relying on `filtic` or the Signal Processing Toolbox.

---

## Concepts In This Section

- Recursive filter form
- Coefficient normalization
- Feedforward terms
- Feedback terms
- Initial conditions with `flipud`
- Final output trimming

## 1. The Recursion Is the Custom Filter

The custom filter function works by solving the difference equation for the **current output sample** \(y[n]\) one step at a time. This is a **sample-by-sample recipe**: at each time index \(n\), the code computes one new output value using the present and past input samples and the past output samples already stored.

For example, if the formula needs \(y[n-1]\), the code must have already stored the previous output before moving to the next sample.

### KEY INSIGHT

This is **not** a vectorized one-shot operation. It is a loop that builds \(y\) one sample at a time, in order, so that each new output is available for the next iteration.

#### Warning

You cannot compute all outputs simultaneously — each \(y[n]\) depends on \(y[n-1]\), \(y[n-2]\), etc., which must already exist.

## 2. Normalize before you recurse

This is the **core formula** of the section — the recursive filter form after the equation has been solved for \(y[n]\) with leading coefficient \(a_0 = 1\).

- \(b_k\): feedforward coefficients — each multiplies a **present or past input** sample \(x[n-k]\)
- \(a_k\): feedback coefficients — each multiplies a **past output** sample \(y[n-k]\); the sum starts at \(k=1\), so \(y[n]\) itself never appears on the right side
- \(N\): filter order
- \(k\): delay index

**When to use it:** Any exam or MATLAB problem asking for a custom filter, a recursive implementation, or output samples with initial conditions.

**Common misuse:** Including an \(a_0 y[n]\) term on the right side. After normalization the equation is already solved for \(y[n]\), so \(a_0 = 1\) and \(y[n]\) belongs only on the left.

$$y[n] = \sum_{k=0}^{N}b_k\, x[n-k] \;-\; \sum_{k=1}^{N}a_k\, y[n-k]$$


*🎨 Notice: b-coefficients multiply delayed input samples (feedforward path, top); a-coefficients multiply delayed output samples (feedback path, bottom) and are subtracted at the adder.*
![Illustration](/generated/gptimage2-1781408825021-9691.png)

## 3. How CH3MP1 handles initial conditions

The recursive formula assumes the leading feedback coefficient \(a_0 = 1\). In practice, MATLAB receives coefficient vectors where \(a(1)\) may not equal 1. The code lines:

```
b = b / a(1);
a = a / a(1);
```

divide **every** coefficient in both vectors by \(a(1)\) before the loop begins.

**Minimal example:** If \(a(1) = 2\), then every \(b_k\) and \(a_k\) is halved. A coefficient \(b_0 = 4\) becomes \(\widetilde{b}_0 = 2\); a coefficient \(a_1 = -1\) becomes \(\widetilde{a}_1 = -0.5\).

### EXAM TRIGGER

Whenever a denominator or feedback coefficient list begins with a value **other than 1**, normalize first — both vectors, every entry.

$$\widetilde{b}_k = \frac{b_k}{a_0}$$
*Each **feedforward** coefficient is rescaled by dividing by the original leading feedback coefficient \(a_0\).

- \(b_k\): original feedforward coefficient from the input vector
- \(\widetilde{b}_k\): normalized coefficient used in the recursion
- \(a_0\): the leading entry of the feedback coefficient vector (\(a(1)\) in MATLAB)

**When to use it:** Before applying the recursive filter formula whenever \(a_0 \neq 1\).

**Common misuse:** Dividing only \(b_0\) instead of every \(b_k\). The entire vector must be rescaled uniformly.*

$$\widetilde{a}_k = \frac{a_k}{a_0}$$
*Each **feedback** coefficient is also divided by \(a_0\) so the implemented equation has a leading coefficient of 1.

- \(a_k\): original feedback coefficient
- \(\widetilde{a}_k\): normalized feedback coefficient; note that \(\widetilde{a}_0 = a_0/a_0 = 1\)

**Use together with** \(\widetilde{b}_k = b_k/a_0\). Both normalizations must be applied in the same step.

**Common misuse:** Normalizing \(b\) but forgetting to normalize \(a\). This changes the pole locations and produces a completely different system response.*

## 3. How CH3MP1 Handles Initial Conditions

The function receives the initial-condition vector `yi` as a column \([y[-1];\; y[-2];\; \ldots]\) — most-recent sample first.

**Step 1 — Reverse with `flipud`:** `flipud(yi)` reorders the vector to \([y[-N];\; \ldots;\; y[-1]]\) — oldest sample first. This reversed prefix is prepended to the output array `y` before the loop starts.

**Why the reversal matters:** Inside the loop, the code accesses past outputs by indexing backward from the current position. After prepending the flipped prefix, the index \(y(n - n_a)\) naturally reaches the correct historical sample.

**Concrete example:** If `yi = [y[-1]; y[-2]]`, then `flipud(yi) = [y[-2]; y[-1]]`. The stored array becomes `[y[-2], y[-1], y[0], y[1], ...]`, so subtracting the right offset always lands on the intended past output.

The input `x` is zero-padded to the same extended length so the feedforward indexing stays aligned.

**Final trimming:** The last line `y = y(length(yi)+1:end)` strips the prepended initial-condition prefix, returning a `y` vector whose length matches the input `x`.

---
**📌 Key Takeaways**
- Core recursion: \(y[n] = \sum_{k=0}^{N}b_k x[n-k] - \sum_{k=1}^{N}a_k y[n-k]\) — feedforward b terms minus feedback a terms.
- Normalize first: \(\widetilde{b}_k = b_k/a_0\) and \(\widetilde{a}_k = a_k/a_0\) — divide every coefficient when \(a_0 \neq 1\).
- `flipud` reverses `yi` so past outputs line up correctly with recursive indexing inside the loop.
- Final trim `y = y(length(yi)+1:end)` strips the initial-condition prefix so the returned \(y\) matches the length of input \(x\).

*Next, use this recursion to verify impulse, zero-state, zero-input, and total responses.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InJlY3Vyc2l2ZV9maWx0ZXJfZm9ybXVsYSIsImxhYmVsIjoiUmVjdXJzaXZlIGZpbHRlciBmb3JtIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoicmVjdXJzaXZlX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJJbiB0aGUgY3VzdG9tIGZpbHRlciByZWN1cnNpb24sIHdoaWNoIHNhbXBsZXMgYXJlIGFsbG93ZWQgdG8gYXBwZWFyIG9uIHRoZSByaWdodCBzaWRlIHdoZW4gY29tcHV0aW5nIFxcKHlbbl1cXCk/Iiwib3B0aW9ucyI6WyJBLiBQcmVzZW50IGFuZCBwYXN0IFxcKHhcXCkgc2FtcGxlcywgcGx1cyBwYXN0IFxcKHlcXCkgc2FtcGxlcyIsIkIuIEZ1dHVyZSBcXCh4XFwpIHNhbXBsZXMsIHBsdXMgcHJlc2VudCBcXCh5W25dXFwpIiwiQy4gT25seSBwcmVzZW50IFxcKHhbbl1cXCkiLCJELiBQcmVzZW50IFxcKHhbbl1cXCksIHByZXNlbnQgXFwoeVtuXVxcKSwgYW5kIGZ1dHVyZSBcXCh5XFwpIHNhbXBsZXMiXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJUaGUgcmVjdXJzaW9uIGNvbXB1dGVzIFxcKHlbbl1cXCkgZnJvbSBcXCh4W24ta11cXCkgYW5kIFxcKHlbbi1rXVxcKS4gVGhlIGZlZWRiYWNrIHN1bSBzdGFydHMgYXQgXFwoaz0xXFwpLCBzbyBpdCB1c2VzIHBhc3Qgb3V0cHV0IHNhbXBsZXMgb25seS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJUaGUgZm9ybXVsYSBkb2VzIG5vdCB1c2UgZnV0dXJlIGlucHV0IHNhbXBsZXMgb3IgXFwoeVtuXVxcKSBvbiB0aGUgcmlnaHQgc2lkZSBhZnRlciBub3JtYWxpemF0aW9uLiIsIkMiOiJUaGF0IHdvdWxkIGJlIGEgbWVtb3J5bGVzcyBzeXN0ZW0sIG5vdCB0aGUgcmVjdXJzaXZlIGZpbHRlciBzaG93biBoZXJlLiIsIkQiOiJVc2luZyBwcmVzZW50IFxcKHlbbl1cXCkgb3IgZnV0dXJlIFxcKHlcXCkgc2FtcGxlcyB3b3VsZCBtYWtlIHRoZSBpbXBsZW1lbnRhdGlvbiBjaXJjdWxhciBvciBub25jYXVzYWwuIn0sImhpbnQiOiJMb29rIGF0IHRoZSBkZWxheSB0ZXJtczogXFwobi1rXFwpLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6InJlY3Vyc2l2ZV9xMl92aXN1YWwiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkEgZGlhZ3JhbSBzaG93cyBiLWNvZWZmaWNpZW50cyBjb25uZWN0ZWQgdG8gZGVsYXllZCBcXCh4XFwpIHNhbXBsZXMgYW5kIGEtY29lZmZpY2llbnRzIGNvbm5lY3RlZCB0byBkZWxheWVkIFxcKHlcXCkgc2FtcGxlcy4gV2hpY2ggc3RhdGVtZW50IG1hdGNoZXMgdGhlIHRleHRib29rIHJlY3Vyc2lvbj8iLCJvcHRpb25zIjpbIkEuIGIgdGVybXMgYXJlIGZlZWRmb3J3YXJkIHRlcm1zOyBhIHRlcm1zIGFyZSBmZWVkYmFjayB0ZXJtcyBzdWJ0cmFjdGVkIGZyb20gdGhlIGlucHV0IGNvbnRyaWJ1dGlvbi4iLCJCLiBhIHRlcm1zIGFyZSBmZWVkZm9yd2FyZCB0ZXJtczsgYiB0ZXJtcyBhcmUgZmVlZGJhY2sgdGVybXMgc3VidHJhY3RlZCBmcm9tIHRoZSBvdXRwdXQuIiwiQy4gYiBhbmQgYSB0ZXJtcyBib3RoIG11bHRpcGx5IG9ubHkgaW5wdXQgc2FtcGxlcy4iLCJELiBiIGFuZCBhIHRlcm1zIGJvdGggbXVsdGlwbHkgb25seSBvdXRwdXQgc2FtcGxlcy4iXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJUaGUgZmlyc3Qgc3VtbWF0aW9uIHVzZXMgXFwoYl9rIHhbbi1rXVxcKS4gVGhlIHNlY29uZCBzdW1tYXRpb24gdXNlcyBcXChhX2sgeVtuLWtdXFwpIGFuZCBpcyBzdWJ0cmFjdGVkLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IlRoaXMgcmV2ZXJzZXMgdGhlIHJvbGVzIG9mIHRoZSBjb2VmZmljaWVudCB2ZWN0b3JzLiIsIkMiOiJUaGUgYSB0ZXJtcyBtdWx0aXBseSBwYXN0IG91dHB1dCBzYW1wbGVzLCBub3QgaW5wdXQgc2FtcGxlcy4iLCJEIjoiVGhlIGIgdGVybXMgbXVsdGlwbHkgaW5wdXQgc2FtcGxlcywgbm90IG91dHB1dCBzYW1wbGVzLiJ9LCJoaW50IjoiYiBiZWxvbmdzIHdpdGggeDsgYSBiZWxvbmdzIHdpdGggeS4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoid2lraV9yZWZlcmVuY2VfZmlsdGVyX2Jsb2NrX2RpYWdyYW0iLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6ImZlZWRiYWNrX3NpZ25fdHJhcCIsImxhYmVsIjoiTWludXMgc2lnbiBvbiBmZWVkYmFjayB0ZXJtcyIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6InNpZ25fcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkFmdGVyIG5vcm1hbGl6YXRpb24sIHN1cHBvc2UgXFwoYiA9IFsxLFxcOyAyXVxcKSBhbmQgXFwoYSA9IFsxLFxcOyAtMC41XVxcKS4gV2hpY2ggcmVjdXJzaW9uIGlzIGNvcnJlY3Q/Iiwib3B0aW9ucyI6WyJBLiBcXCh5W25dID0geFtuXSArIDJ4W24tMV0gKyAwLjV5W24tMV1cXCkiLCJCLiBcXCh5W25dID0geFtuXSArIDJ4W24tMV0gLSAwLjV5W24tMV1cXCkiLCJDLiBcXCh5W25dID0geFtuXSAtIDJ4W24tMV0gKyAwLjV5W24tMV1cXCkiLCJELiBcXCh5W25dID0geFtuXSArIDJ4W24tMV0gLSB5W24tMV1cXCkiXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJUaGUgZmVlZGJhY2sgcGFydCBpcyBcXCgtYV8xIHlbbi0xXVxcKS4gU2luY2UgXFwoYV8xID0gLTAuNVxcKSwgc3VidHJhY3RpbmcgaXQgZ2l2ZXMgXFwoLSgtMC41KXlbbi0xXSA9ICswLjV5W24tMV1cXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiVGhpcyBmb3JnZXRzIHRoYXQgdGhlIGZvcm11bGEgc3VidHJhY3RzIFxcKGFfMVxcKSwgYW5kIFxcKGFfMVxcKSBpcyBhbHJlYWR5IG5lZ2F0aXZlLCBzbyB0aGUgcmVzdWx0IHNob3VsZCBiZSBwb3NpdGl2ZS4iLCJDIjoiVGhlIFxcKGJfMVxcKSB0ZXJtIGlzIHBvc2l0aXZlIDIsIHNvIFxcKHhbbi0xXVxcKSBzaG91bGQgbm90IGJlIHN1YnRyYWN0ZWQuIiwiRCI6IlRoZSBjb2VmZmljaWVudCBvbiBcXCh5W24tMV1cXCkgc2hvdWxkIGJlIFxcKCswLjVcXCksIG5vdCBcXCgtMVxcKS4ifSwiaGludCI6IkNhcmVmdWxseSBhcHBseSB0aGUgbWludXMgc2lnbiBiZWZvcmUgdGhlIGEtc3VtOiBcXCgtYV8xIHlbbi0xXVxcKSB3aXRoIFxcKGFfMSA9IC0wLjVcXCkuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJjb2VmZmljaWVudF9ub3JtYWxpemF0aW9uIiwibGFiZWwiOiJDb2VmZmljaWVudCBub3JtYWxpemF0aW9uIGJ5IGEoMSkiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoibWVkaXVtIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6Im5vcm1fcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkEgTUFUTEFCIHByb2JsZW0gZ2l2ZXMgXFwoYSA9IFsyLFxcOyAtMV1cXCkgYW5kIFxcKGIgPSBbNCxcXDsgNl1cXCkuIEJlZm9yZSBhcHBseWluZyB0aGUgY3VzdG9tIHJlY3Vyc2lvbiwgd2hhdCBzaG91bGQgdGhlIG5vcm1hbGl6ZWQgdmVjdG9ycyBiZT8iLCJvcHRpb25zIjpbIkEuIFxcKGEgPSBbMSxcXDsgLTAuNV0sXFxxdWFkIGIgPSBbMixcXDsgM11cXCkiLCJCLiBcXChhID0gWzIsXFw7IC0xXSxcXHF1YWQgYiA9IFsyLFxcOyAzXVxcKSIsIkMuIFxcKGEgPSBbMSxcXDsgLTFdLFxccXVhZCBiID0gWzQsXFw7IDZdXFwpIiwiRC4gXFwoYSA9IFswLjUsXFw7IC0xXSxcXHF1YWQgYiA9IFs0LFxcOyA2XVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IkRpdmlkZSBldmVyeSBlbnRyeSBvZiBib3RoIFxcKGFcXCkgYW5kIFxcKGJcXCkgYnkgXFwoYSgxKSA9IDJcXCkuIFRoaXMgbWFrZXMgdGhlIGxlYWRpbmcgZmVlZGJhY2sgY29lZmZpY2llbnQgZXF1YWwgdG8gMS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJUaGlzIG5vcm1hbGl6ZXMgXFwoYlxcKSBidXQgbGVhdmVzIFxcKGFcXCkgdW5jaGFuZ2VkLiIsIkMiOiJUaGlzIGNoYW5nZXMgb25seSBcXChhXzBcXCkgYW5kIGRvZXMgbm90IGRpdmlkZSBldmVyeSBjb2VmZmljaWVudCBjb25zaXN0ZW50bHkuIiwiRCI6IlRoaXMgZGl2aWRlcyBcXChhXzBcXCkgaW5jb3JyZWN0bHkgYW5kIGxlYXZlcyBcXChiXFwpIHVuY2hhbmdlZC4ifSwiaGludCI6IlRoZSBjb2RlIGRpdmlkZXMgdGhlIHdob2xlIHZlY3Rvciwgbm90IGp1c3Qgb25lIGVudHJ5OiBgYiA9IGIvYSgxKTsgYSA9IGEvYSgxKTtgIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoibm9ybV9xMl9zaG9ydCIsInR5cGUiOiJzaG9ydF9hbnN3ZXIiLCJzdGVtIjoiV2h5IGlzIGl0IHdyb25nIHRvIHVzZSB0aGUgcmVjdXJzaW9uIGZvcm11bGEgZGlyZWN0bHkgd2hlbiBcXChhKDEpXFwpIGlzIG5vdCBlcXVhbCB0byAxPyIsImlkZWFsX2Fuc3dlciI6IlRoZSByZWN1cnNpb24gZm9ybXVsYSBhc3N1bWVzIHRoZSBlcXVhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHNvbHZlZCBmb3IgXFwoeVtuXVxcKSB3aXRoIFxcKGFfMCA9IDFcXCkuIElmIFxcKGEoMSlcXCkgaXMgbm90IDEsIGFsbCBjb2VmZmljaWVudHMgbXVzdCBiZSBkaXZpZGVkIGJ5IFxcKGFfMFxcKSBmaXJzdDsgb3RoZXJ3aXNlIHRoZSBjb21wdXRlZCBvdXRwdXQgaXMgc2NhbGVkIGluY29ycmVjdGx5IGFuZCByZXByZXNlbnRzIGEgZGlmZmVyZW50IHN5c3RlbS4iLCJncmFkaW5nX3J1YnJpYyI6WyJNdXN0IHN0YXRlIHRoYXQgdGhlIGZvcm11bGEgYXNzdW1lcyBcXChhXzAgPSAxXFwpIiwiTXVzdCBtZW50aW9uIGRpdmlkaW5nIGJvdGggXFwoYVxcKSBhbmQgXFwoYlxcKSBjb2VmZmljaWVudHMgYnkgXFwoYV8wXFwpIiwiTXVzdCBleHBsYWluIHRoYXQgZmFpbGluZyB0byBub3JtYWxpemUgY2hhbmdlcyB0aGUgY29tcHV0ZWQgc3lzdGVtIHJlc3BvbnNlIl0sImV4cGxhbmF0aW9uIjoiVGhpcyBjaGVja3Mgd2hldGhlciB0aGUgc3R1ZGVudCB1bmRlcnN0YW5kcyBub3JtYWxpemF0aW9uIGNvbmNlcHR1YWxseSBpbnN0ZWFkIG9mIGp1c3QgY29weWluZyBNQVRMQUIgc3ludGF4LiIsImhpbnQiOiJBc2sgd2hhdCBjb2VmZmljaWVudCBpcyBtdWx0aXBseWluZyBcXCh5W25dXFwpIGJlZm9yZSBub3JtYWxpemF0aW9uLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoiaW5pdGlhbF9jb25kaXRpb25zX2ZsaXB1ZCIsImxhYmVsIjoiSW5pdGlhbCBjb25kaXRpb25zIGFuZCBmbGlwdWQiLCJpbXBvcnRhbmNlIjoibWVkaXVtIiwiZXhhbV93ZWlnaHQiOiJtZWRpdW0iLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoiaWNfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IlRoZSBmdW5jdGlvbiByZWNlaXZlcyBgeWkgPSBbeVstMV07IHlbLTJdXWAuIFdoeSBkb2VzIGl0IGFwcGx5IGBmbGlwdWRgIGJlZm9yZSBwcmVpbml0aWFsaXppbmcgXFwoeVxcKT8iLCJvcHRpb25zIjpbIkEuIFNvIHRoZSBzdG9yZWQgcHJlZml4IGJlY29tZXMgXFwoW3lbLTJdO1xcOyB5Wy0xXV1cXCksIG1ha2luZyByZWN1cnNpdmUgaW5kZXhpbmcgcmVhY2ggdGhlIGNvcnJlY3QgcGFzdCBzYW1wbGVzIiwiQi4gU28gdGhlIG91dHB1dCBcXCh5XFwpIGlzIHJldHVybmVkIGluIHJldmVyc2UgdGltZSBvcmRlciIsIkMuIFNvIHRoZSBpbnB1dCBcXCh4XFwpIGlzIHJldmVyc2VkIGJlZm9yZSBmaWx0ZXJpbmciLCJELiBTbyBhbGwgaW5pdGlhbCBjb25kaXRpb25zIGFyZSBmb3JjZWQgdG8gemVybyJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6ImBmbGlwdWRgIHJldmVyc2VzIHRoZSBjb2x1bW4gdmVjdG9yIHNvIHRoZSBpbml0aWFsLWNvbmRpdGlvbiBzYW1wbGVzIGxpbmUgdXAgY29ycmVjdGx5IGJlZm9yZSB0aGUgZmlyc3QgY29tcHV0ZWQgb3V0cHV0IHNhbXBsZS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJUaGUgZmluYWwgb3V0cHV0IGlzIG5vdCByZXR1cm5lZCBpbiByZXZlcnNlIG9yZGVyLiIsIkMiOiJgZmxpcHVkYCBpcyBhcHBsaWVkIHRvIGB5aWAsIG5vdCBgeGAuIiwiRCI6IlRoZSBjb2RlIHByZXNlcnZlcyB0aGUgZ2l2ZW4gaW5pdGlhbCBjb25kaXRpb25zOyBpdCBkb2VzIG5vdCB6ZXJvIHRoZW0uIn0sImhpbnQiOiJUaGluayBhYm91dCB3aGljaCBzdG9yZWQgXFwoeVxcKSB2YWx1ZSBzaG91bGQgYmUgY2xvc2VzdCB0byBcXCh5WzBdXFwpLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJzaW1wbGVfdmVjdG9yX29yZGVyaW5nX2RpYWdyYW0iLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19LHsiaWQiOiJmaW5hbF9vdXRwdXRfdHJpbW1pbmciLCJsYWJlbCI6IlN0cmlwcGluZyBvZmYgaW5pdGlhbC1jb25kaXRpb24gc2FtcGxlcyIsImltcG9ydGFuY2UiOiJtZWRpdW0iLCJleGFtX3dlaWdodCI6ImxvdyIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJ0cmltX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaHkgZG9lcyBDSDNNUDEgZXhlY3V0ZSBgeSA9IHkobGVuZ3RoKHlpKSsxOmVuZClgIGF0IHRoZSBlbmQ/Iiwib3B0aW9ucyI6WyJBLiBUbyByZW1vdmUgdGhlIHByZXBlbmRlZCBpbml0aWFsLWNvbmRpdGlvbiBzYW1wbGVzIGFuZCByZXR1cm4gb25seSB0aGUgb3V0cHV0IGNvcnJlc3BvbmRpbmcgdG8gXFwoeFxcKSIsIkIuIFRvIGRlbGV0ZSBhbGwgZmVlZGJhY2sgdGVybXMgZnJvbSB0aGUgZmluYWwgb3V0cHV0IiwiQy4gVG8gbm9ybWFsaXplIHRoZSBjb2VmZmljaWVudCB2ZWN0b3JzIiwiRC4gVG8gbWFrZSBcXCh4XFwpIGFuZCBcXCh5XFwpIGJvdGggemVybyBiZWZvcmUgZmlsdGVyaW5nIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiVGhlIGZ1bmN0aW9uIHRlbXBvcmFyaWx5IHN0b3JlcyBpbml0aWFsIGNvbmRpdGlvbnMgYmVmb3JlIHRoZSBjb21wdXRlZCBvdXRwdXQuIFRoZSBmaW5hbCBsaW5lIHN0cmlwcyB0aGF0IHByZWZpeCBvZmYgc28gdGhlIHJldHVybmVkIFxcKHlcXCkgaGFzIHRoZSBzYW1lIGxlbmd0aCBhcyB0aGUgaW5wdXQgXFwoeFxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJGZWVkYmFjayB0ZXJtcyBhZmZlY3QgdGhlIGNvbXB1dGVkIHNhbXBsZXM7IHRoZXkgYXJlIG5vdCByZW1vdmVkIGFmdGVyd2FyZC4iLCJDIjoiTm9ybWFsaXphdGlvbiBoYXBwZW5zIGVhcmxpZXIgd2l0aCBgYiA9IGIvYSgxKWAgYW5kIGBhID0gYS9hKDEpYC4iLCJEIjoiVGhlIG91dHB1dCBpcyB0cmltbWVkIGFmdGVyIGZpbHRlcmluZywgbm90IHJlc2V0IGJlZm9yZSBmaWx0ZXJpbmcuIn0sImhpbnQiOiJUaGUgcmV0dXJuZWQgXFwoeVxcKSBzaG91bGQgbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgaW5wdXQgZGF0YSB2ZWN0b3IgXFwoeFxcKS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19XX0=" style="display:none;"></div>%%KC_END%%
