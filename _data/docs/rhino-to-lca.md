---
title: Rhino to LCA
order: 0.1
is_subcarticle: true
---

In this tutorial we will have a look at how to link **Rhino 3D** and **OneClickLCA** to estimate carbon footprint of buildings and components. This information later on can be added on the **Creatomus Configurator** online platform.

<div class="mx-auto mb-16 relative embedded-video"><iframe src="https://player.vimeo.com/video/521934393?color=059669&title=1&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="allowfullscreen" title="Life cycle analysis of Rhinoceros 3D model" class="xs:rounded-lg xs:shadow-lg absolute w-full h-full"></iframe></div>

> made by NOMAD Architects

<a rel="noopener" target="_blank" href="https://res.cloudinary.com/patternbuildings/raw/upload/v1615458751/tutorials/Rhino_to_LCA_knzdeu.gh"><button class="btn btn-fill bg-blue-600">Download Grasshopper base file (GH, 28KB)</button></a>

<a rel="noopener" target="_blank" href="https://drive.google.com/file/d/1ycA-LJb69V-IYD8jUA2-3_hQ__CPdsF3/view?usp=sharing"><button class="btn btn-outline text-blue-600 mb-8">Download example files (ZIP, 11.4MB)</button></a>

---

The GH tool developed in this work allows to create and extract information from a Rhino 3D model in a very simplified form of a BIM model where additionally to 3D geometry, information regarding the building and its components is stored (Autodesk, 2018, 3). The tool gathers volumetric and area information of dierent material layers and adds the information regarding building material in form of an IFC name, building element location according to class and additional user specific information. The gathered information is automatically saved into an Excel file which allows it to be integrated in OneClickLCA for the life cycle assessment.

The results can be inserted in the Configurator by Creatomus Solutions OÜ to showcase the environmental impact of architectural choices in realtime to the user.The GH file is solely based on the basic version of GH and open source plugins. It consists of three main parts: a base component for inserting material information which can be duplicated, a simple table head structure for improved orientation and the extraction component which transfers the data from GH to Excel.

<figure>
<figcaption>Representation of an LCA workflow between Rhino 3D and Creatomus Configurator</figcaption>
<img src="https://res.cloudinary.com/patternbuildings/image/upload/v1615480943/tutorials/fig02_msv5vd.png" alt="Representation of an LCA workflow between Rhino 3D and Creatomus Configurator">
</figure>

<figure>
<figcaption>Main parts of the Grasshopper file</figcaption>
<img src="https://res.cloudinary.com/patternbuildings/image/upload/v1615480944/tutorials/fig06_gkbvgl.png" alt="Main parts of the Grasshopper file">
</figure>

In order to add materials for later LCA assessment the Base Component has to be copied and dragged beneath the right material classification written in the table heads which include all major material classifications used in the platform OneClickLCA (foundation, external wall, internal wall, etc.). By inserting a layer name from Rhino into the panel "Copy layer name" the included geometry is loaded into GH with the component "Layer Reference". The layer name has to be unique in order to work for the GH-file and all included geometries have to be either surfaces or closed volumes. The volume and area of the geometry is calculated in GH and automatically sorted. If surfaces are loaded, the result for its volume is invalid and can be removed with the component "Clean Tree" to only receive the nformation
regarding the area. If volumes are inserted, results for volume and area are calculated. With "List Item" only the first line of result is
retrieved. If two results exist the volumetric data is retrieved as it stands in the first line. If surfaces are uploaded and the invalid result for volume is removed, as described earlier, the result for surface area will move in the first line of results and is retrieved.

<figure>
<figcaption>Base Component for material information</figcaption>
<img src="https://res.cloudinary.com/patternbuildings/image/upload/v1615480944/tutorials/fig04_gmu3ka.png" alt="Base Component for material information">
</figure>

<figure class="mt-8">
<figcaption>Automatic detection of volumes or surfaces</figcaption>
<img src="https://res.cloudinary.com/patternbuildings/image/upload/v1615480943/tutorials/fig05_s5fer7.png" alt="Automatic detection of volumes or surfaces">
</figure>

In the value list "Class" the user can choose from predefined material classification (should be the same as in table heads) to specify the IFC class which will be used for this material in OneClickLCA. In the panel "IFC material" can be added a material label which will be used to select possible materials from the OneClickLCA material database later on. Use specific material labels if known (eg. Concrete – Insitu Nwt – C20/25) or general labels (eg. Concrete) if the exact material should be chosen in OneClickLCA. The second value list is used to define the quantity type for OneClickLCA. "M2" for square meter and "M3" for cubic meter is used. The selection has to be in accordance with the uploaded geometry. The last panel "Comment" has the purpose to help the user later on in OneClickLCA and give some additional input like material location, intended product and material type, etc. All filled information from the Base Components is joined into a single data list in the "Extract to Excel" component. The "Excel Write" component from the GH-plugin Lunchbox is used to export the data to Excel.

Further on, the resulting Excel file can be imported in OneClickLCA for estimation of the carbon footprint or other environmental impact of the uploaded buildings or building components. One option is to use the results to create a component library which includes carbon footprint data for a square meter or number of dierent building components can be created (eg. carbon footprint for 1 m^2 of exterior wall, floor plate, foundation or carbon footprint per modular building component, etc.), which can be used later on for simplified emission assessment in Rhino. Otherwise, the GH tool can be used to assess the emissions of specific architectural options, which can be added on the Configurator by Creatomus Solutions OÜ and showcased live to the user, assisting in the decision making.

<figure>
<figcaption>Extract to Excel component</figcaption>
<img src="https://res.cloudinary.com/patternbuildings/image/upload/v1615480944/tutorials/fig06_gkbvgl.png" alt="Extract to Excel component">
</figure>

---

### Learn more

Read our report on development of a Grasshopper script which enables carbon footprint assesment in the early stages of architectural planning

<a rel="noopener" target="_blank" href="https://res.cloudinary.com/patternbuildings/image/upload/v1615456641/tutorials/paper_on_GH_tools_c0m9ge.pdf"><button class="btn btn-outline text-blue-600">Download Report (PDF, 6MB)</button></a>
