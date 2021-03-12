---
title: LCA inside Rhino
order: 0.2
is_subcarticle: true
---
In this tutorial we will have a look on how we can show in **real-time embodied carbon footprint estimation** in **Rhino 3D**, which helps to optimise or compare building or component designs quickly.

<div class="mx-auto mb-16 relative embedded-video"><iframe src="https://player.vimeo.com/video/521934161?color=059669&title=1&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="allowfullscreen" title="Life cycle analysis of Rhinoceros 3D model" class="xs:rounded-lg xs:shadow-lg absolute w-full h-full"></iframe></div>

> made by NOMAD Architects

<a rel="noopener" target="_blank" href="https://res.cloudinary.com/patternbuildings/raw/upload/v1615458753/tutorials/LCA_in_Rhino_qemp66.gh"><button class="btn btn-fill bg-blue-600">Download Grasshopper base file (GH, 45KB)</button></a>

<a rel="noopener" target="_blank" href="https://drive.google.com/file/d/1W8XvCjr2R0YCDSQiygPYAd2g5rA89Cxz/view?usp=sharing"><button class="btn btn-outline text-blue-600 mb-8">Download example files (ZIP, 61.4MB)</button></a>

- - -

The bespoke component library can be used to rapidly assess building designs in regards to greenhouse gas emissions with the help of a second GH file which shows simplified LCA results in the Rhino viewport. This GH-tool consists of three main parts: base components for inserting material and building component information, a processing component which sorts and displays the information on the Rhino viewport and a component to customize preview settings.

<figure>
<figcaption>Workflow to estimate building carbon footprint in the early design phase</figcaption>
<img src="https://res.cloudinary.com/patternbuildings/image/upload/v1615531432/tutorials/fig07_dploxv.png" alt="Workflow to estimate building carbon footprint in the early design phase">
</figure>

<figure>
<figcaption>Main parts of the Grasshopper file</figcaption>
<img src="https://res.cloudinary.com/patternbuildings/image/upload/v1615531433/tutorials/fig08_aky6hv.png" alt="Main parts of the Grasshopper file">
</figure>

To conduct a simplified LCA directly in Rhino one has to have prepared a component library that holds useful generic data for various building components, such as carbon emissions per square meter of component. The "Base Components" are used to insert this information into GH and link it to specific layers. Consequently, areal or volumetric data is multiplied with the listed carbon intensity of the building component. Therefore, the building model in Rhino can be drawn very simplified and has to contain only simple surfaces or volumes representing the assessed, more complex building components of the component library. Three dierent Base Components are included in the file which can be used depending on the provided quantity type of the component ("M2" - square meter, "M3" - cubic meter, "Nr." - number of components).

<figure>
<figcaption>Base Components for component and material emission input</figcaption>
<img src="https://res.cloudinary.com/patternbuildings/image/upload/v1615531432/tutorials/fig09_swoxqr.png" alt="Base Components for component and material emission input">
</figure>

<figure>
<figcaption>Component library in MS Excel</figcaption>
<img src="https://res.cloudinary.com/patternbuildings/image/upload/v1615531433/tutorials/fig10_cfjl5l.png" alt="Component library in MS Excel">
</figure>

In order to add a building component to the carbon footprint estimation in Rhino a Base Component (M2, M3 or Nr.) has to be copied. A Rhino layer can be linked with the component "Layer Reference" (for M2), or geometries set (for M3 and Nr.). Therefore, the layer name in Rhino has to be unique again and include either surfaces or closed volumes. The panel "Material / Component name" is only informative input for the user to specify and remember used component types of the component library. In the panel "kg CO2eq / m2; kg CO2eq / m3;kg CO2eq / component" is added the respective emission data of the chosen building component. In the value list "Class" the user can choose from predefined material classification (same as in One ClickLCA) to specify to which IFC class the emissions of the particular component will be counted. A next "Base Component" is copied and filed for each next building component which should be added to the LCA. The processing component filters the information with the help of the "Expression" components and joins the IFC classes with the fitting carbon data. The component "Conduit Chart" from the GH-plugin Proving Ground is used to write the information as a chart on the Rhino viewport. The file is prepared to showcase one to three dierent LCA's simultaneously on the viewport in form of bar diagrams which display carbon emissions per IFC class and the total carbon emissions of the designs. The "Preview Settings" give the user the option to change size, placement and ratio of the charts.

<figure>
<figcaption>The processing component</figcaption>
<img src="https://res.cloudinary.com/patternbuildings/image/upload/v1615531433/tutorials/fig11_ogqesy.png" alt="The processing component">
</figure>

<figure>
<figcaption>Preview of emissions in Rhino 3D interface</figcaption>
<img src="https://res.cloudinary.com/patternbuildings/image/upload/v1615531432/tutorials/fig12_yfz8bf.png" alt="Preview of emissions in Rhino 3D interface">
</figure>

- - -

### Learn more

Read our report on development of a Grasshopper script which enables carbon footprint assesment in the early stages of architectural planning

<a rel="noopener" target="_blank" href="https://res.cloudinary.com/patternbuildings/image/upload/v1615456641/tutorials/paper_on_GH_tools_c0m9ge.pdf"><button class="btn btn-outline text-blue-600">Download Report (PDF, 6MB)</button></a>