%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6ImdlbmVyYXRlZF9pbWFnZSIsInJhdGlvbmFsZSI6IlRoaXMgc2VjdGlvbiBpcyBhbGdlYnJhLWhlYXZ5IGFuZCB0aGUgcHJvdmlkZWQgcGFnZXMgY29udGFpbiBubyB1c2FibGUgY3JvcHBlZCBmaWd1cmVzLiBBIGNsZWFuIGdlbmVyYXRlZCB0ZWFjaGluZyB2aXN1YWwgaXMgdGhlIGJlc3Qgd2F5IHRvIHNob3cgdGhlIHRocmVlLXN0ZXAgd29ya2Zsb3c6IGRpdmlkZSBieSB4LCBkbyBvcmRpbmFyeSBwYXJ0aWFsIGZyYWN0aW9ucywgdGhlbiBtdWx0aXBseSBieSB4IHRvIHJlY292ZXIgbW9kaWZpZWQgdGVybXMuIiwiY3JhbSI6IlVzZSB0aGUgdmlzdWFsIGFzIGEgZmFzdCBwcm9jZWR1cmUgbWFwIHNvIHN0dWRlbnRzIGNhbiByZWNvZ25pemUgdGhlIGV4YWN0IGV4YW0gcGF0dGVybiBhbmQgdGhlIG5leHQgYWxnZWJyYSBzdGVwIGltbWVkaWF0ZWx5LiIsInN0YW5kYXJkIjoiVXNlIHRoZSB2aXN1YWwgdG8gY2xhcmlmeSB3aHkgdGhlIGV4dHJhIHggaXMgaW50cm9kdWNlZCBhbmQgaG93IHRoZSBmaW5hbCB0ZXJtcyBiZWNvbWUgeC8oeCsyKSwgeC8oeCszKSwgYW5kIHgvKHgrMyleMi4iLCJ0b3Bfc2NvcmUiOiJVc2UgdGhlIHZpc3VhbCB0byBleHBvc2Ugd2hlcmUgc3R1ZGVudHMgbG9zZSBzaWducywgZm9yZ2V0IHRoZSByZXBlYXRlZC1mYWN0b3IgdGVybSwgb3IgZmFpbCB0byBtdWx0aXBseSBldmVyeSB0ZXJtIGJhY2sgYnkgeC4ifQ==" style="display:none;"></div>%%KC_END%%
# B.5–6 Modified Partial Fractions

> **Section Objective:** Learn how to expand a rational function into modified partial fractions — terms shaped like \(kx/(x-\lambda)^r\) — using a three-step divide-then-expand-then-multiply workflow.

---

This section modifies the ordinary partial-fraction method for inverse z-transform work. The key difference: instead of wanting plain constants over denominator factors, we want **x in every numerator**.

Consider the textbook example:

$$F(x) = \frac{5x^2 + 20x + 18}{(x+2)(x+3)^2}$$

The target form has terms like \(kx/(x+2)\) and \(kx/(x+3)^2\). To get there, the method is:

1. **Divide** \(F(x)\) by \(x\)
2. **Expand** \(F(x)/x\) using ordinary partial fractions
3. **Multiply** the entire result by \(x\) to recover the modified form

### EXAM IDEA

Whenever the target numerators must contain \(x\), use this divide-first strategy — it converts the problem into a standard decomposition you already know how to solve.

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="generate_image" data-teaching-role="concept_anchor" data-visual-use-b64="eyJjcmFtIjoiVXNlIGl0IGFzIGEgMy1zdGVwIGV4YW0gY2hlY2tsaXN0OiBkaXZpZGUgYnkgeCwgZXhwYW5kIG5vcm1hbGx5LCBtdWx0aXBseSBiYWNrIGJ5IHguIiwic3RhbmRhcmQiOiJVc2UgaXQgdG8gc2hvdyB0aGUgbG9naWMgcGF0aCBhbmQgd2h5IHRoZSBmaW5hbCBudW1lcmF0b3JzIGJlY29tZSB4LiIsInRvcF9zY29yZSI6IlVzZSBpdCB0byBoaWdobGlnaHQgcmVwZWF0ZWQtZmFjdG9yIGhhbmRsaW5nIGFuZCB0aGUgbXVsdGlwbHktYmFjayBzdGVwIHdoZXJlIG1pc3Rha2VzIGhhcHBlbi4ifQ==" style="display:none;"></div>%%KC_END%%
*🎨 Three-step workflow for modified partial fractions: divide \(F(x)\) by \(x\), perform an ordinary partial-fraction expansion, then multiply every term by \(x\) to recover the modified form with \(x\) in each numerator.*
![Illustration](/generated/gptimage2-1777215240854-5743.png)

## 1. The core trick: divide by x first

Ordinary partial fractions produce **constant** numerators — numbers like \(a_1\), \(a_2\), etc. But the inverse z-transform setup in this section requires **\(x\) in every numerator**. That mismatch is the whole problem.

The fix is elegant: divide \(F(x)\) by \(x\) first. This creates a new rational function \(F(x)/x\) whose denominator now includes a plain \(x\) factor, and whose numerators — after decomposition — will be ordinary constants. Once you have those constants, multiplying the entire expansion by \(x\) restores the \(x\) in every numerator automatically.

The setup for the textbook example is:

$$\frac{F(x)}{x} = \frac{a_1}{x} + \frac{a_2}{x+2} + \frac{a_3}{x+3} + \frac{a_4}{(x+3)^2}$$

Notice that the repeated factor \((x+3)^2\) forces **two separate terms**: one over \((x+3)\) and one over \((x+3)^2\).

### EXAM TIP

If a repeated linear factor \((x-\lambda)^r\) appears, you must list every power from \(1\) up to \(r\) as a separate term. Missing even one term makes the system of equations unsolvable.

$$\frac{F(x)}{x}=\frac{5x^2+20x+18}{x(x+2)(x+3)^2}=\frac{a_1}{x}+\frac{a_2}{x+2}+\frac{a_3}{x+3}+\frac{a_4}{(x+3)^2}$$
*This is now a standard ordinary partial-fraction setup with constant numerators \(a_1, a_2, a_3, a_4\). Note that the repeated factor \((x+3)^2\) requires two separate denominator terms — one for power 1 and one for power 2 — so that the decomposition can capture all degrees of freedom in the numerator.*

## 2. Representative example: finish the expansion

Solving the ordinary partial-fraction system for \(F(x)/x\) yields the following coefficients from the textbook:

$$a_1 = 1, \quad a_2 = 1, \quad a_3 = -2, \quad a_4 = 1$$

Plugging these in gives the ordinary expansion:

$$\frac{F(x)}{x} = \frac{1}{x} + \frac{1}{x+2} - \frac{2}{x+3} + \frac{1}{(x+3)^2}$$

Every numerator here is a plain constant — exactly what ordinary partial fractions produce. Now comes the **decisive final step**: multiply every single term by \(x\).

The first term becomes \(x \cdot (1/x) = 1\). Each remaining term gains \(x\) in its numerator, producing the modified form the section requires.

*Which step changes constant numerators into \(x\) numerators?* **Multiplying the completed expansion by \(x\).**

### COMMON MISTAKE

Forgetting to multiply the \(1/x\) term by \(x\) — it becomes the standalone constant \(1\), not \(x\) or \(1/x\).

$$a_1=1,\; a_2=1,\; a_3=-2,\; a_4=1$$
*These four values come from solving the ordinary partial-fraction decomposition of \(F(x)/x\) — for example, by multiplying both sides by each denominator factor in turn and evaluating at the corresponding root.*

$$\frac{F(x)}{x}=\frac{1}{x}+\frac{1}{x+2}-\frac{2}{x+3}+\frac{1}{(x+3)^2}$$
*This is the completed standard decomposition of \(F(x)/x\) with constant numerators — the intermediate result before the final step restores the modified \(x\) numerators.*

$$F(x)=1+\frac{x}{x+2}-\frac{2x}{x+3}+\frac{x}{(x+3)^2}$$
*Multiplying every term in the previous line by \(x\) gives the modified partial-fraction expansion required by this section. The standalone \(1\) arises from \(x \cdot (1/x) = 1\), while each remaining term gains \(x\) in its numerator, producing the target form \(kx/(x-\lambda)^r\).*

---
**📌 Key Takeaways**
- Modified partial fractions workflow: divide \(F(x)\) by \(x\), decompose ordinarily, then multiply every term back by \(x\).
- A repeated factor \((x-\lambda)^r\) requires one separate term for each power from \(1\) up to \(r\) — never skip a power.
- The term \(x \cdot (1/x)\) becomes the standalone constant \(1\) in the final modified expansion — not \(x\) or \(1/x\).

*In the next section we will apply these modified partial-fraction expansions directly to inverse z-transform problems, where the \(kx/(x-\lambda)^r\) form maps cleanly onto known z-transform pairs.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6Im1ldGhvZF9yZWNvZ25pdGlvbiIsImxhYmVsIjoiUmVjb2duaXppbmcgd2hlbiBtb2RpZmllZCBwYXJ0aWFsIGZyYWN0aW9ucyBhcmUgbmVlZGVkIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AxX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGF0IGlzIHRoZSBtYWluIHJlYXNvbiB0aGlzIHNlY3Rpb24gZGl2aWRlcyBcXChGKHgpXFwpIGJ5IFxcKHhcXCkgYmVmb3JlIGRvaW5nIHBhcnRpYWwgZnJhY3Rpb25zPyIsIm9wdGlvbnMiOlsiQS4gVG8gcmVkdWNlIHRoZSBwb2x5bm9taWFsIGRlZ3JlZSBieSBvbmUiLCJCLiBUbyB0dXJuIHRoZSBwcm9ibGVtIGludG8gYW4gb3JkaW5hcnkgcGFydGlhbC1mcmFjdGlvbiBleHBhbnNpb24gd2l0aCBjb25zdGFudCBudW1lcmF0b3JzIiwiQy4gVG8gcmVtb3ZlIHJlcGVhdGVkIGZhY3RvcnMgZnJvbSB0aGUgZGVub21pbmF0b3IiLCJELiBUbyBhdm9pZCB1c2luZyBjb2VmZmljaWVudHMgZW50aXJlbHkiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJEaXZpZGluZyBieSBcXCh4XFwpIGNvbnZlcnRzIHRoZSB0YXJnZXQgaW50byBhIHN0YW5kYXJkIHBhcnRpYWwtZnJhY3Rpb24gZm9ybSwgd2hlcmUgdGhlIG51bWVyYXRvcnMgYXJlIGNvbnN0YW50cy4gQWZ0ZXIgZGVjb21wb3NpdGlvbiwgbXVsdGlwbHlpbmcgYnkgXFwoeFxcKSByZXN0b3JlcyB0aGUgbW9kaWZpZWQgbnVtZXJhdG9ycy4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGF0IG1heSBoYXBwZW4gYWxnZWJyYWljYWxseSwgYnV0IGl0IGlzIG5vdCB0aGUgbWFpbiBwdXJwb3NlIG9mIHRoZSBtZXRob2QgaGVyZS4iLCJDIjoiRGl2aWRpbmcgYnkgXFwoeFxcKSBkb2VzIG5vdCByZW1vdmUgcmVwZWF0ZWQgZmFjdG9ycyBzdWNoIGFzIFxcKCh4KzMpXjJcXCkuIiwiRCI6IlRoZSBtZXRob2Qgc3RpbGwgdXNlcyBjb2VmZmljaWVudHMgXFwoYV8xLCBhXzIsIGFfM1xcKSwgYW5kIFxcKGFfNFxcKS4ifSwiaGludCI6IkFzayB3aGF0IG9yZGluYXJ5IHBhcnRpYWwgZnJhY3Rpb25zIHVzdWFsbHkgbG9vayBsaWtlIGluIHRoZSBudW1lcmF0b3JzLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMV9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiU3VwcG9zZSB0aGUgZmluYWwgdGFyZ2V0IGZvcm0gbXVzdCBjb250YWluIHRlcm1zIGxpa2UgXFwoa3gvKHgtXFxsYW1iZGEpXnJcXCkuIFdoaWNoIHdvcmtmbG93IGlzIGNvcnJlY3Q/Iiwib3B0aW9ucyI6WyJBLiBNdWx0aXBseSBieSBcXCh4XFwpIGZpcnN0LCBkZWNvbXBvc2UsIHRoZW4gZGl2aWRlIGJ5IFxcKHhcXCkiLCJCLiBEZWNvbXBvc2UgXFwoRih4KVxcKSBkaXJlY3RseSBhbmQgaWdub3JlIFxcKHhcXCkgaW4gdGhlIG51bWVyYXRvcnMiLCJDLiBEaXZpZGUgYnkgXFwoeFxcKSwgZG8gb3JkaW5hcnkgcGFydGlhbCBmcmFjdGlvbnMsIHRoZW4gbXVsdGlwbHkgdGhlIHJlc3VsdCBieSBcXCh4XFwpIiwiRC4gUmVwbGFjZSBldmVyeSBkZW5vbWluYXRvciBieSBcXCh4KHgtXFxsYW1iZGEpXnJcXCkiXSwiY29ycmVjdF9vcHRpb24iOiJDIiwiZXhwbGFuYXRpb24iOiJUaGlzIGlzIHRoZSB0ZXh0Ym9vayBtZXRob2QgZm9yIHByb2R1Y2luZyBtb2RpZmllZCBwYXJ0aWFsIGZyYWN0aW9ucyB3aXRoIFxcKHhcXCkgaW4gdGhlIG51bWVyYXRvcnMuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhpcyByZXZlcnNlcyB0aGUgbG9naWMgYW5kIGRvZXMgbm90IGNyZWF0ZSB0aGUgb3JkaW5hcnkgZm9ybSB5b3UgbmVlZC4iLCJCIjoiVGhhdCBtaXNzZXMgdGhlIGVudGlyZSBwb2ludCBvZiB0aGUgbW9kaWZpZWQgZm9ybS4iLCJEIjoiQ2hhbmdpbmcgZGVub21pbmF0b3JzIGxpa2UgdGhhdCBpcyBub3QgdGhlIG1ldGhvZC4ifSwiaGludCI6IlJlbWVtYmVyIHRoZSAzLXN0ZXAgcHJvY2VzcyBkaWFncmFtLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJnZW5lcmF0ZV9pbWFnZSIsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoicmVwZWF0ZWRfZmFjdG9yX3N0cnVjdHVyZSIsImxhYmVsIjoiU2V0dGluZyB1cCB0ZXJtcyBjb3JyZWN0bHkgd2l0aCBhIHJlcGVhdGVkIGZhY3RvciIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMl9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiRm9yIFxcKEYoeCkveCA9ICg1eF4yKzIweCsxOCkvKHgoeCsyKSh4KzMpXjIpXFwpLCB3aGljaCBwYXJ0aWFsLWZyYWN0aW9uIHNldHVwIGlzIGNvcnJlY3Q/Iiwib3B0aW9ucyI6WyJBLiBcXChhXzEveCArIGFfMi8oeCsyKSArIGFfMy8oeCszKV4yXFwpIiwiQi4gXFwoYV8xL3ggKyBhXzIvKHgrMikgKyBhXzMvKHgrMykgKyBhXzQvKHgrMyleMlxcKSIsIkMuIFxcKGFfMS94ICsgYV8yLyh4KzIpXjIgKyBhXzMvKHgrMyleMlxcKSIsIkQuIFxcKGFfMS94ICsgYV8yLyh4KzIpICsgYV8zLyh4KzMpICsgYV80LygoeCsyKSh4KzMpKVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IkEgcmVwZWF0ZWQgbGluZWFyIGZhY3RvciBvZiBwb3dlciAyIG5lZWRzIG9uZSB0ZXJtIGZvciBwb3dlciAxIGFuZCBvbmUgdGVybSBmb3IgcG93ZXIgMi4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJJdCBpcyBtaXNzaW5nIHRoZSBcXCgxLyh4KzMpXFwpIHRlcm0gcmVxdWlyZWQgYnkgdGhlIHJlcGVhdGVkIGZhY3Rvci4iLCJDIjoiVGhlcmUgaXMgbm8gcmVwZWF0ZWQgZmFjdG9yIFxcKCh4KzIpXjJcXCkgaW4gdGhlIGRlbm9taW5hdG9yLiIsIkQiOiJBIHByb2R1Y3QgZGVub21pbmF0b3IgdGVybSBpcyBub3QgdGhlIHN0YW5kYXJkIHNldHVwIGZvciBsaW5lYXItZmFjdG9yIGRlY29tcG9zaXRpb24uIn0sImhpbnQiOiJMaXN0IGV2ZXJ5IHBvd2VyIG9mIHRoZSByZXBlYXRlZCBmYWN0b3IgZnJvbSAxIHVwIHRvIDIuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AyX3EyIiwidHlwZSI6InNob3J0X2Fuc3dlciIsInN0ZW0iOiJXaHkgZG9lcyB0aGUgZmFjdG9yIFxcKCh4KzMpXjJcXCkgY3JlYXRlIHR3byBzZXBhcmF0ZSB0ZXJtcyBpbiB0aGUgZGVjb21wb3NpdGlvbiBvZiBcXChGKHgpL3hcXCk/IiwiaWRlYWxfYW5zd2VyIjoiQmVjYXVzZSBhIHJlcGVhdGVkIGxpbmVhciBmYWN0b3Igb2YgcG93ZXIgMiByZXF1aXJlcyBvbmUgdGVybSBvdmVyIFxcKCh4KzMpXFwpIGFuZCBhbm90aGVyIG92ZXIgXFwoKHgrMyleMlxcKS4gRWFjaCBwb3dlciB1cCB0byB0aGUgcmVwZXRpdGlvbiBtdXN0IGFwcGVhciBpbiB0aGUgcGFydGlhbC1mcmFjdGlvbiBzZXR1cC4iLCJncmFkaW5nX3J1YnJpYyI6WyJNdXN0IG1lbnRpb24gdGhhdCB0aGUgZmFjdG9yIGlzIHJlcGVhdGVkIiwiTXVzdCBzdGF0ZSBib3RoIHRlcm1zOiBcXCgxLyh4KzMpXFwpIGFuZCBcXCgxLyh4KzMpXjJcXCkiLCJNdXN0IGV4cGxhaW4gdGhhdCBhbGwgcG93ZXJzIHVwIHRvIHRoZSByZXBldGl0aW9uIGFyZSBpbmNsdWRlZCJdLCJleHBsYW5hdGlvbiI6IlRoaXMgY2hlY2tzIHdoZXRoZXIgdGhlIHN0dWRlbnQga25vd3MgdGhlIHNldHVwIHJ1bGUsIG5vdCBqdXN0IHRoZSBmaW5hbCBhbnN3ZXIuIiwiaGludCI6IlRoaW5rIG9mIHRoZSBzdGFuZGFyZCBydWxlIGZvciByZXBlYXRlZCBsaW5lYXIgZmFjdG9ycy4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19LHsiaWQiOiJmaW5hbF9tb2RpZmllZF9mb3JtIiwibGFiZWwiOiJSZWNvdmVyaW5nIHRoZSBmaW5hbCBtb2RpZmllZCBleHBhbnNpb24iLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDNfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkdpdmVuIFxcKEYoeCkveCA9IDEveCArIDEvKHgrMikgLSAyLyh4KzMpICsgMS8oeCszKV4yXFwpLCB3aGljaCBpcyB0aGUgY29ycmVjdCBmaW5hbCBleHByZXNzaW9uIGZvciBcXChGKHgpXFwpPyIsIm9wdGlvbnMiOlsiQS4gXFwoRih4KSA9IDEgKyB4Lyh4KzIpIC0gMngvKHgrMykgKyB4Lyh4KzMpXjJcXCkiLCJCLiBcXChGKHgpID0geCArIHgvKHgrMikgLSAyeC8oeCszKSArIHgvKHgrMyleMlxcKSIsIkMuIFxcKEYoeCkgPSAxL3ggKyB4Lyh4KzIpIC0gMngvKHgrMykgKyB4Lyh4KzMpXjJcXCkiLCJELiBcXChGKHgpID0gMSArIDEvKHgrMikgLSAyLyh4KzMpICsgMS8oeCszKV4yXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiTXVsdGlwbHkgZXZlcnkgdGVybSBieSBcXCh4XFwpLiBUaGUgZmlyc3QgdGVybSBiZWNvbWVzIFxcKHggXFxjZG90ICgxL3gpID0gMVxcKSwgYW5kIGVhY2ggcmVtYWluaW5nIHRlcm0gZ2FpbnMgXFwoeFxcKSBpbiB0aGUgbnVtZXJhdG9yLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IlRoZSBmaXJzdCB0ZXJtIHNob3VsZCBiZWNvbWUgXFwoMVxcKSwgbm90IFxcKHhcXCkuIiwiQyI6IlRoZSBmaXJzdCB0ZXJtIFxcKDEveFxcKSB3YXMgbm90IG11bHRpcGxpZWQgY29ycmVjdGx5IGJ5IFxcKHhcXCkuIiwiRCI6IlRoZSByZW1haW5pbmcgdGVybXMgd2VyZSBub3QgbXVsdGlwbGllZCBieSBcXCh4XFwpLiJ9LCJoaW50IjoiRGlzdHJpYnV0ZSBcXCh4XFwpIHRvIGV2ZXJ5IHRlcm0sIGluY2x1ZGluZyBcXCgxL3hcXCkuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AzX3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGljaCBtaXN0YWtlIGlzIG1vc3QgbGlrZWx5IHRvIHByb2R1Y2UgYSB3cm9uZyBmaW5hbCBtb2RpZmllZCBwYXJ0aWFsLWZyYWN0aW9uIGFuc3dlcj8iLCJvcHRpb25zIjpbIkEuIEZvcmdldHRpbmcgdG8gbXVsdGlwbHkgZXZlcnkgZGVjb21wb3NlZCB0ZXJtIGJ5IFxcKHhcXCkgYXQgdGhlIGVuZCIsIkIuIFdyaXRpbmcgdGhlIGRlbm9taW5hdG9yIGZhY3RvcnMgaW4gYXNjZW5kaW5nIG9yZGVyIiwiQy4gVXNpbmcgc3ltYm9scyBcXChhXzEsIGFfMiwgYV8zLCBhXzRcXCkgZm9yIHVua25vd24gY29uc3RhbnRzIiwiRC4gQ2hlY2tpbmcgcmVwZWF0ZWQgZmFjdG9ycyBiZWZvcmUgc29sdmluZyJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IlRoZSBrZXkgZmluYWwgc3RlcCBpcyBtdWx0aXBseWluZyB0aGUgZnVsbCBkZWNvbXBvc2l0aW9uIGJ5IFxcKHhcXCkuIE1pc3NpbmcgdGhhdCBzdGVwIGxlYXZlcyB0aGUgYW5zd2VyIGluIG9yZGluYXJ5LCBub3QgbW9kaWZpZWQsIHBhcnRpYWwtZnJhY3Rpb24gZm9ybS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJGYWN0b3Igb3JkZXIgZG9lcyBub3QgY2hhbmdlIHRoZSBtYXRoZW1hdGljcy4iLCJDIjoiVGhhdCBpcyBzdGFuZGFyZCBub3RhdGlvbiBhbmQgbm90IGFuIGVycm9yLiIsIkQiOiJUaGF0IGlzIGdvb2QgcHJhY3RpY2UsIG5vdCBhIG1pc3Rha2UuIn0sImhpbnQiOiJUaGluayBhYm91dCB0aGUgZXhhY3Qgc3RlcCB0aGF0IGNoYW5nZXMgY29uc3RhbnQgbnVtZXJhdG9ycyBpbnRvIFxcKHhcXCkgbnVtZXJhdG9ycy4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX1dfQ==" style="display:none;"></div>%%KC_END%%
